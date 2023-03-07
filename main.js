//drums
let soundA = new Audio("sounds/clap.wav");
let soundC = new Audio("sounds/hihat.wav");
const btnHideRectangle = document.querySelector(".container-box");
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 65) {
    soundA.currentTime = 0;
    soundA.play();
    btnHideRectangle.style.borderLeft = "25px solid green";
  } else if (event.keyCode == 83) {
    soundC.currentTime = 0;
    soundC.play();
  }
});
