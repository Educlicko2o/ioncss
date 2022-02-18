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