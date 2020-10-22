function onScrollOrWindowSizeChange() {
    var rect = document.getElementsByTagName("body")[0].getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    document.getElementById("titleImage").style = `transform: translateY(${-rect.top/3*2}px); width: ${Math.min(document.documentElement.clientWidth, 700)}px;`;
    if (-rect.top > 439) {
        document.getElementsByClassName("header")[0].id = "onText";
    } else {
        document.getElementsByClassName("header")[0].id = "onImage";
    }
    //window.scrollTo()
}

(function start() {
    window.addEventListener("resize", onScrollOrWindowSizeChange);
    onScrollOrWindowSizeChange();
})()