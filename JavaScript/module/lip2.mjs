// lib2.mjs
const pi = Math.PI;

function square(x) {
  return x * x;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

// 변수, 함수 클래스를 하나의 객체로 구성하여 공개
// 이렇게 하면 export에 적힌 것만 보면 된다.
export { pi, square, Person };

//함수를 내보낼 때
//변수는 export해서 내보내면 되지만 그렇게는 잘 쓰지 않는다.
export default (x) => x * x;
/**
 * NOTE:
 * 내보낼 때는 이름이 없어야함.
 * 받을 때는 app.mjs에서 import sq from './lib2.mjs'; 이런 식으로 받음.
 * 재사용성이 증가되고, 가져오기 편해짐.
 */
