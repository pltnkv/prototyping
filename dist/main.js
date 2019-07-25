/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const icon24 = '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n'
    + '    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->\n'
    + '    <title>icon 24</title>\n'
    + '    <desc>Created with Sketch.</desc>\n'
    + '    <g id="icon-24" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n'
    + '        <g id="icon-48" transform="translate(1.000000, 2.000000)" fill="currentColor" fill-rule="nonzero">\n'
    + '            <path d="M10,15 L12.8786797,15 C13.154822,15 13.3786797,14.7761424 13.3786797,14.5 C13.3786797,14.3673918 13.3260012,14.2402148 13.232233,14.1464466 L7.35355339,8.26776695 C6.37724266,7.29145622 6.37724266,5.70854378 7.35355339,4.73223305 C7.82239434,4.2633921 8.45827912,4 9.12132034,4 L13,4 L13,1.28305684 C13,0.73077209 13.4477153,0.283056839 14,0.283056839 C14.1840048,0.283056839 14.3644421,0.333825725 14.52145,0.429775006 L20.6037206,4.14671817 C21.0749752,4.43470705 21.2235413,5.05019547 20.9355525,5.52145001 C20.8528289,5.6568159 20.7390865,5.77055823 20.6037206,5.85328183 L14.52145,9.57022499 C14.0501955,9.85821388 13.4347071,9.70964771 13.1467182,9.23839317 C13.0507689,9.08138526 13,8.90094791 13,8.71694316 L13,6 L9.12132034,6 C8.9887121,6 8.86153514,6.05267842 8.76776695,6.14644661 C8.57250481,6.34170876 8.57250481,6.65829124 8.76776695,6.85355339 L14.6464466,12.732233 C15.1152876,13.201074 15.3786797,13.8369588 15.3786797,14.5 C15.3786797,15.8807119 14.2593915,17 12.8786797,17 L9.99996671,17 L6.20711855,20.7927219 C5.81657341,21.1832069 5.18342659,21.1832069 4.79288145,20.7927219 L0.707118552,16.707095 C0.316575989,16.316589 0.316565449,15.683424 0.70708324,15.2928932 C0.707087164,15.2928893 0.707091087,15.2928854 0.707106781,15.2928932 L4.79289322,11.2071068 C5.18341751,10.8165825 5.81658249,10.8165825 6.20710678,11.2071068 L10,15 Z M15,6.93388632 L18.1645413,5 L15,3.06611368 L15,6.93388632 Z" id="Combined-Shape"></path>\n'
    + '        </g>\n'
    + '    </g>\n'
    + '</svg>';
