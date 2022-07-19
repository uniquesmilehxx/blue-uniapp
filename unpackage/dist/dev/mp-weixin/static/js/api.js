"use strict";
var static_js_request = require("./request.js");
require("./host");
function apiTest() {
  return static_js_request.request({
    url: "/mobile/user/userinfo"
  });
}
exports.apiTest = apiTest;
