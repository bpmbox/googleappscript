import * as publicUiFunctions from './ui';
import * as publicSheetFunctions from './sheets';
//import * as ind as from './index'
//import * as publicChatFunctions from './chat';

// Expose public functions by attaching to `global`
global.onOpen = publicUiFunctions.onOpen;
global.openDialog = publicUiFunctions.openDialog;
global.openDialogBootstrap = publicUiFunctions.openDialogBootstrap;
global.openAboutSidebar = publicUiFunctions.openAboutSidebar;
global.getSheetsData = publicSheetFunctions.getSheetsData;
global.addSheet = publicSheetFunctions.addSheet;
global.deleteSheet = publicSheetFunctions.deleteSheet;
global.setActiveSheet = publicSheetFunctions.setActiveSheet;
global.openChat = publicUiFunctions.openChat;
global.openDhtmlx = publicUiFunctions.openDhtmlx;
global.openChaten = publicUiFunctions.openChaten;
global.doGet = publicUiFunctions.doGet;
global.setActiveValue = setActiveValue;
global.getMainSheet = getMainSheet;
global.setNextRange = setNextRange;
global.sample_activate_right_cell = sample_activate_right_cell;
global.myFunction2 = myFunction2;
global.getNextCellData = getNextCellData;


/************************************************************************
テーブル内容から　シートにデータの書き出し
@function testWrittoTOSheet
@params データベース名
@params テーブル名
@params シート名
*************************************************************************/
//セルの隣のデータを取得
export const getNextCellData = () => {
  var bk = SpreadsheetApp.getActiveSpreadsheet();
  var sh = bk.getActiveSheet();
  var rng = sh.getActiveCell();
  myFunction2();
  var c = rng.offset(0, 1).getValue();
  //rng.offset(0, 2).setValue('getNextCellDeta');
  //rng.offset(0, 2).setValue('getNextCellDeta');
  
  rng.offset(1, 0).activate();
  return c


}

export const testINPUTCELL = () => {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var doc = doc.getActiveSheet();
    //doc.clear();
    var cell = doc.getRange("a1").setValue(3333333333333333);

    var sheet = SpreadsheetApp.openById("1IvJUL7faubds4VsWxysaBTGOGJ0X-qmOgUeyJa5xZVI").getSheetByName('LOG');
    //  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('LOG');
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.getActiveCell().setValue('選択セルに値をセット');

    sheet.getActiveSelection().setValue('複数セルに値セット');

    sheet.getRange('A5').setValue('A5に値をセット').setBackgroundColor('#eee');

    sheet.getRange(sheet.getLastRow() + 1, sheet.getLastColumn()).
        setValue('最終列の最終行+1に値をセット');

};

export const setActiveSheet = sheetName => {
    SpreadsheetApp.getActive()
        .getSheetByName(sheetName)
        .activate();
    return getSheetsData();
};

/************************************************************************
テーブル内容から　シートにデータの書き出し
@function testWrittoTOSheet
@params データベース名
@params テーブル名
@params シート名
*************************************************************************/
export const setNextRange = () => {
    var range = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('C1:D4');
    SpreadsheetApp.setActiveRange(range);
}

/**
 * Replaces the active cell value with the given value.
 *
 * @param {Number} value A reference number to replace with.
 */
export const setActiveValue = (value) => {
    // Use data collected from sidebar to manipulate the sheet.
    var sheet = getMainSheet();
    var cell = sheet.getActiveCell();
    //var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
    cell.setValue(value);
    sample_activate_right_cell()
}


// 特定のシートのメモ化を行う関数
//var getMainSheet = "";
export const getMainSheet = () => {
    //if (getMainSheet.memoSheet) {
    //  return getMainSheet.memoSheet;
    //}
    let memoSheet;
    //getMainSheet.memoSheet = SpreadsheetApp.getActive().getSheetByName('メインシート');

    memoSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    return memoSheet;
}

//http://www.relief.jp/docs/google-spreadsheet-gas-offset.html
export const sample_activate_right_cell = () => {
    var bk = SpreadsheetApp.getActiveSpreadsheet();
    var sh = bk.getActiveSheet();
    var rng = sh.getActiveCell();
  
    // show the row & column number of the active cell
    //　Browser.msgBox(rng.getRow());
    //　Browser.msgBox(rng.getColumn());
  
    //  var cell = {0:1}
  
    // x = rng.getColumn()
    y = rng.getRow()
      // W = rng.getWidth()
      // N = rng.getA1Notation()
      //Logger.log(N)
  
    // Logger.log(W)
    // activate the right cell
  
    var selection = SpreadsheetApp.getSelection();
    // var currentCell = selection.getCurrentCell();
    // Logger.log(currentCell.getA1Notation());
  
    // var selection = SpreadsheetApp.getSelection();
    // Current cell: B2
    // var currentCell = selection.getCurrentCell();
  
    // Active range: B2:C4
    var activeRange = selection.getActiveRange();
    //  Logger.log(activeRange.getA1Notation());
    G = activeRange.getLastColumn()
      //Logger.log(G)
      // Active range list: [D4, B2:C4]
      //var activeRangeList = selection.getActiveRangeList();
  
    sh.getRange(y, G + 1).activate();
    //　rng.offset(0, 1).activate();
  
  }
  /*******************************************
   * params:any
   * retunr message
   */
  export const myFunction2 = () =>{
    console.log("macro,s myFunnc2")
    var spreadsheet = SpreadsheetApp.getActive();
    //spreadsheet.getRange('E5').activate();
    //シャベルフラグの取得
    return spreadsheet.getRange('A1').getValue()
    //spreadsheet.getCurrentCell().setValue('sssss');
    //spreadsheet.getRange('F5').activate();
    //spreadsheet.getCurrentCell().setValue('sssss');
  };