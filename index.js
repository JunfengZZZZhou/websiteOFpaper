window.onload = function() {
  document.getElementById('main-content').innerHTML = 'VIDEO GUIDED SOUND SOURCE SEPARATION'
  var x = document.createElement("VIDEO");
  x.setAttribute ("width", "1280");
  x.setAttribute ("height", "960");
  x.setAttribute ("controls", "controls");
  x.setAttribute ("src", "src/videoForIcira.mp4");
  <p align="center">
  document.body.appendChild(x);
  </P>
}