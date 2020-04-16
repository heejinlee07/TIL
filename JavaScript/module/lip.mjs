//REMIND:모듈의 개념을 이해하자. import/export
//lib.mjs

/**
 * NOTE:
 * var x = 1;
 * console.log(window.x);
 *
 * undefined가 return. module에서는 var로 선언하더라도
 * 전역이 아니다.
 */

export const foo = "foo";

export const bar = () => {
  console.log("bar");
};

export { foo, bar };
//객체 하나를 export

// const foo = "foo";
// export const bar = () => {
//   console.log(bar);
// };
