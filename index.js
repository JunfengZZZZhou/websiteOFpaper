window.onload = function() {
  document.getElementById('main-content').innerHTML = 'VIDEO GUIDED SOUND SOURCE SEPARATION'
  var x = document.createElement("VIDEO");
  x.setAttribute ("width", "320");
  x.setAttribute ("height", "240");
  x.setAttribute ("controls", "controls");
  x.setAttribute ("src", "src/videoForIcira.mp4");
  document.body.appendChild(x);
}