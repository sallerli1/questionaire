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

/***/ "./src/components/answers.js":
/*!***********************************!*\
  !*** ./src/components/answers.js ***!
  \***********************************/
/*! exports provided: singleQuestions, multiplesQuestions, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"singleQuestions\", function() { return singleQuestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiplesQuestions\", function() { return multiplesQuestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n\r\n\r\nconst exportData = {\r\n    answers: {},\r\n    percent: 0\r\n}\r\n\r\nconst singles = [{\r\n    selector: '.question._1',\r\n    data: {\r\n        index: 1,\r\n        title: '您的性别',\r\n        answers: [{\r\n            icon: 'iconfont icon-radio02',\r\n            name: 'gender',\r\n            value: 'A',\r\n            text: '男',\r\n            checked: false\r\n        }, {\r\n            icon: 'iconfont icon-radio02',\r\n            name: 'gender',\r\n            value: 'B',\r\n            text: '女',\r\n            checked: false\r\n        }]\r\n    }\r\n}, {\r\n    selector: '.question._2',\r\n    data: {\r\n        index: 2,\r\n        title: '您的性别',\r\n        answers: [{\r\n            icon: 'iconfont icon-radio02',\r\n            name: 'another-gender',\r\n            value: 'A',\r\n            text: '男',\r\n            checked: false\r\n        }, {\r\n            icon: 'iconfont icon-radio02',\r\n            name: 'another-gender',\r\n            value: 'B',\r\n            text: '女',\r\n            checked: false\r\n        }]\r\n    }\r\n}]\r\n\r\nconst multiples = [{\r\n    selector: '.question._3',\r\n    data: {\r\n        index: 3,\r\n        title: '喜欢的水果',\r\n        answers: [{\r\n            icon: 'iconfont icon-checkboxblank',\r\n            name: 'fruit',\r\n            value: 'A',\r\n            text: '苹果',\r\n            checked: false\r\n        }, {\r\n            icon: 'iconfont icon-checkboxblank',\r\n            name: 'fruit',\r\n            value: 'B',\r\n            text: '李子',\r\n            checked: false\r\n        }, {\r\n            icon: 'iconfont icon-checkboxblank',\r\n            name: 'fruit',\r\n            value: 'C',\r\n            text: '梨',\r\n            checked: false\r\n        }, {\r\n            icon: 'iconfont icon-checkboxblank',\r\n            name: 'fruit',\r\n            value: 'D',\r\n            text: '石榴',\r\n            checked: false\r\n        }, {\r\n            icon: 'iconfont icon-checkboxblank',\r\n            name: 'fruit',\r\n            value: 'E',\r\n            text: '西瓜',\r\n            checked: false\r\n        }]\r\n    }\r\n}]\r\n\r\nlet singleComs = [],\r\n    multipleComs = []\r\n\r\nfor (const question of singles) {\r\n    question.template = `<h2 class=\"questionName\">\r\n    <p>{{title}}</p>\r\n</h2>\r\n<div class=\"answers\">\r\n    <div class=\"answerFrame\" data-for=\"answers\">\r\n        <div class=\"answer {{selected}}\" bind-touchend='click' bind-touchmove='setFlag'>\r\n            <input type=\"radio\" value=\"{{value}}\" name=\"{{name}}\" checked='{{checked}}' />\r\n            <i class='{{icon}}'></i>\r\n            <p>{{text}}</p>\r\n        </div>\r\n    </div>\r\n</div>`\r\n    question.methods = {\r\n        setFlag(event, data) {\r\n            this.data.moved = true;\r\n        },\r\n        click(event, data) {\r\n            if (this.data.moved) {\r\n                this.data.moved = false\r\n                return\r\n            }\r\n            event.cancelBubble = true\r\n            event.preventDefault()\r\n            event.stopImmediatePropagation()\r\n            for (const answer of this.data.answers) {\r\n                answer.checked = false\r\n                if (answer.checked) {\r\n                    answer.selected = 'selected'\r\n                    answer.icon = 'iconfont icon-radio01'\r\n                } else {\r\n                    answer.selected = ''\r\n                    answer.icon = 'iconfont icon-radio02'\r\n                }\r\n            }\r\n\r\n            exportData.answers[this.data.index] = data.value\r\n            exportData.percent = calcProgress()\r\n            data.checked = true\r\n            if (data.checked) {\r\n                data.selected = 'selected'\r\n                data.icon = 'iconfont icon-radio01'\r\n            } else {\r\n                data.selected = ''\r\n                data.icon = 'iconfont icon-radio02'\r\n            }\r\n        }\r\n    }\r\n    \r\n    singleComs.push(new _main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](question))\r\n}\r\n\r\nfor (const question of multiples) {\r\n    question.template = `<h2 class=\"questionName\">\r\n    <p>{{title}}</p>\r\n</h2>\r\n<div class=\"answers\">\r\n    <div class=\"answerFrame\" data-for=\"answers\">\r\n        <div class=\"answer {{selected}}\" bind-touchend='click' bind-touchmove='setFlag'>\r\n            <input type=\"checkbox\" value=\"{{value}}\" name=\"{{name}}\" checked='{{checked}}' />\r\n            <i class='{{icon}}'></i>\r\n            <p>{{text}}</p>\r\n        </div>\r\n    </div>\r\n</div>`\r\n    question.methods = {\r\n        setFlag(event, data) {\r\n            this.data.moved = true;\r\n        },\r\n        click(event, data) {\r\n            if (this.data.moved) {\r\n                this.data.moved = false\r\n                return\r\n            }\r\n            event.cancelBubble = true\r\n            event.preventDefault()\r\n            event.stopImmediatePropagation()\r\n\r\n            if (!exportData.answers[this.data.index]) {\r\n                exportData.answers[this.data.index] = []\r\n            }\r\n\r\n            exportData.percent = calcProgress()\r\n            data.checked = !data.checked\r\n\r\n            if (data.checked) {\r\n                exportData.answers[this.data.index].push(data.value)\r\n                data.selected = 'selected'\r\n                data.icon = 'iconfont icon-checkbox'\r\n            } else {\r\n                exportData.answers[this.data.index] = exportData.answers[this.data.index].filter((value) => {\r\n                    return value !== data.value\r\n                })\r\n                \r\n                data.selected = ''\r\n                data.icon = 'iconfont icon-checkboxblank'\r\n            }\r\n        }\r\n    }\r\n    \r\n    multipleComs.push(new _main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](question))\r\n}\r\n\r\nfunction calcProgress() {\r\n    return (Object.keys(exportData.answers).length / (singles.length + multiples.length)) * 100\r\n}\r\n\r\nconst singleQuestions = singleComs\r\nconst multiplesQuestions = multipleComs\r\nconst data = exportData\n\n//# sourceURL=webpack:///./src/components/answers.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    selector: '#header',\r\n    template: `<h1  class=\"header_top\">\r\n    <span>{{title}}</span>\r\n</h1>\r\n<article class=\"header_bottom\">\r\n    <span>{{hint}}</span>\r\n</article>`,\r\n    data: {\r\n        title: '购物网用户满意度调查',\r\n        hint: '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',\r\n        list: [{\r\n            name: 'saller',\r\n            age: '11'\r\n        }, {\r\n            name: 'saller1',\r\n            age: '22'\r\n        }]\r\n    }\r\n}));\n\n//# sourceURL=webpack:///./src/components/header.js?");

/***/ }),