const commands = {
    setIsInPreviewMode,
    createHotspot,
};
rtb.onReady(() => {
    const channel = new BroadcastChannel(config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]);
    channel.onmessage = function (e) {
        console.log('Received', e.data);
        if (e.data) {
            for (const key in e.data) {
                if (commands[key]) {
                    commands[key](e.data[key]);
                }
            }
        }
    };
    rtb.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'Prototype',
                svgIcon: icon24,
                onClick: () => {
                    rtb.board.ui.openLeftSidebar('sidebar.html');
                },
            },
        },
    }).then(() => __awaiter(undefined, void 0, void 0, function* () {
        rtb.addListener('ALL_WIDGETS_LOADED', () => __awaiter(this, void 0, void 0, function* () {
            console.log('ALL_WIDGETS_LOADED');
            const params = yield rtb.board.__getParamsFromBoardUrl();
            if (params.runPrototyping) {
                setIsInPreviewMode({ enable: true });
            }
        }));
    }));
});
function createStartHotspot() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield rtb.board.selection.enterSelectWidgetsMode({ allowMultiSelection: false }).then((res) => __awaiter(this, void 0, void 0, function* () {
            var screen = res.selectedWidgets[0];
            var flagWidget = (yield rtb.board.widgets.create({
                type: 'SHAPE',
                y: screen.bounds.y,
                x: screen.bounds.left - 50 - screen.bounds.height * 0.2,
                width: 100,
                height: 100,
                style: {
                    backgroundColor: '#f24726',
                    backgroundOpacity: 0.25,
                    borderOpacity: 1,
                    borderStyle: 2,
                    borderWidth: 0,
                },
                'metadata': {
                    [config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]: {
                        hotspot: true,
                        startHotspot: true,
                    },
                },
            }))[0];
            yield rtb.board.widgets.create({
                type: 'LINE',
                startWidgetId: flagWidget.id,
                endWidgetId: screen.id,
            });
            return flagWidget;
        }));
    });
}
function zoomToWidget(w) {
    return __awaiter(this, void 0, void 0, function* () {
        var v = {
            x: w.bounds.left,
            y: w.bounds.top,
            width: w.bounds.width,
            height: w.bounds.height,
        };
        var padding = {
            top: 60,
            left: 80,
            right: 80,
            bottom: 70,
        };
        rtb.board.viewport.__mask(v, padding);
        yield rtb.board.viewport.setViewport(v, padding);
    });
}
let isInPreviewMode = false;
function getIsInPreviewMode() {
    return isInPreviewMode;
}
function onCommentInPreviewMode() {
    rtb.board.ui.__selectDefaultTool();
}
function onExitFromPreviewMode() {
    setIsInPreviewMode({ enable: false });
}
function onCanvasClicked(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const widgets = yield rtb.board.widgets.__getIntersectedObjects(e.data);
        const hotspot = widgets.filter(isHotspotWidget)[0];
        console.log('onCanvasClicked', widgets, hotspot);
        if (hotspot) {
            goToConnectionOfHotspotWidget(hotspot.id);
        }
        else {
            blinkHotspots();
        }
    });
}
function getHotspots() {
    return __awaiter(this, void 0, void 0, function* () {
        const shapes = yield rtb.board.widgets.get({ type: 'shape' });
        return shapes.filter(isHotspotWidget);
    });
}
function blinkHotspots() {
    return __awaiter(this, void 0, void 0, function* () {
        const hotspots = yield getHotspots();
        const hotspotstoShow = hotspots.map(h => ({ id: h.id, clientVisible: true }));
        rtb.board.widgets.update(hotspotstoShow);
        rtb.board.widgets.__blinkWidget(hotspotstoShow);
        setTimeout(() => {
            const hotspotsToHide = hotspots.map(h => ({ id: h.id, clientVisible: false }));
            rtb.board.widgets.update(hotspotsToHide);
        }, 500);
    });
}
function showHotspots() {
    return __awaiter(this, void 0, void 0, function* () {
        const hotspots = yield getHotspots();
        const updatingHotspots = hotspots.map(h => ({
            id: h.id,
            clientVisible: true,
        }));
        rtb.board.widgets.update(updatingHotspots);
    });
}
function hideHotspots() {
    return __awaiter(this, void 0, void 0, function* () {
        const hotspots = yield getHotspots();
        const updatingHotspots = hotspots.map(h => ({
            id: h.id,
            clientVisible: false,
        }));
        rtb.board.widgets.update(updatingHotspots);
    });
}
function setIsInPreviewMode(args) {
    return __awaiter(this, void 0, void 0, function* () {
        if (args.enable) {
            const shapes = yield rtb.board.widgets.get({ 'type': 'SHAPE' });
            const hotspots = shapes.filter(isHotspotWidget);
            yield rtb.board.widgets.bringForward(hotspots);
            const hotspotsIsValid = yield checkAllHotspotsLinks(hotspots);
            if (hotspotsIsValid) {
                let startHotspot = shapes.filter(shape => shape.metadata[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]] && shape.metadata[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]].startHotspot)[0];
                if (!startHotspot) {
                    rtb.showNotification('Please select start page');
                    startHotspot = yield createStartHotspot();
                }
                if (!startHotspot) {
                    alert('Please set up start point');
                    return;
                }
                yield goToConnectionOfHotspotWidget(startHotspot.id);
                yield rtb.board.ui.__openBottomPanel();
                yield rtb.board.ui.__hidePanels();
                yield rtb.board.ui.closeLeftSidebar({});
                yield rtb.board.selection.selectWidgets([]);
                yield hideAllLinks();
                yield rtb.board.ui.__setToolbarMode('commentor');
                yield hideHotspots();
                yield rtb.board.__disableLeftClick();
                // todo BOARD_?
                rtb.addListener('COMMENT_CREATED', onCommentInPreviewMode);
                rtb.addListener('EXIT_PROTOTYPING', onExitFromPreviewMode);
                rtb.addListener('ESC_PRESSED', onExitFromPreviewMode);
                rtb.addListener('CANVAS_CLICKED', onCanvasClicked);
                isInPreviewMode = args.enable;
            }
        }
        else {
            yield rtb.board.viewport.__unmask();
            yield rtb.board.ui.__resetConfig();
            yield rtb.board.ui.__closeBottomPanel();
            yield rtb.board.ui.__setToolbarMode('editor');
            yield restoreAllLinks();
            yield showHotspots();
            yield rtb.board.__enableLeftClick();
            rtb.board.ui.openLeftSidebar('sidebar.html');
            rtb.removeListener('COMMENT_CREATED', onCommentInPreviewMode);
            rtb.removeListener('EXIT_PROTOTYPING', onExitFromPreviewMode);
            rtb.removeListener('ESC_PRESSED', onExitFromPreviewMode);
            rtb.removeListener('CANVAS_CLICKED', onCanvasClicked);
            isInPreviewMode = args.enable;
        }
    });
}
function checkAllHotspotsLinks(hotspots) {
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield rtb.board.widgets.get({ type: 'line' });
        let hotspotsWithoutLinks = hotspots.slice();
        let linkWithoutScreen;
        lines.forEach(line => {
            //for startWidgetId
            const linkedHotspot1 = hotspots.find(h => h.id === line.startWidgetId);
            if (linkedHotspot1) {
                hotspotsWithoutLinks = hotspotsWithoutLinks.filter(h => h.id !== linkedHotspot1.id);
            }
            //for endWidgetId
            const linkedHotspot2 = hotspots.find(h => h.id === line.endWidgetId);
            if (linkedHotspot2) {
                hotspotsWithoutLinks = hotspotsWithoutLinks.filter(h => h.id === linkedHotspot2.id);
            }
            if ((linkedHotspot1 || linkedHotspot2) && (!line.startWidgetId || !line.endWidgetId)) {
                linkWithoutScreen = line;
            }
        });
        if (linkWithoutScreen) {
            rtb.showErrorNotification('Please attach link to some screen');
            rtb.board.viewport.zoomToObject(linkWithoutScreen);
            return Promise.resolve(false);
        }
        if (hotspotsWithoutLinks.length > 0) {
            rtb.showErrorNotification('Please add link to hotspot');
            rtb.board.viewport.zoomToObject(hotspotsWithoutLinks[0]);
            return Promise.resolve(false);
        }
        return Promise.resolve(true);
    });
}
function createHotspot() {
    return __awaiter(this, void 0, void 0, function* () {
        const viewport = yield rtb.board.viewport.getViewport();
        const width = 152;
        const height = 66;
        console.log(viewport);
        yield rtb.board.widgets.create({
            metadata: {
                [config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]: {
                    hotspot: true,
                },
            },
            type: 'SHAPE',
            x: (viewport.x + viewport.width / 2 - width / 2),
            y: (viewport.y + viewport.height / 2 - height / 2),
            style: {
                shapeType: 3,
                backgroundColor: '#8fd14f',
                backgroundOpacity: 0.5,
                borderColor: 'transparent',
                borderWidth: 2,
                borderOpacity: 1,
                borderStyle: 2,
                fontFamily: 10,
                textColor: '#1a1a1a',
                textAlign: 'c',
                textAlignVertical: 'm',
                fontSize: 17,
                bold: 0,
                italic: 0,
                underline: 0,
                strike: 0,
                highlighting: '',
            },
            createdUserId: '',
            lastModifiedUserId: '',
            width: width,
            height: height,
            rotation: 0,
            text: '',
        });
    });
}
function isHotspotWidget(widget) {
    return widget.metadata[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]] && widget.metadata[config__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]].hotspot;
}
function goToConnectionOfHotspotWidget(widgetId) {
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield rtb.board.widgets.get({ 'type': 'LINE', 'startWidgetId': widgetId });
        if (lines.length > 0) {
            if (lines.length > 1) {
                alert('Too match links');
            }
            else {
                const line = lines[0];
                if (!line.endWidgetId) {
                    alert('Can not find the end of connection');
                }
                else {
                    const sourceWidget = (yield rtb.board.widgets.get({ 'id': line.startWidgetId }))[0];
                    if (isHotspotWidget(sourceWidget)) {
                        yield rtb.board.selection.selectWidgets([]);
                        const targetWidget = (yield rtb.board.widgets.get({ 'id': line.endWidgetId }))[0];
                        yield zoomToWidget(targetWidget);
                    }
                }
            }
        }
        else {
            alert('Hotspot has no lines');
        }
    });
}
function hideAllLinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield rtb.board.widgets.get({ 'type': 'LINE' });
        const newLines = lines
            .map(({ id }) => ({
            id,
            clientVisible: false,
        }));
        yield rtb.board.widgets.update(newLines);
    });
}
function restoreAllLinks() {
    return __awaiter(this, void 0, void 0, function* () {
        const lines = yield rtb.board.widgets.get({ 'type': 'LINE' });
        const newLines = lines
            .map(({ id }) => ({
            id,
            clientVisible: true,
        }));
        yield rtb.board.widgets.update(newLines);
    });
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ID", function() { return APP_ID; });
const APP_ID = '3074457346759443169';


/***/ })
/******/ ]);