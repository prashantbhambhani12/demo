let taskInput = document.querySelector(".taskInput");
taskInput.addEventListener("keyup", (e) => {
  if (e.key == 13) {
    document.querySelector("#taskForm").submit();
  }
});
document.querySelector("#taskForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskInput.value.length) {
    document.querySelector(".taskBody").innerHTML += `
    <tr class="row mx-auto w-100 position-relative">
    <td class="col-12 mx-auto">
    <div class="form-group position-relative" >
    <input class="form-control border-0 shadow-none taskList rounded-0" contenteditable="true" readonly value="${taskInput.value}">
    <button class="btn btn-sm delBtn px-3 py-1 position-absolute end-0 top-50 translate-middle rounded shadow-none">Delete</button>
    </div>
    </td>
    </tr>
    `;
    document.forms.taskForm.reset();
    taskInput.focus();
    document.querySelectorAll(".taskList").forEach((v) => {
      v.addEventListener("click", (e) => {
        e.target.classList.contains("striked")
          ? e.target.classList.remove("striked")
          : e.target.classList.add("striked");
      });
      v.nextElementSibling.addEventListener("click", (e) => {
        e.stopPropagation();
        e.target.parentElement.parentElement.parentElement.classList.contains(
          "hide"
        );
        e.target.parentElement.parentElement.parentElement.classList.remove(
          "hide"
        );
        e.target.parentElement.parentElement.parentElement.classList.add(
          "hide"
        );
        setTimeout(() => {
          e.target.parentElement.parentElement.parentElement.remove();
        }, 300);
      });
    });
  } else {
    alert("This field can't be empty");
    return false;
  }
});
document.querySelector(".clearBtn").addEventListener("click", (e) => {
  if (document.querySelectorAll(".taskList").length) {
    document.querySelector(".taskBody").classList.contains("hide")
      ? document.querySelector(".taskBody").classList.remove("hide")
      : document.querySelector(".taskBody").classList.add("hide");
    setTimeout(() => {
      document.querySelector(".taskBody").innerHTML = "";
      document.querySelector(".taskBody").classList.remove("hide");
    }, 500);
  }
});
