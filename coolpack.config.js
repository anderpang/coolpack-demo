
module.exports={
    templatePath:"./public",

    module:{
        list:[{
            name:"lib/jquery.js",
            alias:"jquery",
            untreated:true
        }],
        output:"common.js",

        module:[
            {
                list:{name:"src/entry.js"},
                output:"js/init.js",
                css:"css/entry.css",
                template:"index.html"
            },
            {
                list:{name:"src/detail.js"},
                template:"news/detail.html"
            }
         ]
    },

    htmlMinify:{
        removeComments:true,
        collapseWhitespace:true
    },
     
    cssSyntax:"less",
    cssExtname:[".css",".less"]
};
