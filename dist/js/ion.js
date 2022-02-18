/* components */
document.querySelectorAll("[ion-for='offcanvas']").forEach(function (element) {
 var data = element.getAttribute('ion-target');
 element.onclick = function () {
   document.querySelector(data).style.width = "100%";
   document.querySelector(data + " .content").style.width = "100%";
 };
 document.querySelector(data + " > .content > .head > .closebtn").onclick = function () {
   document.querySelector(data).style.width = "0";
   document.querySelector(data + " .content").style.width = "0";
 };
});
document.querySelectorAll("[ion-for='model']").forEach(function (element) {
 var data = element.getAttribute('ion-target');
 element.onclick = function () {
   document.querySelector(data).style.display = "block";
 };
 document.querySelector(data + " > .content .closebtn").onclick = function () {
   document.querySelector(data).style.display = "none";
 };
});
document.querySelectorAll("[ion-for='popup']").forEach(function (element) {
 var data = element.getAttribute('ion-target');
 element.onclick = function () {
   document.querySelector(data).style.display = "block";
 };
 document.querySelector(data + " > .content .closebtn").onclick = function () {
   document.querySelector(data).style.display = "none";
 };
 document.querySelector(data).onclick = function () {
   document.querySelector(data).style.display = "none";
 };
});
document.querySelectorAll("[ion-for='collapse']").forEach(function (element) {
 var data = element.getAttribute('ion-target');
 element.onclick = function () {
   if (document.querySelector(data).style.maxHeight){
      document.querySelector(data).style.maxHeight = null;
    } else {
      document.querySelector(data).style.maxHeight = document.querySelector(data).scrollHeight + "px";
    }
 };
});
document.querySelectorAll(".loader[color]").forEach(function (element) {
 var data = element.getAttribute('color');
 element.style.borderTop = "3px solid var(--ion-" + data + ")";
 element.style.borderLeft = "3px solid var(--ion-" + data + ")";
 element.style.borderRight = "3px solid var(--ion-" + data + ")";
});
/* responsive */
document.querySelectorAll("[sm]").forEach(function (element) {
  var data = element.getAttribute('sm');
  if (window.matchMedia("(max-width: 600px)").matches) {
    element.className = data;
  }
});
document.querySelectorAll("[md]").forEach(function (element) {
  var data = element.getAttribute('md');
  if (window.matchMedia("(min-width: 600px)").matches) {
    element.className = data;
  }
});
document.querySelectorAll("[lg]").forEach(function (element) {
  var data = element.getAttribute('lg');
  if (window.matchMedia("(min-width: 768px)").matches) {
    element.className = data;
  }
});
document.querySelectorAll("[xl]").forEach(function (element) {
  var data = element.getAttribute('xl');
  if (window.matchMedia("(min-width: 992px)").matches) {
    element.className = data;
  }
});
document.querySelectorAll("[xxl]").forEach(function (element) {
  var data = element.getAttribute('xxl');
  if (window.matchMedia("(min-width: 1200px)").matches) {
    element.className = data;
  }
});
/* theme */
document.querySelectorAll("[dark]").forEach(function (element) {
  var data = element.getAttribute('dark');
  window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
    element.className = data;
  });
});
