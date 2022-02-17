function toggleVisibility(target) {
  var x = document.querySelector(target);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hide(target) {
  document.querySelector(target).style.display = "none";
}