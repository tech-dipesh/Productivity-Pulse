let objectDataStore = {
  userId: 0,
  storeValue: "",
  isCheckMark: false,
};

let deleteOperation = (liCreate) => {
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  liCreate.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    console.log("Delete button is clicked.");
  });
};

// for storing into a object:
objectDataStore.userId = eachUserNumberOrder++;
objectDataStore.storeValue = inputValue.value;

const addToLocalStorage = (e) => {
  console.log("local storage", localStorage.getItem(eachUserNumberOrder));
  // localStorage.getItem(userId)
  // localStorage.setItem("list", JSON.stringify({ "Date.now()", "e.value", "false"}))
};

const checkMarkCreeation = () => {
  // Span to make in one line:
  let spanCreation = document.createElement("span");
  liCreate.appendChild(spanCreation);

  // Check Mark Creation:
  let checkMarkCreeation = document.createElement("input");
  checkMarkCreeation.setAttribute("type", "checkbox");
  spanCreation.appendChild(checkMarkCreeation);

  // checkMarkCreeation.getAttribute("checkbox")
  checkMarkCreeation.checked == true
    ? objectDataStore.isCheckMark
    : true
    ? objectDataStore.isCheckMark
    : false;
};

let eachUserNumberOrder = 1;
btnValue.addEventListener("click", () => {
  // Whenever i try to submit without the any given value:
  if (inputValue.value == "") {
    return;
  }

  let headDiv = document.getElementById("nestedDiv");
  let liCreate = document.createElement("li");
  liCreate.innerText = inputValue.value;
  headDiv.appendChild(liCreate);
  inputValue.value = "";

  checkMarkCreeation();
  // Edit Button:
  editOperation(liCreate);

  // Delete Operation:
  deleteOperation(liCreate);
});

let editOperation = (liCreate) => {
  let editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.style.marginRight = "20px";
  liCreate.appendChild(editButton);

  editButton.addEventListener("click", () => {
    let value = prompt("Please enter the new Value");
    for (let i in objectDataStore) {
      // iterate Loop:
      console.log("Tryting to iterate to entire object", objectDataStore[i]);

      if (i.userId == eachUserNumberOrder) {
        console.log("Value is identified and that new Value is: ");
        // i.valueOf=value;
        i.valueOf.innerText = value;
        console.log(objectDataStore[i]);
      }
    }
  });
};
