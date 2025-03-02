import { v4 as uuidv4 } from "uuid";

const inputTask = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

const addTask = () => {
  taskList.insertAdjacentHTML(
    "beforeend",
    ` <li id="${nanoid()}">
            <p>${inputTask.value}</p>
            <button id="delete-btn">Delete</button>
            <button id="check-btn">Check</button>
        </li>`
  );
  inputTask.value = "";
};

const deleteTask = (event) => {
  event.target.parentElement.remove();
};

const markTaskDone = (event) => {
  event.target.parentElement.firstElementChild.classList.toggle("done");
};

addTaskBtn.addEventListener("click", addTask());
taskList.addEventListener("click", (event) => {
  if (event.target.id === "deleteBtn") {
    deleteTask(event);
  }
  if (event.target.id === "doneBtn") {
    markTaskDone(event);
  }
});
