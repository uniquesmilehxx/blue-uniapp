"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
require("./static/js/host.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/watch/watch.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
    console.log("App Launch");
    const platform = common_vendor.index.getSystemInfoSync().platform;
    if (platform === "ios") {
      console.log("\u6211\u662FiOS");
    } else if (platform === "android") {
      console.log("\u6211\u662F\u5B89\u5353");
    } else if (platform === "devtools") {
      console.log("\u6211\u662F\u5F00\u53D1\u8005\u5DE5\u5177");
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Netjoy/Demo/uniapp-demo/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
