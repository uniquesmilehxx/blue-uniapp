"use strict";
var common_vendor = require("../../common/vendor.js");
const hosts = require("./host");
const request = function({
  host = hosts.host,
  url,
  method = "GET",
  data = {},
  header
}) {
  common_vendor.index.setStorageSync("token", "116987309790870309dc27c36465d314");
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      method,
      url: host + url,
      data,
      header: Object.assign({
        "X-Token": wx.getStorageSync("token")
      }, header),
      success: (res) => {
        const { code } = res.data;
        if (code === -100) {
          common_vendor.index.clearStorageSync();
          common_vendor.index.showToast({
            title: "\u767B\u5F55\u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55",
            icon: "none"
          });
        } else {
          resolve(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
