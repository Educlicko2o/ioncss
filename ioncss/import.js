/* 
  licence : ISC
  author : educlick comm
  see more on /licence.txt
*/
let ionversion = "1.7.3";

function loadScript(url) {
    var script = document.createElement("script");
    script.src = url; 
    document.head.appendChild(script);  
}

function loadStyle(src) {
    return new Promise(function (resolve, reject) {
        let link = document.createElement('link');
        link.href = src;
        link.rel = 'stylesheet';
        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error(`Style load error for ${src}`));
        document.head.append(link);
    });
}

loadStyle("./style/root.css")
.then(() => loadStyle("./style/responsive.css"))
.then(() => loadStyle("./style/components.css"))
.then(() => loadStyle("./style/flex.css"))
.then(() => loadStyle("./style/ext.css"))
.then(() => loadStyle("./style/padding.css"))
.then(() => loadStyle("./style/margin.css"))
.then(() => loadStyle("./style/font.css"))
.then(() => loadStyle("./style/fixed.css"))
.then(() => loadStyle("./style/align.css"))
.then(() => loadStyle("./style/width.css"))
.then(() => loadStyle("./style/color.css"))
.then(() => loadStyle("./style/border.css"))
.then(() => loadScript(ionprefix + "/main.js"))
;