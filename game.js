buttonColors = ["green", "red", "yellow", "blue"];
gamePattern = [];
userClickedPattern = [];

$(".btn").on("click", function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let newColor = buttonColors[randomNumber];
  gamePattern.push(newColor);
  $("#" + newColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(newColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
