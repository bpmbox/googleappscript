export const doGeter = () => {
    const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
    SpreadsheetApp.getUi().showSidebar(html);
  };