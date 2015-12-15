//using graph theory to set solutions
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

var answer = [];

function isGameOver() {
  var gameOver = false;

  solutions.forEach(solution => {
    var difference = _.difference(solution, answer);
    if (_.isEmpty(difference)) {
      gameOver = true;
    }
  });

  return gameOver;
}

function reset() {
  answer = [];
  $('.cross-node').removeClass('colour');
}

$('.cross-node').on('click', function(e) {
  answer.push(e.target.id);
  $(e.target).addClass('colour');
  if (isGameOver()) {
    alert('You have lost the game');
    reset();
  }
});
