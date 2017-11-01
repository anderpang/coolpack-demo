# coolpack demo

### example
If you want a really quick example try this:

1. `git clone https://github.com/anderpang/coolpack-demo && cd coolpack-demo`
2. `npm install coolpack --global`
3. `coolpack --server`

and now you should see a file explorer demo app.


### detail.html

lazy load

<pre><code>

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

</code></pre>