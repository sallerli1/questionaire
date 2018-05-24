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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/academy-class-input.js":
/*!***********************************************!*\
  !*** ./src/components/academy-class-input.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_academy_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/academy-class.js */ \"./src/data/academy-class.js\");\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.js */ \"./src/data/data.js\");\n\r\n\r\n\r\nlet academies = Object.keys(_data_academy_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    selector: '#academy-class-input',\r\n    template: \r\n        '<select class=\"academy-input\" value=\"{{currentAcademy}}\" bind-change=\"handleAcademyChange\">\\\r\n            <option data-for=\"academies\">{{item}}</option>\\\r\n        </select>\\\r\n        <select bind-change=\"handleClassChange\">\\\r\n            <option data-for=\"classList\">{{item}}</option>\\\r\n        </select>',\r\n\r\n    data: {\r\n        currentAcademy: \"人文与外国语学院\",\r\n        academies,\r\n        classList: []\r\n    },\r\n\r\n    methods: {\r\n        handleAcademyChange(event, data) {\r\n            let value = event.target.value\r\n            data.currentAcademy = value\r\n            data.classList = _data_academy_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][value]\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info.academyName = value\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info.className = data.classList[0]\r\n        },\r\n\r\n        handleClassChange(event, data) {\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info.className = event.target.value\r\n        }\r\n    },\r\n\r\n    mounted() {\r\n        this.data.classList = _data_academy_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][this.data.currentAcademy]\r\n        _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info.academyName = this.data.currentAcademy\r\n        _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info.className = this.data.classList[0]\r\n    },\r\n\r\n    updated() {\r\n        let select = this.element.querySelector('.academy-input')\r\n\r\n        for (const option of select.options) {\r\n            if (option.value == this.data.currentAcademy) {\r\n                option.selected = true\r\n            }\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/components/academy-class-input.js?");

/***/ }),

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n/* harmony import */ var _academy_class_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academy-class-input.js */ \"./src/components/academy-class-input.js\");\n/* harmony import */ var _tutor_input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tutor-input.js */ \"./src/components/tutor-input.js\");\n/* harmony import */ var _questions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions.js */ \"./src/components/questions.js\");\n/* harmony import */ var _submit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submit.js */ \"./src/components/submit.js\");\n/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress */ \"./src/components/progress.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    selector: '#content',\r\n    template: '<section id=\"academy-class-input\">\\\r\n        </section>\\\r\n        <section class=\"tutorNameInput\">\\\r\n        </section>\\\r\n        <section data-for=\"40\" class=\"question _{{num}}\">\\\r\n        </section>\\\r\n        <div id=\"submit\">\\\r\n        </div>',\r\n    data: {\r\n    }\r\n}).then(() => {\r\n    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_academy_class_input_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_tutor_input_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n}).then(() => {\r\n    _questions_js__WEBPACK_IMPORTED_MODULE_3__[\"singleQuestions\"].forEach((question) => {\r\n        Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(question)\r\n    })\r\n\r\n    _questions_js__WEBPACK_IMPORTED_MODULE_3__[\"multipleQuestions\"].forEach((question) => {\r\n        Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(question)\r\n    })\r\n\r\n    _questions_js__WEBPACK_IMPORTED_MODULE_3__[\"textQuestions\"].forEach((question) => {\r\n        Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(question)\r\n    })\r\n    \r\n}).then(() => {\r\n    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_progress__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\r\n}).then(() => {\r\n    Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_submit_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\r\n}));\n\n//# sourceURL=webpack:///./src/components/content.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\r\n    selector: '#header',\r\n    template: `<h1  class=\"header_top\">\r\n    <span>{{title}}</span>\r\n</h1>\r\n<article class=\"header_bottom\">\r\n    <span>{{hint}}</span>\r\n</article>`,\r\n    data: {\r\n        title: '西安理工大学',\r\n        hint: '2017-2018学年本科生导师工作情况调查问卷',\r\n        list: [{\r\n            name: 'saller',\r\n            age: '11'\r\n        }, {\r\n            name: 'saller1',\r\n            age: '22'\r\n        }]\r\n    }\r\n}));\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/components/progress.js":
/*!************************************!*\
  !*** ./src/components/progress.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.js */ \"./src/data/data.js\");\n\r\n\r\n\r\nlet progress = {\r\n    selector: '#progress',\r\n    template: '<div style=\"width:{{percent}}%\"></div>',\r\n    data: {\r\n        percent: _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].percent\r\n    }\r\n}\r\n\r\n_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].proxy(_data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], progress.data, 'percent', 'percent')\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (progress);\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/progress.js?");

/***/ }),

/***/ "./src/components/questions.js":
/*!*************************************!*\
  !*** ./src/components/questions.js ***!
  \*************************************/
