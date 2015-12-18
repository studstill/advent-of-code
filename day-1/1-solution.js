var input = require('./1-input');

function calculateFloor(input) {
  var floor = 0;
  for (var i = 0; i < input.length; i++) {
    input.charAt(i) === '(' ? ++floor : --floor;
  }
  return floor;
}

console.log(calculateFloor(input));
