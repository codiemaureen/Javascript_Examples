window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop fn from running
  audio.currentTime = 0; //allow sound to replay
  audio.play();

  
});