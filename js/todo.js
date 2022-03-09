const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
    toDos=toDos.filter((toDo) =>toDo.id !==parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");
    span.innerText=newTodo.text;
    // const button=document.createElement("button");
    // button.innerText="❌";
    const img=document.createElement("img");
    img.setAttribute("src","https://ww.namu.la/s/a106986ea5c7f7a5342f44137d48991fc3feb76709fa5830e7898a5863222765dc113c5ae42dbe9b2ec32e775dccc347cfc6b6abd9101d4d2566bdb658cef7940a5c1d64ae19d8c032c3e2c62dd31b27");
    // button.addEventListener("click",deleteToDo);
    img.addEventListener("click",deleteToDo);
    li.appendChild(span);
    // li.appendChild(button);
    li.appendChild(img);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj={
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit",handleToDoSubmit);



const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
   parsedToDos.forEach(paintToDo);
}