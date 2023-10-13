// Create an object to map keys to audio file paths
const keyAudioMap = {
    w: 'sounds/tom-1.mp3',
    a: 'sounds/tom-2.mp3',
    s: 'sounds/tom-3.mp3',
    d: 'sounds/tom-4.mp3',
    j: 'sounds/crash.mp3',
    k: 'sounds/kick-bass.mp3',
    l: 'sounds/snare.mp3',
  };
  
  // Add click event listeners to buttons
  for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener('click', function() {
      const key = this.innerHTML;
      playAudio(key);
    });
  }
  
  // Function to play audio based on a key
  function playAudio(key) {
    const audioPath = keyAudioMap[key];
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play();
    }
  }
  
  // Add keypress event listener
  document.addEventListener("keypress", function(event) {
    const key = event.key;
    playAudio(key);
  });
  