$(document).ready(function() {
    var hash = window.location.hash.substr(1);
    if ("" !== hash && "all" !== hash){
        filterDeviceType(hash);
    }
});

function filterDeviceType(dType){
    var els = document.getElementsByClassName("device");
    for (var ii = 0; ii < els.length; ii ++) {
        if (els[ii].classList.contains(dType)){
            els[ii].style.display = "";
        } else {
            els[ii].style.display = "none";
        }
    }
}

function showAll() {
    var els = document.getElementsByClassName("device");
    for (var ii = 0; ii < els.length; ii ++) {
        els[ii].style.display = "";
    }
}