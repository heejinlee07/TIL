//app.mjs
import * as lib from "./lib.mjs";
//여러 개일 때 모두를 lib 이름으로 가져와라.

//import { foo, bar } from "./lib.mjs";

console.log(lib.foo);
//모듈이 동작하면 안불러지고, 동작하지 않으면 불러온다.
//foo는 이 안에서만 유효하니까 에러가 발생해야 함.

lib.bar();
