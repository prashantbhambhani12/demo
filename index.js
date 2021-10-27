import * as ev from "./events.js";
import * as fn from "./functions.js";

ev.handleEvent(".taskInput", "keyup", (e) => fn.submitForm(e)); //Start point(Module)

/*CUSTOM CODE--> Add task to list */
document.querySelector("#taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let taskInput = document.querySelector(".taskInput");
  if (taskInput.value.length) {
    document.querySelector(".taskBody").innerHTML += `
    <tr class="row mx-auto w-100 position-relative">
    <td class="col-12 mx-auto">
    <div class="form-group position-relative" >
    <input class="form-control border-0 shadow-none taskList rounded-0" readonly value="${taskInput.value}">
    <button class="btn btn-sm delBtn px-3 py-1 position-absolute end-0 top-50 translate-middle rounded shadow-none">Delete</button>
    </div>
    </td>
    </tr>
    `;
    document.forms.taskForm.reset();
    taskInput.focus();

    /* MODULE--> call to function that "Strikes through the task on click" (as if its done)*/
    ev.handleEvent(".taskList", "click", (e) =>
      fn.changeTargetStyle(e.target, "striked")
    );

    /* MODULE--> call to function that "changes the css for row deletion on DELETE Button Click" */
    ev.handleEvent(".delBtn", "click", (e) => {
      e.stopImmediatePropagation();
      fn.changeTargetStyle(
        e.target.parentElement.parentElement.parentElement,
        "hide"
      );
      setTimeout(() => {
        e.target.parentElement.parentElement.parentElement.remove();
      }, 500);
    });
  } else {
    alert("This field can't be empty");
    return false;
  }
});
/* MODULE--> call to function that "deletes all tasks on Clear-All Button Click" */

ev.handleEvent(".clearBtn", "click", (e) => {
  let taskBody = document.querySelector(".taskBody");
  e.stopImmediatePropagation();
  if (document.querySelectorAll(".taskList").length) {
    fn.changeTargetStyle(
      e.target.previousElementSibling.querySelector(".taskBody"),
      "hide"
    );
  }

  setTimeout(() => {
    taskBody.innerHTML = "";
    taskBody.classList.remove("hide");
  }, 500);
});
