"use strict";
var static_js_api = require("../../static/js/api.js");
var common_vendor = require("../../common/vendor.js");
require("../../static/js/request.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  onShow() {
    static_js_api.apiTest();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Netjoy/Demo/uniapp-demo/pages/watch/watch.vue"]]);
tt.createPage(MiniProgramPage);