/***/ "./src/components/progress.js":
/*!************************************!*\
  !*** ./src/components/progress.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n/* harmony import */ var _answers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answers.js */ \"./src/components/answers.js\");\n\r\n\r\n\r\nlet progress = new _main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    selector: '#progress',\r\n    template: '<div style=\"width:{{percent}}%\"></div>',\r\n    data: {\r\n        percent: _answers_js__WEBPACK_IMPORTED_MODULE_1__[\"data\"].percent\r\n    }\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (progress);\r\n\r\n_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].proxy(_answers_js__WEBPACK_IMPORTED_MODULE_1__[\"data\"], progress.data, 'percent', 'percent')\n\n//# sourceURL=webpack:///./src/components/progress.js?");

/***/ }),

/***/ "./src/components/submit.js":
/*!**********************************!*\
  !*** ./src/components/submit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n/* harmony import */ var _answers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answers */ \"./src/components/answers.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request */ \"./src/request.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    selector: '#submit',\r\n    template: `<a bind-touchstart='submit'>{{text}}</a>`,\r\n    data: {\r\n        text: \"提交\",\r\n        url: 'http://yiban.xaut.edu.cn/weixin/admin/web/common/question2'\r\n    },\r\n    methods: {\r\n        submit() {\r\n            if (_answers__WEBPACK_IMPORTED_MODULE_1__[\"data\"].percent>=100) {\r\n                Object(_request__WEBPACK_IMPORTED_MODULE_2__[\"post\"])(this.data.url, _answers__WEBPACK_IMPORTED_MODULE_1__[\"data\"].answers).then((res) => {\r\n                    if (res.success) {\r\n                        alert('提交成功')\r\n                    } else {\r\n                        alert(res.error.code)\r\n                    }\r\n                }).catch(() => {\r\n                    alert('未知网路错误')\r\n                })\r\n            } else {\r\n                alert('请填写全部问卷')\r\n            }         \r\n        }\r\n    }\r\n}));\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/submit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.js */ \"./src/components/header.js\");\n/* harmony import */ var _components_answers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/answers.js */ \"./src/components/answers.js\");\n/* harmony import */ var _components_submit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/submit.js */ \"./src/components/submit.js\");\n/* harmony import */ var _components_progress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/progress.js */ \"./src/components/progress.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\nclass Component {\r\n    constructor(obj) {\r\n        this.data = obj.data\r\n        this.methods = obj.methods\r\n        const element = document.querySelector(obj.selector)\r\n        element.template = obj.template\r\n        this.element = element\r\n        this.mount(element)\r\n    }\r\n\r\n    mount(element) {\r\n        render(this, element, this.data, this.methods)\r\n\r\n        for (const key of Object.keys(this.data)) {\r\n            defineReactive(this.data, key, {\r\n                self: this,\r\n                data: this.data,\r\n                methods: this.methods\r\n            })\r\n        }\r\n    }\r\n}\r\n\r\nfunction render(self, element, data, methods) {\r\n    if (element.template) {\r\n        element.innerHTML = element.template\r\n    }\r\n\r\n    if (element.nodeType === Node.ELEMENT_NODE) {\r\n        let fors = element.querySelectorAll('[data-for]')\r\n        renderFor(self, fors, data, methods)\r\n\r\n        for (let i = 0; i < element.attributes.length; i++) {\r\n            let matches\r\n            if (matches = element.attributes[i].textContent.trim().match(/({{\\w+}})/g)) {\r\n                for (const match of matches) {\r\n                    let key = match.trim().match(/{{(\\w+)}}/)[1]\r\n                    element.setAttribute(element.attributes[i].name, element.attributes[i].textContent.replace(match, data[key]))\r\n                }\r\n            }\r\n\r\n            if (matches = element.attributes[i].name.trim().match(/^bind-(\\w+)$/)) {\r\n                let fnName = element.attributes[i].textContent.trim()\r\n\r\n                element.removeAttribute(matches[0])\r\n                element.addEventListener(matches[1], (event) => {\r\n                    let currentData = data\r\n                    methods[fnName].call(self, event, currentData)\r\n                })\r\n            }\r\n        }\r\n    } else if (element.nodeType === Node.TEXT_NODE) {\r\n        let matches\r\n        if (matches = element.nodeValue.trim().match(/({{\\w+}})/g)) {\r\n            for (const match of matches) {\r\n                let key = match.trim().match(/{{(\\w+)}}/)[1]\r\n                element.nodeValue = element.nodeValue.replace(match, data[key])\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n\r\n\r\n    if (element.childNodes.length) {\r\n        for (const node of element.childNodes) {\r\n            render(self, node, data, methods)\r\n        }\r\n\r\n    }\r\n\r\n    /* for (const child of element.children) {\r\n        for (let i = 0; i < child.attributes.length; i++) {\r\n            let match,\r\n                key\r\n            if (match = child.attributes[i].textContent.trim().match(/({{\\w+}})/g)) {\r\n                key = match[0].trim().match(/{{(\\w+)}}/)[1]\r\n                child.setAttribute(child.attributes[i].name, data[key])\r\n            }\r\n\r\n            if (match = child.attributes[i].name.trim().match(/^bind-(\\w+)$/)) {\r\n                child.addEventListener(match[1], (event) => {\r\n                    let currentData = data\r\n                    methods[child.attributes[i].textContent.trim()].call(self, event, currentData)\r\n                })\r\n            }\r\n        }\r\n\r\n        let matches\r\n        if (matches = child.textContent.trim().match(/({{\\w+}})/g)) {\r\n            for (const match of matches) {\r\n                let key = match.trim().match(/{{(\\w+)}}/)[1]\r\n                child.innerHTML = child.innerHTML.replace(match, data[key])\r\n            }\r\n        }\r\n\r\n\r\n        if (child.children.length) {\r\n            render(self, child, data, methods)\r\n        }\r\n    } */\r\n}\r\n\r\n\r\nfunction renderFor(self, fors, data, methods) {\r\n    for (const one of fors) {\r\n        for (let i = 0; i < data[one.dataset.for].length; i++) {\r\n            let element = one.cloneNode(true)\r\n            element.removeAttribute('data-for')\r\n\r\n            render(self, element, data[one.dataset.for][i], methods)\r\n            one.insertAdjacentElement('beforeBegin', element)\r\n        }\r\n\r\n        one.remove()\r\n    }\r\n}\r\n\r\nfunction defineReactive(obj, key, options) {\r\n    let value = obj[key]\r\n\r\n    Object.defineProperty(obj, key, {\r\n        get() {\r\n            return value\r\n        },\r\n        set(newVal) {\r\n            if (newVal === value) {\r\n                return\r\n            }\r\n            value = newVal\r\n            render(options.self, options.self.element, options.data, options.methods)\r\n        }\r\n    })\r\n\r\n    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {\r\n        for (const subKey of Object.keys(obj[key])) {\r\n            defineReactive(obj[key], subKey, options)\r\n        }\r\n    }\r\n\r\n    if (Array.isArray(obj[key])) {\r\n        for (const item of obj[key]) {\r\n            if (Object.prototype.toString.call(item) === '[object Object]') {\r\n                for (const subKey of Object.keys(item)) {\r\n                    defineReactive(item, subKey, options)\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction proxy(obj1, obj2, key1, key2) {\r\n    let value\r\n    Object.defineProperty(obj1, key1, {\r\n        set(newVal) {\r\n            value = newVal\r\n            obj2[key2] = newVal\r\n        },\r\n        get() {\r\n            return value\r\n        }\r\n    })\r\n}\r\n\r\nComponent.defineReactive = defineReactive\r\nComponent.proxy = proxy\n\n//# sourceURL=webpack:///./src/main.js?");

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