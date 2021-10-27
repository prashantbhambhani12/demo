import * as ev from "./events.js";
/*Function that Strikes through the task onclick(as if its done) */
let changeTargetStyle = (event, clasName) => {
  event.classList.contains(clasName)
    ? event.classList.remove(clasName)
    : event.classList.add(clasName);
};
let changeTargetAttribute = (event, prop) => {
  event.target.prop
    ? event.target.removeAttribute(prop)
    : event.target.setAttribute(prop, "true");
};

let submitForm = (e) => {
  if (e.key == 13) {
    document.querySelector("#taskForm").submit();
  }
};

export { submitForm, changeTargetStyle, changeTargetAttribute };
