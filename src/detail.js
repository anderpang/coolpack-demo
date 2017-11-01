import $ from "jquery";
import "./style.css";
import "./css/detail.less";

$("button").on("click",function(e){

    // lazy load
    require.ensure(["./show-avatar-module"],function(require){
        var show_avatar=require("./show-avatar-module");
        var html=show_avatar();

        $("#app").html(html);
    });
});