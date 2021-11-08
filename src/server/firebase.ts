export class firebase{
   getSheetsData = () => {
            return "test";
      };
}

export function imports(filename) {
      return HtmlService.createHtmlOutputFromFile(filename).getContent();
}