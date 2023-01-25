const mySound = document.getElementById("my-sound");

const icon = document.getElementById("icon");

icon.onclick = () => {
  if (mySound.paused) {
    mySound.play();
    icon.src = "https://img.icons8.com/ios-glyphs/30/null/circled-pause.png";
  } else {
    mySound.pause();
    icon.src =
      "https://img.icons8.com/ios-glyphs/30/null/play-button-circled--v1.png";
  }
};
