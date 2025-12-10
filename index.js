let inputValue = document.querySelector("input");
let btnValue = document.getElementById("btn");
let selectDiv = document.getElementById("nestedDiv");
// let counterTrack = 0;

let arrayOutput = JSON.parse(localStorage.getItem("todo")) || [];

  window.addEventListener("keyup", (e)=>{
      if(e.key=="Enter" && e.ctrlKey) btnValue.click()
    })



const convertLocalStorageToDiv = () => {
  // first create all attribute and store on localStoreage
  arrayOutput.forEach((e) => {
    let createnewLi = document.createElement("li");
    const spanCreate = document.createElement("span");
    const checkMarkOption = document.createElement("input");
    checkMarkOption.setAttribute("type", "checkbox");
    checkMarkOption.setAttribute("class", "checkBoxCheck");
    checkMarkOption.checked = e.completedCheckMarkDefault;

    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const timeShow = document.createElement("span");
    timeShow.innerText = new Date().toLocaleTimeString();
    editButton.innerText = "edit";
    deleteButton.innerText = "delete";
    editButton.setAttribute("class", "editbtn");
    deleteButton.setAttribute("class", "deletetbtn");
    spanCreate.innerHTML = e.task;
    spanCreate.append(checkMarkOption, editButton, deleteButton, timeShow);
    createnewLi.appendChild(spanCreate);
    selectDiv.appendChild(createnewLi);
  });
  localStorage.setItem("todo", JSON.stringify(arrayOutput));
};

const addToDoListToArray = (inputValue) => {
  // Object create and push it to the localStorage:
  const objectCreation = {
    task: inputValue,
    trackUnique: Date.now(),
    completedCheckMarkDefault: false,
    dateOfCreation: 0
  };
  arrayOutput.push(objectCreation);

  localStorage.setItem("todo", JSON.stringify(arrayOutput));
};

convertLocalStorageToDiv();

// Create the span and the edit delete button:
const createButton = (e) => {
  let li = e.target.closest("li");
  let spanCreate = li.querySelector("span");
  let takeinputValue = spanCreate.childNodes[0].textContent;

  // Check Mark Checked:
  if (e.target.matches(".checkBoxCheck")) {
    arrayOutput.find((f) => {
      if (f.task == takeinputValue) {
        f.completedCheckMarkDefault = e.target.checked;
        return;
      }
    });
    localStorage.setItem("todo", JSON.stringify(arrayOutput));
  }

  // For the edit Button
  if (e.target.className == "editbtn") {
    let newInput = prompt("Please Enter a Edited Value.");
    if (newInput == "" || !newInput) {
      alert("Please enter something.");
      return;
    }

    arrayOutput.find((f) => {
      if (f.task == takeinputValue) {
        f.task = newInput;
        return;
      }
    });
    spanCreate.childNodes[0].textContent = newInput;
    localStorage.setItem("todo", JSON.stringify(arrayOutput));
  }

  // For the Deletion:
  if (e.target.className == "deletetbtn") {
    if (confirm("Do you really want to delete then click yes.") == false) {
      return;
    }
    let FilteredTodo = arrayOutput.filter((each) => {
      return each.task != takeinputValue;
    });
    localStorage.setItem("todo", JSON.stringify(FilteredTodo));
    li.remove();
  }
};

// selectDiv.addEventListener("click", function (e) { createButton(e) })
selectDiv.addEventListener("click", function (e) {
  createButton(e);
});

// this is for the Add Option:
btnValue.addEventListener("click", () => {
  let takeinputValue = inputValue.value.trim();
  if (takeinputValue == "") {
    alert("Please enter something!");
    return;
  }
  inputValue.value = "";
  addToDoListToArray(takeinputValue);
  location.reload();
});
