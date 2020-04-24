"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _axios = _interopRequireDefault(require("axios"));

var _getDirname = _interopRequireDefault(require("../helpers/getDirname"));

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5200;
app.set('view engine', 'ejs');
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../', 'dist')));
app.get('/', function (req, res) {
  res.render('index', {
    answer: 46
  });
});
console.log(__dirname); // (async () => { 
//     try {
//         const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//         console.log(resp.data); ;
//     } catch (error) {
//         console.log(error);
//     }
// })();

app.listen(PORT, function () {
  console.log("running on port ".concat(PORT, ". updated"));
});