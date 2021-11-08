function graphql() {}

function onOpen() {}

function openDialog() {}

function openDialogBootstrap() {}

function openAboutSidebar() {}

function getSheetsData() {}

function addSheet() {}

function deleteSheet() {}

function setActiveSheet() {}

function openChat() {}

function openDhtmlx() {}

function openChaten() {}

function doGet() {}

function setActiveValue() {}

function getMainSheet() {}

function setNextRange() {}

function sample_activate_right_cell() {}

function myFunction2() {}

function getNextCellData() {}

function imports() {}

!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 4);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", (function() {
        return onOpen;
    })), __webpack_require__.d(__webpack_exports__, "g", (function() {
        return openDialog;
    })), __webpack_require__.d(__webpack_exports__, "f", (function() {
        return openDhtmlx;
    })), __webpack_require__.d(__webpack_exports__, "d", (function() {
        return openChat;
    })), __webpack_require__.d(__webpack_exports__, "e", (function() {
        return openChaten;
    })), __webpack_require__.d(__webpack_exports__, "h", (function() {
        return openDialogBootstrap;
    })), __webpack_require__.d(__webpack_exports__, "c", (function() {
        return openAboutSidebar;
    })), __webpack_require__.d(__webpack_exports__, "a", (function() {
        return doGet;
    }));
    var onOpen = function() {
        SpreadsheetApp.getUi().createMenu("My Sample React Project").addItem("Sheet Editor", "openDialog").addItem("Sheet Editor (Bootstrap)", "openDialogBootstrap").addItem("About me", "openAboutSidebar").addItem("Open Chat", "openChat").addItem("Open Chaten", "openChaten").addItem("open dhtmx", "openDhtmlx").addToUi();
    }, openDialog = function() {
        var ui = HtmlService.createTemplateFromFile("dialog-demo").evaluate().setTitle("SIDEBAR_TITLE").setSandboxMode(HtmlService.SandboxMode.IFRAME);
        SpreadsheetApp.getUi().showModalDialog(ui, "Sheet Editor");
    }, openDhtmlx = function() {
        Browser.msgBox("ようこそ!");
        var html = HtmlService.createHtmlOutputFromFile("dhtmx").setWidth(600).setHeight(600);
        SpreadsheetApp.getUi().showSidebar(html);
    }, openChat = function() {
        var html = HtmlService.createTemplateFromFile("chat").evaluate().setTitle("SIDEBAR_TITLE").setSandboxMode(HtmlService.SandboxMode.IFRAME);
        SpreadsheetApp.getUi().showSidebar(html);
    }, openChaten = function() {
        var html = HtmlService.createTemplateFromFile("chaten").evaluate().setTitle("SIDEBAR_TITLE").setSandboxMode(HtmlService.SandboxMode.IFRAME);
        SpreadsheetApp.getUi().showSidebar(html);
    }, openDialogBootstrap = function() {
        var html = HtmlService.createHtmlOutputFromFile("dialog-demo-bootstrap").setWidth(600).setHeight(600);
        SpreadsheetApp.getUi().showModalDialog(html, "Sheet Editor (Bootstrap)");
    }, openAboutSidebar = function() {
        var html = HtmlService.createHtmlOutputFromFile("sidebar-about-page");
        SpreadsheetApp.getUi().showSidebar(html);
    }, doGet = function() {
        var html = HtmlService.createHtmlOutputFromFile("sidebar-about-page");
        SpreadsheetApp.getUi().showSidebar(html);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0, exports.deleteSheet = exports.addSheet = exports.getSheetsData = void 0;
    var getSheets = function() {
        return SpreadsheetApp.getActive().getSheets();
    };
    exports.getSheetsData = function() {
        var activeSheetName = SpreadsheetApp.getActive().getSheetName();
        return getSheets().map((function(sheet, index) {
            var name = sheet.getName();
            return {
                name: name,
                index: index,
                isActive: name === activeSheetName
            };
        }));
    };
    exports.addSheet = function(sheetTitle) {
        return SpreadsheetApp.getActive().insertSheet(sheetTitle), (0, exports.getSheetsData)();
    };
    exports.deleteSheet = function(sheetIndex) {
        var sheets = getSheets();
        return SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]), (0, exports.getSheetsData)();
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0, exports.imports = exports.firebase = void 0;
    var firebase = function() {
        this.getSheetsData = function() {
            return "test";
        };
    };
    exports.firebase = firebase, exports.imports = function(filename) {
        return HtmlService.createHtmlOutputFromFile(filename).getContent();
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    exports.__esModule = !0, exports.getAssignedPullRequests = void 0;
    exports.getAssignedPullRequests = function() {
        var option = function(graphql) {
            return {
                method: "post",
                contentType: "application/json",
                headers: {
                    Authorization: "bearer "
                },
                payload: JSON.stringify({
                    query: graphql
                })
            };
        }('\n{\n  user(login: "abeyuya") {\n    organizations(last: 5) {\n      nodes {\n        name\n        url\n        repositories(last:100) {\n          nodes {\n            name\n            url\n            pullRequests(last:30 states:[OPEN] ) {\n              nodes {\n                url\n                title\n                reviewRequests(last:10) {\n                  nodes {\n                    requestedReviewer {\n                      ... on User {\n                        url\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'), res = UrlFetchApp.fetch("https://api.github.com/graphql", option);
        return JSON.parse(res.getContentText());
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), function(global) {
        __webpack_require__.d(__webpack_exports__, "getNextCellData", (function() {
            return getNextCellData;
        })), __webpack_require__.d(__webpack_exports__, "testINPUTCELL", (function() {
            return testINPUTCELL;
        })), __webpack_require__.d(__webpack_exports__, "setActiveSheet", (function() {
            return setActiveSheet;
        })), __webpack_require__.d(__webpack_exports__, "setNextRange", (function() {
            return setNextRange;
        })), __webpack_require__.d(__webpack_exports__, "setActiveValue", (function() {
            return setActiveValue;
        })), __webpack_require__.d(__webpack_exports__, "getMainSheet", (function() {
            return getMainSheet;
        })), __webpack_require__.d(__webpack_exports__, "sample_activate_right_cell", (function() {
            return sample_activate_right_cell;
        })), __webpack_require__.d(__webpack_exports__, "myFunction2", (function() {
            return myFunction2;
        }));
        var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), _sheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1), _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2), _graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
        global.graphql = _graphql__WEBPACK_IMPORTED_MODULE_3__["getAssignedPullRequests"], 
        global.onOpen = _ui__WEBPACK_IMPORTED_MODULE_0__["b"], global.openDialog = _ui__WEBPACK_IMPORTED_MODULE_0__["g"], 
        global.openDialogBootstrap = _ui__WEBPACK_IMPORTED_MODULE_0__["h"], global.openAboutSidebar = _ui__WEBPACK_IMPORTED_MODULE_0__["c"], 
        global.getSheetsData = _sheets__WEBPACK_IMPORTED_MODULE_1__["getSheetsData"], global.addSheet = _sheets__WEBPACK_IMPORTED_MODULE_1__["addSheet"], 
        global.deleteSheet = _sheets__WEBPACK_IMPORTED_MODULE_1__["deleteSheet"], global.setActiveSheet = _sheets__WEBPACK_IMPORTED_MODULE_1__["setActiveSheet"], 
        global.openChat = _ui__WEBPACK_IMPORTED_MODULE_0__["d"], global.openDhtmlx = _ui__WEBPACK_IMPORTED_MODULE_0__["f"], 
        global.openChaten = _ui__WEBPACK_IMPORTED_MODULE_0__["e"], global.doGet = _ui__WEBPACK_IMPORTED_MODULE_0__["a"], 
        global.setActiveValue = setActiveValue, global.getMainSheet = getMainSheet, global.setNextRange = setNextRange, 
        global.sample_activate_right_cell = sample_activate_right_cell, global.myFunction2 = myFunction2, 
        global.getNextCellData = getNextCellData, global.imports = _firebase__WEBPACK_IMPORTED_MODULE_2__["imports"];
        var getNextCellData = function() {
            var rng = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
            myFunction2();
            var c = rng.offset(0, 1).getValue();
            return rng.offset(1, 0).activate(), c;
        }, testINPUTCELL = function() {
            SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange("a1").setValue(0xbd7a625405555);
            var sheet = SpreadsheetApp.openById("1IvJUL7faubds4VsWxysaBTGOGJ0X-qmOgUeyJa5xZVI").getSheetByName("LOG");
            (sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()).getActiveCell().setValue("選択セルに値をセット"), 
            sheet.getActiveSelection().setValue("複数セルに値セット"), sheet.getRange("A5").setValue("A5に値をセット").setBackgroundColor("#eee"), 
            sheet.getRange(sheet.getLastRow() + 1, sheet.getLastColumn()).setValue("最終列の最終行+1に値をセット");
        }, setActiveSheet = function(sheetName) {
            return SpreadsheetApp.getActive().getSheetByName(sheetName).activate(), getSheetsData();
        }, setNextRange = function() {
            var range = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange("C1:D4");
            SpreadsheetApp.setActiveRange(range);
        }, setActiveValue = function(value) {
            getMainSheet().getActiveCell().setValue(value), sample_activate_right_cell();
        }, getMainSheet = function() {
            return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        }, sample_activate_right_cell = function() {
            var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(), rng = sh.getActiveCell();
            y = rng.getRow();
            var activeRange = SpreadsheetApp.getSelection().getActiveRange();
            G = activeRange.getLastColumn(), sh.getRange(y, G + 1).activate();
        }, myFunction2 = function() {
            return console.log("macro,s myFunnc2"), SpreadsheetApp.getActive().getRange("A1").getValue();
        };
    }.call(this, __webpack_require__(5));
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
} ]));