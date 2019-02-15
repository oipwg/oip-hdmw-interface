"use strict";

var _express = _interopRequireDefault(require("express"));

var _next = _interopRequireDefault(require("next"));

var _path = _interopRequireDefault(require("path"));

var _helmet = _interopRequireDefault(require("helmet"));

var _logs = _interopRequireDefault(require("./logs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var _require = require(_path.default.resolve('./', 'lib/api/getRootUrl')),
    getRootUrl = _require.getRootUrl;

var dev = process.env.NODE_ENV !== 'production';
var port = process.env.PORT || 7000;
var ROOT_URL = getRootUrl();
var app = (0, _next.default)({
  dev: dev
});
var handle = app.getRequestHandler();
var URL_MAP = {
  // example URL_MAP
  '/load': '/public/load'
};
app.prepare().then(function () {
  var server = (0, _express.default)();
  server.use((0, _helmet.default)());

  if (!dev) {
    server.set('trust proxy', 1);
  }

  server.get('*', function (req, res) {
    var url = URL_MAP[req.path];

    if (url) {
      var query = req.query.query;
      app.render(req, res, url, query);
    } else {
      handle(req, res);
    }
  });
  server.listen(port, function (err) {
    if (err) throw err;

    _logs.default.info("> Ready on ".concat(ROOT_URL));
  });
});