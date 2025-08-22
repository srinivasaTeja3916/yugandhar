let a = [];
let b = [];
let c = [];
display_html();
display();
function display_html() {
  let todolist = "";
  for (let i = 0; i < b.length; i++) {
    let html = `<p>${b[i]}</p>`;
    todolist += html;
  }
  let v = document.querySelector(".ntg");
  v.innerHTML = todolist;
}
function append() {
  let element = document.querySelector(".input-element");
  a.push(element.value);
  console.log(a);
  element.value = "";
}
function append2() {
  let element = document.querySelector(".input-element2");
  b.push(element.value);
  element.value = "";
  display_html();
}
function display() {
  let todolist2 = "";
  for (let i = 0; i < c.length; i++) {
    let html = `
    <div>${c[i][0]}</div>
    <div>${c[i][1]}</div>
    <button class="hiii" onclick="
      c.splice(${i},1);
      display()
      ">Delete</button>
      `;
    todolist2 += html;
  }
  let yug = document.querySelector(".bottom");
  yug.innerHTML = todolist2;
}
function append3() {
  let list_element = document.querySelector(".suneel");
  let list_cal = document.querySelector(".suneel2");
  c.push([list_element.value, list_cal.value]);
  list_element.value = "";
  display();
}
