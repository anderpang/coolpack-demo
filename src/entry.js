import $ from "jquery";
import show_avatar from "./show-avatar-module";

import "./style.css";
import "./style-1.css";

var html=show_avatar();
   
    html+='<a href="news/detail.html">detail.html</a>';

$("#app").html(html);