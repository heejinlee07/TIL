//state 하나의 상태
let todos = [];

/*비동기식
console.log('A')
*/

/*동기식
window.onload = e => {
  console.log('load')
}
1. 위의 초기데이터를 가져와야함.(서버로부터 초기데이터 취득)
*/

const $inputTodo = document.querySelector(".inputTodo");
const $todos = document.querySelector(".todos");
const $removeButton = document.querySelector("#remove-all-btn");

const render = () => {
  let html = "";
  todos.forEach(todo => {
    html += `<li id ="${todo.id}"><input type='checkbox' ${
      todo.completed ? "checked" : ""
    }><span>${todo.content}</span><button class='remove'>x</button></li>`;
  });
  $todos.innerHTML = html;
};

//서버로부터 데이터를 가져오는 함수
const getTodos = () => {
  todos = [
    { id: 1, content: "HTML", completed: false },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "Javascript", completed: false }
  ].sort((todo1, todo2) => todo2.id - todo1.id);
  console.log("[getTodos]", todos);
  render();
};

const toggleCompleted = id => {
  todos = todos.map(todo =>
    todo.id === +id ? { ...todo, completed: !todo.completed } : todo
  );
  console.log("[toggleCompleted]", todos);
  render();
};

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  console.log("[removeTodo]", todos);
  render();
};

const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};

//event binding
window.onload = getTodos;

$inputTodo.onkeyup = e => {
  const content = $inputTodo.value;
  if (e.keyCode !== 13 || content.trim() === "") return;
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  render();
  $inputTodo.value = "";
};

todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
};

todos.onclick = e => {
  if (!e.target.matches(".todos>li>button.remove")) return;
  removeTodo(e.target.parentNode.id);
};

$removeButton.onClick = e => {
  todos = [];
  SpeechRecognitionResult();
};