/*! exports provided: singleQuestions, multipleQuestions, textQuestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"singleQuestions\", function() { return singleQuestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multipleQuestions\", function() { return multipleQuestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textQuestions\", function() { return textQuestions; });\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ \"./src/data/data.js\");\n\r\n\r\n\r\nconst singles = [{\r\n    selector: '.question._1',\r\n    data: {\r\n        index: 1,\r\n        title: '1：请问你对班级导师的工作是否满意',\r\n        answers: [{\r\n            name: '1',\r\n            value: 'A',\r\n            text: '很满意',\r\n        }, {\r\n            value: 'B',\r\n            text: '满意',\r\n        }, {\r\n            value: 'C',\r\n            text: '一般'\r\n        }, {\r\n            value: 'D',\r\n            text: '不满意'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._2',\r\n    data: {\r\n        index: 2,\r\n        title: '2：你是否清楚你导师的联系方式和办公室地址',\r\n        answers: [{\r\n            name: '2',\r\n            value: 'A',\r\n            text: '十分清楚',\r\n        }, {\r\n            value: 'B',\r\n            text: '大概清楚',\r\n        },{\r\n            value: 'C',\r\n            text: '不太清楚'\r\n        }, {\r\n            value: 'D',\r\n            text: '完全不知道'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._3',\r\n    data: {\r\n        index: 3,\r\n        title: '3：本学年你的班级导师共召开班会情况',\r\n        answers: [{\r\n            name: '3',\r\n            value: 'A',\r\n            text: '每周或每月定期召开',\r\n        }, {\r\n            value: 'B',\r\n            text: '2次以上',\r\n        },{\r\n            value: 'C',\r\n            text: '1-2次'\r\n        }, {\r\n            value: 'D',\r\n            text: '从没开过'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._4',\r\n    data: {\r\n        index: 4,\r\n        title: '4：本学年你的导师深入学生宿舍情况',\r\n        answers: [{\r\n            name: '4',\r\n            value: 'A',\r\n            text: '每周来1次宿舍',\r\n        }, {\r\n            value: 'B',\r\n            text: '每月来1-2次宿舍',\r\n        },{\r\n            value: 'C',\r\n            text: '每学期来1-2次宿舍'\r\n        }, {\r\n            value: 'D',\r\n            text: '没来过宿舍'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._5',\r\n    data: {\r\n        index: 5,\r\n        title: '5：你是否满意导师和你见面、交流的情况',\r\n        answers: [{\r\n            name: '5',\r\n            value: 'A',\r\n            text: '满意，导师十分负责',\r\n        }, {\r\n            value: 'B',\r\n            text: '一般，希望加强联系',\r\n        },{\r\n            value: 'C',\r\n            text: '不满意，希望减弱联系'\r\n        }, {\r\n            value: 'D',\r\n            text: '没感觉'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._6',\r\n    data: {\r\n        index: 6,\r\n        title: '6：你的导师在学业方面对你有何指导和帮助',\r\n        answers: [{\r\n            name: '6',\r\n            value: 'A',\r\n            text: '提供学业指导、答疑和专业介绍、兴趣培养，对个人帮助很大',\r\n        }, {\r\n            value: 'B',\r\n            text: '提供专业介绍和学业咨询，对个人有一定帮助',\r\n        },{\r\n            value: 'C',\r\n            text: '偶尔有帮助'\r\n        }, {\r\n            value: 'D',\r\n            text: '基本无帮助'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._7',\r\n    data: {\r\n        index: 7,\r\n        title: '7：你的导师在生活方面对你有何指导与帮助',\r\n        answers: [{\r\n            name: '7',\r\n            value: 'A',\r\n            text: '关心个人生活并帮助解决生活上的难题，帮助很大',\r\n        }, {\r\n            value: 'B',\r\n            text: '关心个人生活，嘘寒问暖，对个人有一定帮助',\r\n        },{\r\n            value: 'C',\r\n            text: '偶尔有帮助'\r\n        }, {\r\n            value: 'D',\r\n            text: '基本无帮助'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._8',\r\n    data: {\r\n        index: 8,\r\n        title: '8：你的导师在心理方面对你有何指导和帮助',\r\n        answers: [{\r\n            name: '8',\r\n            value: 'A',\r\n            text: '师生之间经常谈心交流，主动提供指导，对个人帮助很大',\r\n        }, {\r\n            value: 'B',\r\n            text: '可以提供心理方面的指导，对个人有一定帮助',\r\n        },{\r\n            value: 'C',\r\n            text: '偶尔有帮助'\r\n        }, {\r\n            value: 'D',\r\n            text: '基本无帮助'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._9',\r\n    data: {\r\n        index: 9,\r\n        title: '9: 导师对你的态度如何',\r\n        answers: [{\r\n            name: '9',\r\n            value: 'A',\r\n            text: '十分热情，循循善诱',\r\n        }, {\r\n            value: 'B',\r\n            text: '比较热心，工作称职',\r\n        },{\r\n            value: 'C',\r\n            text: '态度一般，偶尔过问'\r\n        }, {\r\n            value: 'D',\r\n            text: '态度冷淡,不闻不问'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._10',\r\n    data: {\r\n        index: 10,\r\n        title: '10：导师与你的沟通方式是什么',\r\n        answers: [{\r\n            name: '10',\r\n            value: 'A',\r\n            text: '双方都很主动，有良好交流',\r\n        }, {\r\n            value: 'B',\r\n            text: '老师主动联系学生，提供指导并进行交流，但学生自己不主动',\r\n        },{\r\n            value: 'C',\r\n            text: '学生主动找老师，能提供帮助，但不主动联系学生'\r\n        }, {\r\n            value: 'D',\r\n            text: '双方均不主动，师生没有交流'\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._11',\r\n    data: {\r\n        index: 11,\r\n        title: '11：您觉得目前导师制有以下哪些弊端',\r\n        answers: [{\r\n            name: '11',\r\n            value: 'A',\r\n            text: '浮于表面，走形式',\r\n        }, {\r\n            value: 'B',\r\n            text: '导师与学生联系太少',\r\n        },{\r\n            value: 'C',\r\n            text: '学生不知道应该找导师获得哪些帮助'\r\n        }, {\r\n            value: 'D',\r\n            text: '导师没有多余精力'\r\n        }]\r\n    }\r\n}]\r\n\r\nconst multiples = [/* {\r\n    selector: '.question._3',\r\n    data: {\r\n        index: 3,\r\n        title: '3：本学年你的班级导师共召开班会情况',\r\n        answers: [{\r\n            name: 'tutor-office',\r\n            value: 'A',\r\n            text: '每周或每月定期召开',\r\n        }, {\r\n            value: 'B',\r\n            text: '2次以上',\r\n        },{\r\n            value: 'C',\r\n            text: '1-2次'\r\n        }, {\r\n            value: 'D',\r\n            text: '从没开过'\r\n        }]\r\n    }\r\n} */]\r\n\r\nconst textQs = [{\r\n    selector: '.question._12',\r\n    data: {\r\n        index: 12,\r\n        title: \"12：对导师工作有什么看法或建议？（可发表观点，或对改进导师工作提供一些具体的设想、措施等）\"\r\n    }\r\n}]\r\n\r\nfor (const question of singles) {\r\n\r\n    let name\r\n    for (const answer of question.data.answers) {\r\n        if (answer.name) name = answer.name\r\n        answer.icon = 'iconfont icon-radio02'\r\n        answer.name = name\r\n        answer.checked = false\r\n    }\r\n\r\n    question.template = `<h2 class=\"questionName\">\r\n    <p>{{title}}</p>\r\n</h2>\r\n<div class=\"answers\">\r\n    <div class=\"answerFrame\" data-for=\"answers\">\r\n        <div class=\"answer {{selected}}\" bind-touchend='click' bind-touchmove='setFlag'>\r\n            <input type=\"radio\" value=\"{{value}}\" name=\"{{name}}\" checked='{{checked}}' />\r\n            <i class='{{icon}}'></i>\r\n            <p>{{text}}</p>\r\n        </div>\r\n    </div>\r\n</div>`\r\n    question.methods = {\r\n        setFlag(event, data) {\r\n            this.data.moved = true;\r\n        },\r\n        click(event, data) {\r\n            if (this.data.moved) {\r\n                this.data.moved = false\r\n                return\r\n            }\r\n            event.cancelBubble = true\r\n            event.preventDefault()\r\n            event.stopImmediatePropagation()\r\n            for (const answer of this.data.answers) {\r\n                answer.checked = false\r\n                if (answer.checked) {\r\n                    answer.selected = 'selected'\r\n                    answer.icon = 'iconfont icon-radio01'\r\n                } else {\r\n                    answer.selected = ''\r\n                    answer.icon = 'iconfont icon-radio02'\r\n                }\r\n            }\r\n\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index] = data.value\r\n\r\n            data.checked = true\r\n            if (data.checked) {\r\n                data.selected = 'selected'\r\n                data.icon = 'iconfont icon-radio01'\r\n            } else {\r\n                data.selected = ''\r\n                data.icon = 'iconfont icon-radio02'\r\n            }\r\n\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].percent = calcProgress()\r\n        }\r\n    }\r\n}\r\n\r\nfor (const question of multiples) {\r\n\r\n    let name\r\n    for (const answer of question.data.answers) {\r\n        if (answer.name) name = answer.name\r\n        answer.icon = 'iconfont icon-checkboxblank',\r\n        answer.checked = false\r\n    }\r\n\r\n    question.template = `<h2 class=\"questionName\">\r\n    <p>{{title}}</p>\r\n</h2>\r\n<div class=\"answers\">\r\n    <div class=\"answerFrame\" data-for=\"answers\">\r\n        <div class=\"answer {{selected}}\" bind-touchend='click' bind-touchmove='setFlag'>\r\n            <input type=\"checkbox\" value=\"{{value}}\" name=\"{{name}}\" checked='{{checked}}' />\r\n            <i class='{{icon}}'></i>\r\n            <p>{{text}}</p>\r\n        </div>\r\n    </div>\r\n</div>`\r\n    question.methods = {\r\n        setFlag(event, data) {\r\n            this.data.moved = true;\r\n        },\r\n        click(event, data) {\r\n            if (this.data.moved) {\r\n                this.data.moved = false\r\n                return\r\n            }\r\n            event.cancelBubble = true\r\n            event.preventDefault()\r\n            event.stopImmediatePropagation()\r\n\r\n            if (!_data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index]) {\r\n                _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index] = ''\r\n            }\r\n\r\n            data.checked = !data.checked\r\n\r\n            if (data.checked) {\r\n                _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index] += data.value\r\n                data.selected = 'selected'\r\n                data.icon = 'iconfont icon-checkbox'\r\n            } else {\r\n                _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index] = _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index]\r\n                    .split('')\r\n                    .filter((value) => {\r\n                        return value !== data.value\r\n                    })\r\n                    .join('')\r\n\r\n                if (_data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index] === '') {\r\n                    delete _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index]\r\n                }\r\n\r\n                data.selected = ''\r\n                data.icon = 'iconfont icon-checkboxblank'\r\n            }\r\n\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].percent = calcProgress()\r\n        }\r\n    }\r\n}\r\n\r\nfor (const question of textQs) {\r\n\r\n    question.template = '<label class=\"questionName\">{{title}}</label>\\\r\n        <textarea bind-input=\"input\"></textarea>'\r\n    question.methods = {\r\n        input(event, data) {\r\n            event.cancelBubble = true\r\n            event.preventDefault()\r\n            event.stopImmediatePropagation()\r\n\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index] = event.target.value\r\n\r\n            if (_data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index] === '') {\r\n                delete _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers[this.data.index]\r\n            }\r\n\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].percent = calcProgress()\r\n        }\r\n    }\r\n}\r\n\r\nfunction calcProgress() {\r\n    return (Object.keys(_data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers).length / (singles.length + multiples.length + textQs.length)) * 100\r\n}\r\n\r\nconst singleQuestions = singles\r\nconst multipleQuestions = multiples\r\nconst textQuestions = textQs\n\n//# sourceURL=webpack:///./src/components/questions.js?");

/***/ }),

