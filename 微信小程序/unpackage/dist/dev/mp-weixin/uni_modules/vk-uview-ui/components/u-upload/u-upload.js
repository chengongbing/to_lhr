(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/vk-uview-ui/components/u-upload/u-upload"],{

/***/ 303:
/*!************************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/components/u-upload/u-upload.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-upload.vue?vue&type=template&id=6cbfbe2a&scoped=true& */ 304);
/* harmony import */ var _u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-upload.vue?vue&type=script&lang=js& */ 306);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_upload_vue_vue_type_style_index_0_id_6cbfbe2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-upload.vue?vue&type=style&index=0&id=6cbfbe2a&lang=scss&scoped=true& */ 308);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6cbfbe2a",
  null,
  false,
  _u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/vk-uview-ui/components/u-upload/u-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 304:
/*!*******************************************************************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/components/u-upload/u-upload.vue?vue&type=template&id=6cbfbe2a&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-upload.vue?vue&type=template&id=6cbfbe2a&scoped=true& */ 305);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_template_id_6cbfbe2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 305:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/components/u-upload/u-upload.vue?vue&type=template&id=6cbfbe2a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function () {
      return __webpack_require__.e(/*! import() | uni_modules/vk-uview-ui/components/u-icon/u-icon */ "uni_modules/vk-uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uni_modules/vk-uview-ui/components/u-icon/u-icon.vue */ 234))
    },
    uLineProgress: function () {
      return __webpack_require__.e(/*! import() | uni_modules/vk-uview-ui/components/u-line-progress/u-line-progress */ "uni_modules/vk-uview-ui/components/u-line-progress/u-line-progress").then(__webpack_require__.bind(null, /*! @/uni_modules/vk-uview-ui/components/u-line-progress/u-line-progress.vue */ 364))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = !_vm.disabled
    ? _vm.__map(_vm.lists, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var g0 = _vm.showUploadList ? _vm.$u.addUnit(_vm.width) : null
        var g1 = _vm.showUploadList ? _vm.$u.addUnit(_vm.height) : null
        return {
          $orig: $orig,
          g0: g0,
          g1: g1,
        }
      })
    : null
  var g2 = !_vm.disabled ? _vm.lists.length : null
  var g3 =
    !_vm.disabled && _vm.maxCount > g2 && !_vm.customBtn
      ? _vm.$u.addUnit(_vm.width)
      : null
  var g4 =
    !_vm.disabled && _vm.maxCount > g2 && !_vm.customBtn
      ? _vm.$u.addUnit(_vm.height)
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g2: g2,
        g3: g3,
        g4: g4,
      },
    }
  )
  if (_vm.$scope.data.scopedSlotsCompiler === "augmented") {
    _vm.$setScopedSlotsParams("file", {
      file: _vm.lists,
    })
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 306:
/*!*************************************************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/components/u-upload/u-upload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-upload.vue?vue&type=script&lang=js& */ 307);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 307:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/components/u-upload/u-upload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 41));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 43));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * upload 图片上传
 * @description 该组件用于上传图片场景
 * @tutorial https://www.uviewui.com/components/upload.html
 * @property {String} action 服务器上传地址
 * @property {String Number} max-count 最大选择图片的数量（默认99）
 * @property {Boolean} custom-btn 如果需要自定义选择图片的按钮，设置为true（默认false）
 * @property {Boolean} show-progress 是否显示进度条（默认true）
 * @property {Boolean} disabled 是否启用(显示/移仓)组件（默认false）
 * @property {String} image-mode 预览图片等显示模式，可选值为uni的image的mode属性值（默认aspectFill）
 * @property {String} del-icon 右上角删除图标名称，只能为uView内置图标
 * @property {String} del-bg-color 右上角关闭按钮的背景颜色
 * @property {String | Number} index 在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件
 * @property {String} del-color 右上角关闭按钮图标的颜色
 * @property {Object} header 上传携带的头信息，对象形式
 * @property {Object} form-data 上传额外携带的参数
 * @property {String} name 上传文件的字段名，供后端获取使用（默认file）
 * @property {Array<String>} size-type original 原图，compressed 压缩图，默认二者都有（默认['original', 'compressed']）
 * @property {Array<String>} source-type 选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有（默认['album', 'camera']）
 * @property {Boolean} preview-full-image	是否可以通过uni.previewImage预览已选择的图片（默认true）
 * @property {Boolean} multiple	是否开启图片多选，部分安卓机型不支持（默认true）
 * @property {Boolean} deletable 是否显示删除图片的按钮（默认true）
 * @property {String Number} max-size 选择单个文件的最大大小，单位B(byte)，默认不限制（默认Number.MAX_VALUE）
 * @property {Array<Object>} file-list 默认显示的图片列表，数组元素为对象，必须提供url属性
 * @property {Boolean} upload-text 选择图片按钮的提示文字（默认“选择图片”）
 * @property {Boolean} auto-upload 选择完图片是否自动上传，见上方说明（默认true）
 * @property {Boolean} show-tips 特殊情况下是否自动提示toast，见上方说明（默认true）
 * @property {Boolean} show-upload-list 是否显示组件内部的图片预览（默认true）
 * @event {Function} on-oversize 图片大小超出最大允许大小
 * @event {Function} on-preview 全屏预览图片时触发
 * @event {Function} on-remove 移除图片时触发
 * @event {Function} on-success 图片上传成功时触发
 * @event {Function} on-change 图片上传后，无论成功或者失败都会触发
 * @event {Function} on-error 图片上传失败时触发
 * @event {Function} on-progress 图片上传过程中的进度变化过程触发
 * @event {Function} on-uploaded 所有图片上传完毕触发
 * @event {Function} on-choose-complete 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表
 * @event {Function} on-list-change 当内部文件列表被加入文件、移除文件，或手动调用clear方法时触发
 * @event {Function} on-choose-fail 选择文件出错时触发，比如选择文件时取消了操作，只在微信和APP有效
 * @example <u-upload :action="action" :file-list="fileList" ></u-upload>
 */
