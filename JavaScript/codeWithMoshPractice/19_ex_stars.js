showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

var star = "";
var line = 5;

for (let i = 0; i < line; i++) {
  star += "*";
  console.log(star);
}