/***/ "./src/components/submit.js":
/*!**********************************!*\
  !*** ./src/components/submit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ \"./src/data/data.js\");\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ \"./src/request.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    selector: '#submit',\r\n    template: `<a bind-touchstart='submit'>{{text}}</a>`,\r\n    data: {\r\n        text: \"提交\",\r\n        url: 'http://yiban.xaut.edu.cn/weixin/question/submit.php'\r\n    },\r\n    methods: {\r\n        submit() {\r\n            console.log(_data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n            if (_data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].percent>=100 && _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].info.tutorName) {\r\n\r\n                let reqData = _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].answers\r\n                reqData.tutorName = _data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tutorName\r\n\r\n                Object(_request_js__WEBPACK_IMPORTED_MODULE_1__[\"post\"])(this.data.url, reqData).then((res) => {\r\n                    if (res.success) {\r\n                        alert('提交成功')\r\n                    } else {\r\n                        alert(res.error.code)\r\n                    }\r\n                }).catch(() => {\r\n                    alert('未知网路错误')\r\n                })\r\n            } else if (!_data_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].info.tutorName) {\r\n                alert('请填写导师姓名')\r\n            } else {\r\n                alert('请完成问卷')\r\n            }\r\n        }\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/submit.js?");

/***/ }),

/***/ "./src/components/tutor-input.js":
/*!***************************************!*\
  !*** ./src/components/tutor-input.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.js */ \"./src/data/data.js\");\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    selector: '.tutorNameInput',\r\n    data: {\r\n        label: '导师姓名:'\r\n    },\r\n    template: `<label for=\"tutorName\">{{label}}</label>\r\n    <input bind-input='onInput' name=\"tutorName\" id=\"tutorName\" type=\"text\" />`,\r\n    methods: {\r\n        onInput(event, data) {\r\n            _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info.tutorName = event.target.value\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/components/tutor-input.js?");

