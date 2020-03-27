function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, "even");
    else console.log(i, "odd");
  }
}

showNumbers(10);
showNumbers(3);

//삼항조건연산자 ver.

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "even" : "odd";
    console.log(i, message);
  }
}
