export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('My Sample React Project') // edit me!
    .addItem('Sheet Editor', 'openDialog')
    .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
    .addItem('About me', 'openAboutSidebar')
    .addItem("Open Chat",'openChat')
    .addItem("vanila",'vanila')

  menu.addToUi();
};

export const openDialog = () => {
  //const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
  //  .setWidth(600)
  //  .setHeight(600);

    var ui = HtmlService.createTemplateFromFile('dialog-demo')
    .evaluate()
    .setTitle("SIDEBAR_TITLE")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showModalDialog(ui, 'Sheet Editor');

  //SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
};

export const vanila = () => {
  var response = Browser.msgBox("ようこそ!");
  const html = HtmlService.createHtmlOutputFromFile('VanillaApp')
    .setWidth(600)
    .setHeight(600);
    SpreadsheetApp.getUi().showSidebar(html);
};

export const openChat = () => {
  //var response = Browser.msgBox("ようこそ!");
  const html = HtmlService.createHtmlOutputFromFile('chat')
    .setWidth(600)
    .setHeight(600);
    SpreadsheetApp.getUi().showSidebar(html);
};

export const openDialogBootstrap = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};

export const doGet = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
