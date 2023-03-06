//drums
let soundA = new Audio("sounds/boom.wav");
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 65) {
    soundA.play();
  }
});
