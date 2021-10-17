// encapsulate
var helloWorld = {
    init: function (helloId, helloText) {
        var helloElement = document.getElementById(helloId);
        helloElement.innerText = helloText;
    }
};

// run when page has loaded.
function autorun() {
    helloWorld.init("js_hello", "Hello World!"); 
}
if (window.addEventListener) window.addEventListener("load", autorun, false);
else if (window.attachEvent) window.attachEvent("onload", autorun);
else window.onload = autorun;