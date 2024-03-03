let $ = document;

let boxElem = $.querySelector(".box");
let numberElem = $.querySelector(".number");
let statusElem = $.querySelector(".status")

boxElem.addEventListener("touchmove", function () {
  numberElem.innerHTML++;
});
boxElem.addEventListener("touchstart", function () {
  statusElem.innerHTML = "شروع لمس"
});
boxElem.addEventListener("touchend", function () {
    statusElem.innerHTML = "پایان لمس"
});
