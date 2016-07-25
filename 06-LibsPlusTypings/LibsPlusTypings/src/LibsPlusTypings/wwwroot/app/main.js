"use strict";
var $ = require('jquery');
var util_1 = require('./util');
function foo() {
    //alert("Hello Wolrd!");
    var util = new util_1.Util();
    var el = $("#mydiv");
    el.css('background-color', 'blue');
    el.html(util.sum(2, 3).toString());
}
window["foo"] = foo;
