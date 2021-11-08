import Server from 'gas-client';

const { PORT } = process.env;
//
const server = new Server({
  // this is necessary for local development but will be ignored in production
  allowedDevelopmentDomains: `https://3000-maroon-wombat-edp1a7z0.ws-us17.gitpod.io`,
});

export default server;
