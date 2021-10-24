(function () {
  // document.getElementsByTagName("p").style.color = "blue";
  p = document.getElementsByTagName("body");
  for (let i = 0; i < p.length; i++) {
    p[i].style.background = "black";
    p[i].style.color = "white";
  }
  if (p.style.background != "black") {
    alert("An error occurred.")
  }
})();
