const accessToken =  "";
const endpoint = "https://api.github.com/graphql";

const graphql = `
{
  user(login: "abeyuya") {
    organizations(last: 5) {
      nodes {
        name
        url
        repositories(last:100) {
          nodes {
            name
            url
            pullRequests(last:30 states:[OPEN] ) {
              nodes {
                url
                title
                reviewRequests(last:10) {
                  nodes {
                    requestedReviewer {
                      ... on User {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

const buildRequestOption = (graphql: string) => {
  return {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
    payload: JSON.stringify({ query: graphql }),
  };
};


export const getAssignedPullRequests = () => {
  const option = buildRequestOption(graphql);
  const res = UrlFetchApp.fetch(endpoint, option);
  const json = JSON.parse(res.getContentText());
  return json;
};
