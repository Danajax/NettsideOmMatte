function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
//Kilde: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
