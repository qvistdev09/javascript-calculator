(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{14:function(e,t,_){},15:function(e,t,_){"use strict";_.r(t);var a=_(0),s=_.n(a),r=_(3),u=_.n(r),l=(_(14),_(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),App=function(_React$Component){Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(e){var t;return Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(t=_super.call(this,e)).operatorRegex=/(\*|\/|\+|-)/,t.state={gridItemWidth:4,gridItemHeight:4,upperOutput:" ",lowerOutput:"0",decimals:!1,upperLast:"",showingResult:!1},t.onClearPress=t.onClearPress.bind(Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.onDigitPress=t.onDigitPress.bind(Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.onZeroPress=t.onZeroPress.bind(Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.onEqualPress=t.onEqualPress.bind(Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.onOperatorPress=t.onOperatorPress.bind(Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.onDecimalPress=t.onDecimalPress.bind(Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.addToState=t.addToState.bind(Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t}return Object(C_Users_compu_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"onClearPress",value:function(){this.setState({upperOutput:"",lowerOutput:"0",decimals:!1,upperLast:"",showingResult:!1})}},{key:"onDigitPress",value:function(e){this.state.showingResult?this.setState({showingResult:!1,upperOutput:e,lowerOutput:e,upperLast:e,decimals:!1}):"0"===this.state.lowerOutput?this.setState({upperOutput:e,lowerOutput:e,upperLast:e}):this.operatorRegex.test(this.state.upperLast)?this.setState((function(t){return{upperLast:e,lowerOutput:e,upperOutput:t.upperOutput+e,decimals:!1}})):(this.addToState("both",e),this.setState({upperLast:e}))}},{key:"onZeroPress",value:function(){if(this.state.showingResult)this.setState({showingResult:!1,decimals:!1,upperLast:"",upperOutput:"",lowerOutput:"0"});else{if("0"===this.state.lowerOutput)return;this.operatorRegex.test(this.state.upperLast)?this.setState((function(e){return{decimals:!1,upperOutput:e.upperOutput+"0",lowerOutput:"0",upperLast:"0"}})):(this.addToState("both","0"),this.setState({upperLast:"0"}))}}},{key:"onEqualPress",value:function onEqualPress(){!1===this.state.showingResult&&/[0-9]+[+|\-|*|/][0-9]+/.test(this.state.upperOutput)&&this.setState((function(state){return{lowerOutput:eval(state.upperOutput),decimals:!1,upperOutput:state.upperOutput+"="+eval(state.upperOutput),showingResult:!0}}))}},{key:"onOperatorPress",value:function(e){if(this.state.showingResult)this.setState((function(t){return{upperOutput:t.lowerOutput+e,lowerOutput:e,upperLast:e,decimals:!1,showingResult:!1}}));else{if(this.state.upperLast===e)return;"-"===e&&this.operatorRegex.test(this.state.upperLast)&&"-"!==this.state.upperLast?this.setState((function(t){return{upperOutput:t.upperOutput+e,lowerOutput:e,upperLast:e}})):this.operatorRegex.test(this.state.upperLast)&&!0!==this.operatorRegex.test(this.state.upperOutput[this.state.upperOutput.length-2])&&this.state.upperLast!==e?this.setState((function(t){return{lowerOutput:e,upperOutput:t.upperOutput.slice(0,t.upperOutput.length-1)+e,upperLast:e}})):"0"===this.state.lowerOutput?this.setState({upperOutput:"0"+e,lowerOutput:e,upperLast:e}):/[0-9]/.test(this.state.upperLast)&&this.setState((function(t){return{upperLast:e,upperOutput:t.upperOutput+e,lowerOutput:e}}))}}},{key:"onDecimalPress",value:function(){if(this.state.showingResult)this.setState({upperLast:".",upperOutput:"0.",lowerOutput:"0.",decimals:!0,showingResult:!1});else{if(!0===this.state.decimals)return;this.addToState("both","."),this.setState({decimals:!0,upperLast:"."})}}},{key:"addToState",value:function(e,t){switch(e){case"upper":this.setState((function(e){return{upperOutput:e.upperOutput+t}}));break;case"lower":this.setState((function(e){return{lowerOutput:e.lowerOutput+t}}));break;case"both":this.setState((function(e){return{lowerOutput:e.lowerOutput+t,upperOutput:e.upperOutput+t}}));break;default:return}}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"calculator",style:{gridTemplateColumns:"repeat(4, "+this.state.gridItemWidth+"rem)",gridTemplateRows:"repeat(6, "+this.state.gridItemHeight+"rem)"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(OutputField,{upper:this.state.upperOutput,lower:this.state.lowerOutput}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"AC",gridArea:"AC",btnClass:"AC hoverable",press:this.onClearPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"/",btnClass:"light hoverable",press:this.onOperatorPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"*",btnClass:"light hoverable",press:this.onOperatorPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"7",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"8",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"9",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"-",btnClass:"light hoverable",press:this.onOperatorPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"4",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"5",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"6",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"+",btnClass:"light hoverable",press:this.onOperatorPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"1",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"2",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"3",btnClass:"dark hoverable",press:this.onDigitPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"=",gridArea:"equal",btnClass:"equal hoverable rounded-corner-right",press:this.onEqualPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:"0",gridArea:"zero",btnClass:"dark hoverable rounded-corner-left",press:this.onZeroPress}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CalcButton,{label:".",btnClass:"dark hoverable",press:this.onDecimalPress}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);function CalcButton(e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:e.btnClass?e.btnClass+" calc-child":"calc-child",style:e.gridArea?{gridArea:e.gridArea}:{gridArea:"initial"},onClick:function(){return e.press(e.label)}},e.label)}function OutputField(e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calc-child output",style:{gridArea:"output"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"output-row"},e.upper),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"outpot-row"},e.lower))}__webpack_exports__.a=App},9:function(e,t,_){e.exports=_(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8762d700.chunk.js.map