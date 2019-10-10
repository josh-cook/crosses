const playerAnswer = [];

//removing colours from nodes and clearing answer array back to start game state
function reset() {
  playerAnswer = [];
  $(".cross-node").removeClass("colour");
}

//needs better way of creating a new game
$(".cross-node").on("click", function(e) {
  playerAnswer.push(e.target.id);
  $(e.target).addClass("colour");
  if (isGameOver(playerAnswer)) {
    setTimeout(() => {
      alert("You have lost the game");
      reset();
    }, 0);
  }
});
