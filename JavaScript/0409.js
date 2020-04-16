const get = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      //sucess
      callback(JSON.parse(xhr.response));
    } else {
      //failed
      throw new Error(`${xhr.status}`);
    }
  };
};

get("https://jsonplaceholder.typicode.com/todos/1", console.log);

//프로미스로 바꾸기

//promise 객체가 만들어짐. 반드시 인수가 1개 이상(콜백함수) 필요.
//Promise가 호출함.일반 생성자함수니까.
const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        //sucess 서버로부터 받은 데이터를 인수로 전달
        resolve(JSON.parse(xhr.response));
      } else {
        //failed 에러객체를 인수로 전달
        reject(new Error(`${xhr.status}`));
      }
    };
  });
};

//promise가 성공(fullfilled) 또는 실패라는 상태를 가진다. 그 상태를 결정하는 것이 resolve/reject
//후속처리는 아래와 같이.
promiseGet("https://jsonplaceholder.typicode.com/todos/1") //여기서 받은 상태에 따라 아래의 후속처리 결정.
  .then((todo) => console.log(todo)) //fullfilled일 때 출력됨
  .catch((err) => console.error(err)) //reject일 때 출력됨
  .finally(() => console.log("end")); //성공/실패 상관없이 출력됨.

//then을 이렇게 두 개 사용할 수 있음.
promiseGet("/todos")
  .then((_todos) => (todos = _todos))
  .then(render)
  .catch((err) => console.error(err))
  .finally(() => console.log("end"));
