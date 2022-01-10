var memenr = 0;
visMeme();
var i;

function visMeme() {
  var memes = document.getElementsByClassName("meme");
  for (i = 0; i < memes.length; i++) {
    memes[i].style.display = "none";
  }
  memenr++;
  if (memenr > memes.length) {memenr = 1}
  memes[memenr-1].style.display = "block";
  setTimeout(visMeme, 5000);
}
//Kilde: https://www.w3schools.com/howto/howto_js_slideshow.asp