/***/ }),

/***/ "./src/data/academy-class.js":
/*!***********************************!*\
  !*** ./src/data/academy-class.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"人文与外国语学院\":[\"英141\",\"英173\",\"英172\",\"英171\",\"英163\",\"英162\",\"英161\",\"英153\",\"英152\",\"英151\",\"英143\",\"英142\"],\"信息技术与装备工程学院\":[\"过控171\",\"电计161\",\"过控161\",\"电计171\",\"信息171\",\"信息161\"],\"印刷包装与数字媒体学院\":[\"包172\",\"包171\",\"包161\",\"印151\",\"媒体161\",\"印176\",\"包162\",\"包141\",\"包151\",\"媒体162\",\"包143\",\"印154\",\"印172\",\"媒体152\",\"印173\",\"印153\",\"媒体163\",\"印155\",\"印166\",\"媒体142\",\"印161\",\"包152\",\"印145\",\"印171\",\"包173\",\"媒体141\",\"印143\",\"媒体172\",\"媒体153\",\"印162\",\"印146\",\"印175\",\"印163\",\"媒体151\",\"印142\",\"印144\",\"印152\",\"印164\",\"印141\",\"媒体171\",\"包142\",\"印165\",\"包153\",\"印174\"],\"土木建筑工程学院\":[\"工管163\",\"土木152\",\"土木172\",\"城规151\",\"城地171\",\"土木164\",\"工管172\",\"城地151\",\"建筑171\",\"力学171\",\"土木143\",\"土木163\",\"土木142\",\"工管151\",\"土木174\",\"力学141\",\"土木154\",\"工管143\",\"城规141\",\"土木171\",\"土木175\",\"土木153\",\"土木162\",\"土木165\",\"土木161\",\"土木173\",\"城地152\",\"工管152\",\"工管173\",\"城地141\",\"建筑161\",\"工管153\",\"城地172\",\"工管171\",\"工管162\",\"力学161\",\"城地142\",\"工管161\",\"建筑151\",\"建筑141\",\"工管141\",\"工管142\",\"城规171\",\"力学151\",\"土木155\",\"土木151\",\"城规161\",\"土木144\",\"土木141\",\"城地162\",\"土木145\",\"城地161\"],\"机械与精密仪器工程学院\":[\"机165\",\"仪163\",\"仪142\",\"机161\",\"机177\",\"仪156\",\"仪162\",\"机172\",\"车辆171\",\"仪175\",\"机166\",\"仪145\",\"机162\",\"仪143\",\"机175\",\"仪144\",\"机154\",\"机167\",\"机156\",\"机151\",\"仪164\",\"工程163\",\"工程153\",\"车辆141\",\"机1410\",\"机145\",\"机148\",\"工程144\",\"仪152\",\"仪146\",\"机171\",\"工程143\",\"光信172\",\"机144\",\"车辆162\",\"工程164\",\"仪176\",\"机163\",\"仪154\",\"机159\",\"仪165\",\"机157\",\"工程173\",\"仪166\",\"机173\",\"机149\",\"机169\",\"光信162\",\"仪172\",\"仪173\",\"光信152\",\"光信141\",\"车辆172\",\"车辆151\",\"机1610\",\"光信171\",\"光信151\",\"机168\",\"机158\",\"车辆152\",\"机141\",\"机1710\",\"工程174\",\"仪171\",\"仪141\",\"仪174\",\"机155\",\"机179\",\"机174\",\"仪153\",\"机164\",\"车辆161\",\"工程154\",\"机1510\",\"机142\",\"仪151\",\"机178\",\"机176\",\"机146\",\"光信142\",\"光信161\",\"机147\",\"车辆142\",\"仪155\",\"仪161\",\"机143\",\"机152\",\"机153\"],\"材料科学与工程学院\":[\"材141\",\"材化171\",\"材物161\",\"成型173\",\"材化152\",\"成型151\",\"材162\",\"材163\",\"材物141\",\"成型154\",\"材化161\",\"成型163\",\"材144\",\"成型166\",\"材物142\",\"材173\",\"成型172\",\"材151\",\"材152\",\"材物172\",\"材142\",\"材172\",\"材物162\",\"成型153\",\"成型146\",\"成型155\",\"材153\",\"材化142\",\"成型165\",\"成型143\",\"成型162\",\"材物152\",\"材化151\",\"材化162\",\"成型176\",\"材171\",\"成型161\",\"成型144\",\"成型141\",\"材164\",\"成型164\",\"材143\",\"成型171\",\"成型175\",\"成型145\",\"成型174\",\"材物171\",\"成型156\",\"材154\",\"材174\",\"材161\",\"成型142\",\"材物151\",\"材化172\",\"成型152\",\"材化141\"],\"水利水电学院\":[\"给152\",\"环境151\",\"工172\",\"给141\",\"电力152\",\"电力153\",\"工152\",\"水文172\",\"农水162\",\"能动163\",\"能源161\",\"能动153\",\"能动143\",\"给171\",\"电力141\",\"工163\",\"工174\",\"工142\",\"工171\",\"电力163\",\"水文151\",\"工173\",\"给161\",\"环境171\",\"农水142\",\"工141\",\"工143\",\"给172\",\"电力162\",\"农水171\",\"水文152\",\"给162\",\"工144\",\"电力161\",\"工154\",\"农水172\",\"工161\",\"工162\",\"水文161\",\"能源151\",\"工153\",\"电力143\",\"能动151\",\"电力151\",\"能动161\",\"水文162\",\"环境141\",\"电力172\",\"电力171\",\"农水161\",\"水文141\",\"环境161\",\"电力142\",\"能源141\",\"工164\",\"农水152\",\"能源171\",\"农水141\",\"水文171\",\"能动141\",\"水文142\",\"给151\",\"能动172\",\"能动173\",\"能动142\",\"电力173\",\"能动171\",\"能动162\",\"能动152\",\"农水151\",\"工151\",\"给142\"],\"理学院\":[\"计算172\",\"化162\",\"制药161\",\"计算171\",\"计算161\",\"化172\",\"应物141\",\"计算141\",\"化171\",\"计算142\",\"计算162\",\"制药151\",\"应物171\",\"计算152\",\"化151\",\"制药171\",\"应物151\",\"应物161\",\"化142\",\"化141\",\"化161\",\"制药141\",\"统计161\",\"统计151\",\"化152\",\"统计171\",\"统计141\",\"计算151\"],\"经济与管理学院\":[\"国贸151\",\"国贸141\",\"信管172\",\"国贸161\",\"金融151\",\"经济141\",\"管151\",\"管161\",\"经济171\",\"经济161\",\"金融161\",\"工程151\",\"会161\",\"公共141\",\"金融162\",\"工程171\",\"人力171\",\"信管151\",\"人力151\",\"会172\",\"信管142\",\"人力161\",\"信管162\",\"信管152\",\"金融141\",\"会142\",\"公共151\",\"会162\",\"管141\",\"信管171\",\"管171\",\"营销171\",\"信管161\",\"会151\",\"营销141\",\"经济151\",\"信管141\",\"工程161\",\"管172\",\"金融152\",\"营销161\",\"工程142\",\"人力141\",\"金融142\",\"管162\",\"营销151\",\"会141\",\"会152\",\"金融171\",\"会171\",\"工程162\",\"工程141\",\"金融172\",\"国贸171\"],\"自动化与信息工程学院\":[\"电网141\",\"电气162\",\"电气143\",\"微电141\",\"电气141\",\"自163\",\"电子142\",\"电信142\",\"自141\",\"电气161\",\"集成161\",\"物网162\",\"微电162\",\"电气145\",\"自152\",\"电智152\",\"电信161\",\"自162\",\"自171\",\"自143\",\"自151\",\"电气146\",\"通信141\",\"电网161\",\"自153\",\"电子173\",\"物网143\",\"自173\",\"电气172\",\"自165\",\"电子153\",\"电子172\",\"电气144\",\"物网172\",\"电子151\",\"集成151\",\"电信172\",\"电气171\",\"自144\",\"微电172\",\"电气154\",\"自154\",\"电气165\",\"电气173\",\"微电151\",\"电信162\",\"通信162\",\"物网142\",\"电气153\",\"电智151\",\"自161\",\"通信171\",\"电气166\",\"电智172\",\"电智171\",\"电气176\",\"电信151\",\"物网152\",\"电智161\",\"电气164\",\"电智162\",\"通信161\",\"微电142\",\"微电152\",\"通信151\",\"电子143\",\"物网153\",\"电气156\",\"电信152\",\"电气155\",\"电气151\",\"电气152\",\"电气175\",\"电气163\",\"自172\",\"自145\",\"自175\",\"电子162\",\"电子171\",\"物网163\",\"电气174\",\"电子152\",\"电子163\",\"电子161\",\"电网151\",\"电子141\",\"通信152\",\"电气142\",\"自155\",\"通信142\",\"自164\",\"通信172\",\"微电171\",\"电信141\",\"自142\",\"电网171\",\"集成171\",\"电信171\",\"微电161\",\"自174\",\"集成141\",\"电智142\",\"电智141\"],\"艺术与设计学院\":[\"动画172\",\"环艺141\",\"环艺172\",\"雕塑141\",\"环艺171\",\"产品142\",\"产品171\",\"设141\",\"产品172\",\"雕塑171\",\"视传173\",\"视传161\",\"摄影141\",\"环艺143\",\"摄影161\",\"动画141\",\"产品152\",\"视传143\",\"设161\",\"摄影171\",\"环艺152\",\"视传151\",\"动画152\",\"环艺153\",\"动画161\",\"设151\",\"动画171\",\"视传141\",\"环艺162\",\"摄影151\",\"环艺142\",\"雕塑161\",\"设171\",\"产品162\",\"视传171\",\"环艺151\",\"产品161\",\"产品141\",\"设172\",\"设152\",\"环艺173\",\"视传142\",\"设162\",\"动画151\",\"视传172\",\"视传152\",\"设142\",\"环艺161\",\"视传153\",\"环艺163\",\"动画162\",\"雕塑151\",\"产品151\",\"视传163\",\"动画142\",\"视传162\"],\"计算机科学与工程学院\":[\"计153\",\"计163\",\"计152\",\"物网161\",\"网络162\",\"网络171\",\"计161\",\"软件162\",\"计173\",\"网络141\",\"计151\",\"计162\",\"计141\",\"计172\",\"软件141\",\"计142\",\"网络142\",\"网络152\",\"网络161\",\"计171\",\"计143\",\"网络172\",\"物网151\",\"软件152\",\"软件172\",\"物网171\",\"物网141\",\"软件142\",\"软件171\",\"软件151\",\"软件161\"]});\n\n//# sourceURL=webpack:///./src/data/academy-class.js?");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = {\r\n    answers: {},\r\n    percent: 0,\r\n    info: {\r\n       tutorName: '',\r\n       academyName: '',\r\n       className: ''\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/data/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/content */ \"./src/components/content.js\");\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n\r\nfunction Component(obj) {\r\n  return new Promise((resolve, reject) => {\r\n    let component = {};\r\n    component.data = obj.data;\r\n    component.methods = obj.methods;\r\n    const element = document.querySelector(obj.selector);\r\n    element.template = obj.template;\r\n    element.isRoot = true\r\n    component.element = element;\r\n\r\n    component.beforeMount =\r\n      obj.beforeMount instanceof Function ? obj.beforeMount : function() {};\r\n    component.mounted =\r\n      obj.mounted instanceof Function ? obj.mounted : function() {};\r\n    component.updated =\r\n      obj.updated instanceof Function ? obj.updated : function() {};\r\n\r\n    component.beforeMount()\r\n    mount(component, element);\r\n    component.mounted()\r\n\r\n    resolve(component)\r\n  })\r\n}\r\n\r\nfunction mount(com, element) {\r\n\r\n  for (const key of Object.keys(com.data)) {\r\n    defineReactive(com.data, key, {\r\n      self: com,\r\n      data: com.data,\r\n      methods: com.methods\r\n    });\r\n  }\r\n\r\n  render(com, element, com.data, com.methods);\r\n}\r\n\r\nfunction render(self, element, data, methods) {\r\n  if (element.template) {\r\n    element.innerHTML = element.template;\r\n  }\r\n\r\n  if (element.nodeType === Node.ELEMENT_NODE) {\r\n    let fors = element.querySelectorAll(\"[data-for]\");\r\n\r\n    renderFor(self, fors, data, methods);\r\n\r\n    for (let i = 0; i < element.attributes.length; i++) {\r\n      let matches;\r\n      if (\r\n        (matches = element.attributes[i].textContent.trim().match(/({{\\w+}})/g))\r\n      ) {\r\n        for (const match of matches) {\r\n          let key = match.trim().match(/{{(\\w+)}}/)[1];\r\n          element.setAttribute(\r\n            element.attributes[i].name,\r\n            element.attributes[i].textContent.replace(match, data[key])\r\n          );\r\n        }\r\n      }\r\n\r\n      if ((matches = element.attributes[i].name.trim().match(/^bind-(\\w+)$/))) {\r\n        let fnName = element.attributes[i].textContent.trim();\r\n\r\n        element.removeAttribute(matches[0]);\r\n        element.addEventListener(matches[1], event => {\r\n          let currentData = data;\r\n          methods[fnName].call(self, event, currentData);\r\n        });\r\n      }\r\n    }\r\n  } else if (element.nodeType === Node.TEXT_NODE) {\r\n    let matches;\r\n    if ((matches = element.nodeValue.trim().match(/({{\\w+}})/g))) {\r\n      for (const match of matches) {\r\n        let key = match.trim().match(/{{(\\w+)}}/)[1];\r\n        element.nodeValue = element.nodeValue.replace(match, data[key]);\r\n      }\r\n    }\r\n  }\r\n\r\n  if (element.childNodes.length) {\r\n    for (const node of element.childNodes) {\r\n      render(self, node, data, methods);\r\n    }\r\n  }\r\n\r\n  if (element.isRoot) {\r\n      self.updated()\r\n  }\r\n}\r\n\r\nfunction renderFor(self, fors, data, methods) {\r\n  for (const one of fors) {\r\n    if (data[one.dataset.for]) {\r\n      for (let i = 0; i < data[one.dataset.for].length; i++) {\r\n        let element = one.cloneNode(true);\r\n        element.removeAttribute(\"data-for\");\r\n\r\n        if (Object.prototype.toString.call(data[one.dataset.for][i]) === \"[object Object]\") {\r\n            render(self, element, data[one.dataset.for][i], methods);\r\n        } else {\r\n            render(self, element, {\r\n                item: data[one.dataset.for][i]\r\n            }, methods);\r\n        }\r\n        \r\n        one.insertAdjacentElement(\"beforeBegin\", element);\r\n      }\r\n    } else {\r\n      let count = parseInt(one.dataset.for);\r\n\r\n      if (typeof count === \"number\") {\r\n        for (let i = 1; i <= count; i++) {\r\n          let element = one.cloneNode(true);\r\n          element.removeAttribute(\"data-for\");\r\n\r\n          render(self, element, { num: i }, methods);\r\n          one.insertAdjacentElement(\"beforeBegin\", element);\r\n        }\r\n      }\r\n    }\r\n\r\n    one.remove();\r\n  }\r\n}\r\n\r\nfunction defineReactive(obj, key, options) {\r\n  let value = obj[key];\r\n\r\n  Object.defineProperty(obj, key, {\r\n    get() {\r\n      return value;\r\n    },\r\n    set(newVal) {\r\n      if (newVal === value) {\r\n        return;\r\n      }\r\n      value = newVal;\r\n      render(options.self, options.self.element, options.data, options.methods);\r\n    }\r\n  });\r\n\r\n  if (Object.prototype.toString.call(obj[key]) === \"[object Object]\") {\r\n    for (const subKey of Object.keys(obj[key])) {\r\n      defineReactive(obj[key], subKey, options);\r\n    }\r\n  }\r\n\r\n  if (Array.isArray(obj[key])) {\r\n    for (const item of obj[key]) {\r\n      if (Object.prototype.toString.call(item) === \"[object Object]\") {\r\n        for (const subKey of Object.keys(item)) {\r\n          defineReactive(item, subKey, options);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction proxy(obj1, obj2, key1, key2) {\r\n  let value;\r\n  Object.defineProperty(obj1, key1, {\r\n    set(newVal) {\r\n      value = newVal;\r\n      obj2[key2] = newVal;\r\n    },\r\n    get() {\r\n      return value;\r\n    }\r\n  });\r\n}\r\n\r\nComponent.defineReactive = defineReactive;\r\nComponent.proxy = proxy;\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: fetch, get, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch\", function() { return fetch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"post\", function() { return post; });\nfunction fetch(method, url, data) {\r\n    return new Promise((resolve, reject) => {\r\n        let xhr = new XMLHttpRequest()\r\n        xhr.onload = () => {\r\n            resolve(xhr.response)\r\n        }\r\n        xhr.onerror = (event) => {\r\n            reject(event.error)\r\n        }\r\n        xhr.responseType = 'json'\r\n\r\n        xhr.open(method, url, true)\r\n        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')\r\n        \r\n        if (data instanceof Object) {\r\n            data = jsonToUrl(data)\r\n        }\r\n\r\n        xhr.send(data)\r\n    })\r\n}\r\n\r\nfunction get(url, data) {\r\n    return fetch('GET', url, data)\r\n}\r\n\r\nfunction post(url, data) {\r\n    return fetch('POST', url, data)\r\n}\r\n\r\nfunction jsonToUrl(param, key) {\r\n    var paramStr = \"\";\r\n    if (typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean') {\r\n        paramStr += \"&\" + key + \"=\" + encodeURIComponent(param);\r\n    } else {\r\n        if (Array.isArray(param)) {\r\n            for (let i=0; i<param.length; i++) {\r\n                var k = key == null ? i : key + (param instanceof Array ? \"[\" + i + \"]\" : \".\" + i);\r\n                paramStr += '&' + jsonToUrl(param[i], k);\r\n            }\r\n        } else {\r\n            for (const keyStr of Object.keys(param)) {\r\n                var k = key == null ? keyStr : key + (param instanceof Array ? \"[\" + keyStr + \"]\" : \".\" + keyStr);\r\n                paramStr += '&' + jsonToUrl(param[keyStr], k);\r\n            }\r\n        }\r\n    }\r\n    return paramStr.substr(1);\r\n};\n\n//# sourceURL=webpack:///./src/request.js?");

/***/ })

/******/ });