document.querySelectorAll("[dark]").forEach(function (element) {
  var data = element.getAttribute('dark');
  window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
    element.className = data;
  });
});