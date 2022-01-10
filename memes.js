var memenr = 0;
var i;
visMeme();

function visMeme() {
  var memes = document.getElementsByClassName("meme"); //lager en array "memes"
  for (i = 0; i < memes.length; i++) {
    memes[i].style.display = "none";
  }
  memenr++;
  if (memenr > memes.length) {memenr = 1}
  memes[memenr-1].style.display = "block";
  setTimeout(visMeme, 3000);
}
//Kilde: https://www.w3schools.com/howto/howto_js_slideshow.asp

//var memes = [];
//var tid = 3000;

//function visMeme() {
  //var memes = document.getElementsByClassName("meme");

  //if (i < memes.length - 1) {
  //  i++
  //} else {
    //i = 0;
  //}
  //setTimeout("visMeme", tid);
//}
//window.onload = visMeme();
