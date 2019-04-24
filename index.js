window.onload = function() {
  document.getElementById('main-content').innerHTML = 'VIDEO GUIDED SOUND SOURCE SEPARATION'
  var x = document.createElement("VIDEO");
  x.setAttribute ("width", "640");
  x.setAttribute ("height", "480");
  x.setAttribute ("controls", "controls");
  x/setAttribute ("src", "src/videoForIcira.mp4");
  document.body.appendChild(x);
}