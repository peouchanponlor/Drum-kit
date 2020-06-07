
var numberofdrum = document.querySelectorAll(".drum").length;
for (var i=0; i<numberofdrum; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML){
      case "w":
      drum = new Audio("sounds/crash.mp3");
      drum.play();
      break;

      case "a":
      drum = new Audio("sounds/kick-bass.mp3");
      drum.play();
      break;

      case "s":
      drum = new Audio("sounds/snare.mp3");
      drum.play()
      break;

      case "d":
      drum = new Audio("sounds/tom-4.mp3");
      drum.play();
      break;

      case "j":
      drum = new Audio("sounds/tom-1.mp3");
      drum.play();
      break;

      case "k" :
      drum = new Audio("sounds/tom-2.mp3");
      drum.play();
      break;

      case "l":
      drum = new Audio("sounds/tom-3.mp3");
      drum.play();
      break;

    default: console.log();
    }

  })
}
