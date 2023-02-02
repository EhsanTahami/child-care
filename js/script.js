function asideFunctionOpen() {
    var element = document.getElementById("side-nav");
    element.classList.add("open-aside-navbar");
    var element = document.getElementById("side-nav").style.transform ="translateX(0)";
    var element = document.getElementById("side-nav").style.transition =" all 3s linear";
    // var element = document.getElementById ("body").style.background = "#221d1d5f";
    var element = document.getElementById("head-section").style.filter = "blur(2px)";
    var element = document.getElementById("head-section").style.cursor = "pointer";


}
function asideFunctionClose() {
    var element = document.getElementById("side-nav").style.transform ="translateX(-100%)";
    // var element = document.getElementById("body").style.background="white";
    var element = document.getElementById("head-section").style.filter = "blur(0px)";
    // element.classList.add("aside-navbar");
    // document.getElementById("p2").style.color = "blue";



}