var _default2 = {
  name: "u-upload",
  emits: ["update:file-list", "on-oversize", "on-list-change", "on-preview", "on-remove", "on-success", "on-change", "on-error", "on-progress", "on-uploaded", "on-choose-complete", "on-choose-fail"],
  props: {
    //是否显示组件自带的图片预览功能
    showUploadList: {
      type: Boolean,
      default: true
    },
    // 后端地址
    action: {
      type: String,
      default: ""
    },
    // 最大上传数量
    maxCount: {
      type: [String, Number],
      default: 52
    },
    //  是否显示进度条
    showProgress: {
      type: Boolean,
      default: true
    },
    // 是否启用
    disabled: {
      type: Boolean,
      default: false
    },
    // 预览上传的图片时的裁剪模式，和image组件mode属性一致
    imageMode: {
      type: String,
      default: "aspectFill"
    },
    // 头部信息
    header: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 额外携带的参数
    formData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 上传的文件字段名
    name: {
      type: String,
      default: "file"
    },
    // 所选的图片的尺寸, 可选值为original compressed
    sizeType: {
      type: Array,
      default: function _default() {
        return ["original", "compressed"];
      }
    },
    sourceType: {
      type: Array,
      default: function _default() {
        return ["album", "camera"];
      }
    },
    // 是否在点击预览图后展示全屏图片预览
    previewFullImage: {
      type: Boolean,
      default: true
    },
    // 是否开启图片多选，部分安卓机型不支持
    multiple: {
      type: Boolean,
      default: true
    },
    // 是否展示删除按钮
    deletable: {
      type: Boolean,
      default: true
    },
    // 文件大小限制，单位为byte
    maxSize: {
      type: [String, Number],
      default: Number.MAX_VALUE
    },
    // 显示已上传的文件列表
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 上传区域的提示文字
    uploadText: {
      type: String,
      default: "选择图片"
    },
    // 是否自动上传
    autoUpload: {
      type: Boolean,
      default: true
    },
    // 是否显示toast消息提示
    showTips: {
      type: Boolean,
      default: true
    },
    // 是否通过slot自定义传入选择图标的按钮
    customBtn: {
      type: Boolean,
      default: false
    },
    // 内部预览图片区域和选择图片按钮的区域宽度
    width: {
      type: [String, Number],
      default: 200
    },
    // 内部预览图片区域和选择图片按钮的区域高度
    height: {
      type: [String, Number],
      default: 200
    },
    // 右上角关闭按钮的背景颜色
    delBgColor: {
      type: String,
      default: "#fa3534"
    },
    // 右上角关闭按钮的叉号图标的颜色
    delColor: {
      type: String,
      default: "#ffffff"
    },
    // 右上角删除图标名称，只能为uView内置图标
    delIcon: {
      type: String,
      default: "close"
    },
    // 右下角成功图标名称，只能为uView内置图标
    successIcon: {
      type: String,
      default: "checkbox-mark"
    },
    // 右下角成功的叉号图标的颜色
    successColor: {
      type: String,
      default: "#ffffff"
    },
    // 如果上传后的返回值为json字符串，是否自动转json
    toJson: {
      type: Boolean,
      default: true
    },
    // 上传前的钩子，每个文件上传前都会执行
    beforeUpload: {
      type: Function,
      default: null
    },
    // 移除文件前的钩子
    beforeRemove: {
      type: Function,
      default: null
    },
    // 允许上传的图片后缀
    limitType: {
      type: Array,
      default: function _default() {
        // 支付宝小程序真机选择图片的后缀为"image"
        // https://opendocs.alipay.com/mini/api/media-image
        return ["png", "jpg", "jpeg", "webp", "gif", "image"];
      }
    },
    // 在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件
    index: {
      type: [Number, String],
      default: ""
    }
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      lists: [],
      isInCount: true,
      uploading: false
    };
  },
  watch: {
    fileList: {
      immediate: true,
      handler: function handler(val) {
        var that = this;
        var lists = JSON.parse(JSON.stringify(that.lists));
        val.map(function (value) {
          // 首先检查内部是否已经添加过这张图片，因为外部绑定了一个对象给fileList的话(对象引用)，进行修改外部fileList
          // 时，会触发watch，导致重新把原来的图片再次添加到this.lists
          // 数组的some方法意思是，只要数组元素有任意一个元素条件符合，就返回true，而另一个数组的every方法的意思是数组所有元素都符合条件才返回true
          var tmp = lists.some(function (val) {
            return val.url == value.url;
          });
          // 如果内部没有这个图片(tmp为false)，则添加到内部
          if (!tmp) {
            lists.push({
              url: value.url,
              error: false,
              progress: 100
            });
          }
        });
        that.lists = JSON.parse(JSON.stringify(lists));
      }
    },
    // 监听lists的变化，发出事件
    lists: {
      deep: true,
      handler: function handler(n) {
        this.$emit("update:file-list", n);
        this.$emit("on-list-change", n, this.index);
      }
    }
  },
  methods: {
    // 清除列表
    clear: function clear() {
      this.lists = [];
    },
    // 重新上传队列中上传失败的所有文件
    reUpload: function reUpload() {
      this.uploadFile();
    },
    // 选择图片
    selectFile: function selectFile() {
      var _this = this;
      var that = this;
      if (that.disabled) return;
      var _that$name = that.name,
        name = _that$name === void 0 ? "" : _that$name,
        maxCount = that.maxCount,
        multiple = that.multiple,
        maxSize = that.maxSize,
        sizeType = that.sizeType,
        camera = that.camera,
        compressed = that.compressed,
        maxDuration = that.maxDuration,
        sourceType = that.sourceType;
      var chooseFile = null;
      var lists = JSON.parse(JSON.stringify(that.lists));
      var newMaxCount = maxCount - lists.length;
      // 设置为只选择图片的时候使用 chooseImage 来实现
      chooseFile = new Promise(function (resolve, reject) {
        uni.chooseImage({
          count: multiple ? newMaxCount > 9 ? 9 : newMaxCount : 1,
          sourceType: sourceType,
          sizeType: sizeType,
          success: resolve,
          fail: reject
        });
      });
      chooseFile.then(function (res) {
        var file = null;
        var listOldLength = that.lists.length;
        res.tempFiles.map(function (val, index) {
          // 检查文件后缀是否允许，如果不在that.limitType内，就会返回false
          if (!that.checkFileExt(val)) return;

          // 如果是非多选，index大于等于1或者超出最大限制数量时，不处理
          if (!multiple && index >= 1) return;
          if (val.size > maxSize) {
            that.$emit("on-oversize", val, that.lists, that.index);
            that.showToast("超出允许的文件大小");
          } else {
            if (maxCount <= lists.length) {
              that.$emit("on-exceed", val, that.lists, that.index);
              that.showToast("超出最大允许的文件个数");
              return;
            }
            lists.push({
              url: val.path,
              progress: 0,
              error: false,
              file: val
            });
          }
        });

        // 这样实现深拷贝会导致在H5中file为空对象
        // that.lists = JSON.parse(JSON.stringify(lists));
        _this.deepClone(lists, that.lists);
        // 每次图片选择完，抛出一个事件，并将当前内部选择的图片数组抛出去
        that.$emit("on-choose-complete", that.lists, that.index);
        if (that.autoUpload) that.uploadFile(listOldLength);
      }).catch(function (error) {
        that.$emit("on-choose-fail", error);
      });
    },
    // 提示用户消息
    showToast: function showToast(message) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.showTips || force) {
        uni.showToast({
          title: message,
          icon: "none"
        });
      }
    },
    // 该方法供用户通过ref调用，手动上传
    upload: function upload() {
      this.uploadFile();
    },
    // 对失败的图片重新上传
    retry: function retry(index) {
      this.lists[index].progress = 0;
      this.lists[index].error = false;
      this.lists[index].response = null;
      uni.showLoading({
        title: "重新上传"
      });
      this.uploadFile(index);
    },
    // 上传图片
    uploadFile: function uploadFile() {
      var _arguments = arguments,
        _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var index, beforeResponse, task;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
                if (!_this2.disabled) {
                  _context.next = 3;
                  break;
                }
                return _context.abrupt("return");
              case 3:
                if (!_this2.uploading) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return");
              case 5:
                if (!(index >= _this2.lists.length)) {
                  _context.next = 8;
                  break;
                }
                _this2.$emit("on-uploaded", _this2.lists, _this2.index);
                return _context.abrupt("return");
              case 8:
                if (!(_this2.lists[index].progress == 100)) {
                  _context.next = 11;
                  break;
                }
                if (_this2.autoUpload == false) _this2.uploadFile(index + 1);
                return _context.abrupt("return");
              case 11:
                if (!(_this2.beforeUpload && typeof _this2.beforeUpload === "function")) {
                  _context.next = 22;
                  break;
                }
                // 执行回调，同时传入索引和文件列表当作参数
                // 在微信，支付宝等环境(H5正常)，会导致父组件定义的customBack()函数体中的this变成子组件的this
                // 通过bind()方法，绑定父组件的this，让this.customBack()的this为父组件的上下文
                // 因为upload组件可能会被嵌套在其他组件内，比如u-form，这时this.$parent其实为u-form的this，
                // 非页面的this，所以这里需要往上历遍，一直寻找到最顶端的$parent，这里用了this.$u.$parent.call(this)
                // 明白意思即可，无需纠结this.$u.$parent.call(this)的细节
                beforeResponse = _this2.beforeUpload.bind(_this2.$u.$parent.call(_this2))(index, _this2.lists); // 判断是否返回了promise
                if (!(!!beforeResponse && typeof beforeResponse.then === "function")) {
                  _context.next = 18;
                  break;
                }
                _context.next = 16;
                return beforeResponse.then(function (res) {
                  // promise返回成功，不进行动作，继续上传
                }).catch(function (err) {
                  // 进入catch回调的话，继续下一张
                  return _this2.uploadFile(index + 1);
                });
              case 16:
                _context.next = 22;
                break;
              case 18:
                if (!(beforeResponse === false)) {
                  _context.next = 22;
                  break;
                }
                return _context.abrupt("return", _this2.uploadFile(index + 1));
              case 22:
                if (_this2.action) {
                  _context.next = 25;
                  break;
                }
                _this2.showToast("请配置上传地址", true);
                return _context.abrupt("return");
              case 25:
                _this2.lists[index].error = false;
                _this2.uploading = true;
                // 创建上传对象
                task = uni.uploadFile({
                  url: _this2.action,
                  filePath: _this2.lists[index].url,
                  name: _this2.name,
                  formData: _this2.formData,
                  header: _this2.header,
                  success: function success(res) {
                    // 判断是否json字符串，将其转为json格式
                    var data = _this2.toJson && _this2.$u.test.jsonString(res.data) ? JSON.parse(res.data) : res.data;
                    if (![200, 201, 204].includes(res.statusCode)) {
                      _this2.uploadError(index, data);
                    } else {
                      // 上传成功
                      _this2.lists[index].response = data;
                      _this2.lists[index].progress = 100;
                      _this2.lists[index].error = false;
                      _this2.$emit("on-success", data, index, _this2.lists, _this2.index);
                    }
                  },
                  fail: function fail(e) {
                    _this2.uploadError(index, e);
                  },
                  complete: function complete(res) {
                    uni.hideLoading();
                    _this2.uploading = false;
                    _this2.uploadFile(index + 1);
                    _this2.$emit("on-change", res, index, _this2.lists, _this2.index);
                  }
                });
                task.onProgressUpdate(function (res) {
                  if (res.progress > 0) {
                    _this2.lists[index].progress = res.progress;
                    _this2.$emit("on-progress", res, index, _this2.lists, _this2.index);
                  }
                });
              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 上传失败
    uploadError: function uploadError(index, err) {
      this.lists[index].progress = 0;
      this.lists[index].error = true;
      this.lists[index].response = null;
      this.$emit("on-error", err, index, this.lists, this.index);
      this.showToast("上传失败，请重试");
    },
    // 删除一个图片
    deleteItem: function deleteItem(index) {
      var _this3 = this;
      uni.showModal({
        title: "提示",
        content: "您确定要删除此项吗？",
        success: function () {
          var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
            var beforeResponse;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!res.confirm) {
                      _context2.next = 12;
                      break;
                    }
                    if (!(_this3.beforeRemove && typeof _this3.beforeRemove === "function")) {
                      _context2.next = 11;
                      break;
                    }
                    // 此处钩子执行 原理同before-remove参数，见上方注释
                    beforeResponse = _this3.beforeRemove.bind(_this3.$u.$parent.call(_this3))(index, _this3.lists); // 判断是否返回了promise
                    if (!(!!beforeResponse && typeof beforeResponse.then === "function")) {
                      _context2.next = 8;
                      break;
                    }
                    _context2.next = 6;
                    return beforeResponse.then(function (res) {
                      // promise返回成功，不进行动作，继续上传
                      _this3.handlerDeleteItem(index);
                    }).catch(function (err) {
                      // 如果进入promise的reject，终止删除操作
                      _this3.showToast("已终止移除");
                    });
                  case 6:
                    _context2.next = 9;
                    break;
                  case 8:
                    if (beforeResponse === false) {
                      // 返回false，终止删除
                      _this3.showToast("已终止移除");
                    } else {
                      // 如果返回true，执行删除操作
                      _this3.handlerDeleteItem(index);
                    }
                  case 9:
                    _context2.next = 12;
                    break;
                  case 11:
                    // 如果不存在before-remove钩子，
                    _this3.handlerDeleteItem(index);
                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          function success(_x) {
            return _success.apply(this, arguments);
          }
          return success;
        }()
      });
    },
    // 执行移除图片的动作，上方代码只是判断是否可以移除
    handlerDeleteItem: function handlerDeleteItem(index) {
      // 如果文件正在上传中，终止上传任务，进度在0 < progress < 100则意味着正在上传
      if (this.lists[index].progress < 100 && this.lists[index].progress > 0) {
        typeof this.lists[index].uploadTask != 'undefined' && this.lists[index].uploadTask.abort();
      }
      this.lists.splice(index, 1);
      this.$forceUpdate();
      this.$emit("on-remove", index, this.lists, this.index);
      //this.showToast('移除成功');
    },
    // 用户通过ref手动的形式，移除一张图片
    remove: function remove(index) {
      // 判断索引的合法范围
      if (index >= 0 && index < this.lists.length) {
        this.lists.splice(index, 1);
        this.$emit('on-list-change', this.lists, this.index);
      }
    },
    // 预览图片
    doPreviewImage: function doPreviewImage(url, index) {
      var _this4 = this;
      if (!this.previewFullImage) {
        this.$emit("on-preview", url, this.lists, this.index);
        return;
      }
      var images = this.lists.map(function (item) {
        return item.url || item.path;
      });
      uni.previewImage({
        urls: images,
        current: url,
        success: function success() {
          _this4.$emit("on-preview", url, _this4.lists, _this4.index);
        },
        fail: function fail() {
          uni.showToast({
            title: "预览图片失败",
            icon: "none"
          });
        }
      });
    },
    // 判断文件后缀是否允许
    checkFileExt: function checkFileExt(file) {
      // 检查是否在允许的后缀中
      var noArrowExt = false;
      // 获取后缀名
      var fileExt = "";
      var reg = /.+\./;
      // 如果是H5，需要从name中判断

      // 非H5，需要从path中读取后缀

      fileExt = file.path.replace(reg, "").toLowerCase();

      // 使用数组的some方法，只要符合limitType中的一个，就返回true
      noArrowExt = this.limitType.some(function (ext) {
        // 转为小写
        return ext.toLowerCase() === fileExt;
      });
      if (!noArrowExt) this.showToast("\u4E0D\u5141\u8BB8\u9009\u62E9".concat(fileExt, "\u683C\u5F0F\u7684\u6587\u4EF6"));
      return noArrowExt;
    },
    // 深拷贝
    deepClone: function deepClone(obj, newObj) {
      for (var k in obj) {
        var value = obj[k];
        if (Array.isArray(value)) {
          newObj[k] = [];
          this.deepClone(value, newObj[k]);
        } else if (value !== null && (0, _typeof2.default)(value) === "object") {
          newObj[k] = {};
          this.deepClone(value, newObj[k]);
        } else {
          newObj[k] = value;
        }
      }
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 308:
/*!**********************************************************************************************************************************************!*\
  !*** F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/components/u-upload/u-upload.vue?vue&type=style&index=0&id=6cbfbe2a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_style_index_0_id_6cbfbe2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-upload.vue?vue&type=style&index=0&id=6cbfbe2a&lang=scss&scoped=true& */ 309);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_style_index_0_id_6cbfbe2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_style_index_0_id_6cbfbe2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_style_index_0_id_6cbfbe2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_style_index_0_id_6cbfbe2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_upload_vue_vue_type_style_index_0_id_6cbfbe2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 309:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/to_LHR/code/vue2/uni_modules/vk-uview-ui/components/u-upload/u-upload.vue?vue&type=style&index=0&id=6cbfbe2a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/vk-uview-ui/components/u-upload/u-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/vk-uview-ui/components/u-upload/u-upload-create-component',
    {
        'uni_modules/vk-uview-ui/components/u-upload/u-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(303))
        })
    },
    [['uni_modules/vk-uview-ui/components/u-upload/u-upload-create-component']]
]);
