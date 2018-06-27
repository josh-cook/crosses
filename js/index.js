//Using set theory to set solutions
var solutions = [
	['A', 'B', 'C'],
  ['A', 'E', 'I'],
  ['A', 'D', 'G'],
  ['B', 'E', 'H'],
  ['C', 'E', 'G'],
  ['C', 'F', 'I'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
];

var playerAnswer = [];

function isGameOver() {
  var gameOver = false;

  solutions.forEach(solution => {
    var difference = _.difference(solution, playerAnswer);
    if (_.isEmpty(difference)) {
      gameOver = true;
    }
  });

  return gameOver;
}

//removing colours from nodes and clearing answer array back to start game state
function reset() {
  playerAnswer = [];
  $('.cross-node').removeClass('colour');
}

//needs better way of creating a new game
$('.cross-node').on('click', function(e) {
  playerAnswer.push(e.target.id);
  $(e.target).addClass('colour');
  if (isGameOver()) {
    alert('You have lost the game');
    reset();
  }
});
