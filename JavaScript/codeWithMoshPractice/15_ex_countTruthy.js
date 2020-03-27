/* list of falsy value
falsy
undefined
null
''
false
0
NaN
*/

const array = [0, null, undefined, "", 2, 3, 4];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
