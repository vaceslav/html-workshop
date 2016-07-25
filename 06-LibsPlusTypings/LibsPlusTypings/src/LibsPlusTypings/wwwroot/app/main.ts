import * as  $ from 'jquery';
import { Util } from './util'

function foo() {
    //alert("Hello Wolrd!");

    var util = new Util();

    var el = $("#mydiv");
    el.css('background-color', 'blue');
    el.html(util.sum(2, 3).toString());
}

window["foo"] = foo;
