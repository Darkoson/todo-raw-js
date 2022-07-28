// declaration of variables
let inputElement = document.getElementById("input");
let listElement = document.getElementById("list");

// assignment of event listners to elements
inputElement.addEventListener("keyup", getInputText);

// declaration of functions
function getInputText(event) {
  if (event.code == "Enter") {
    let text = inputElement.value;
    inputElement.value = "";

    if (text != "") {
      let newItem = createItem(text);
      listElement.appendChild(newItem);

      updateItemCounts();
    }
  }
}

function createItem(text) {
  let item = document.createElement("div");
  item.classList.add("item");

  let radio = document.createElement("input");
  radio.addEventListener("click", checkItem);

  radio.setAttribute("type", "checkbox");

  let span = document.createElement("span");
  span.innerText = text;

  let button = document.createElement("button");
  button.classList.add("delete");
  button.innerText = "X";
  button.addEventListener("click", deleteItem);

  item.appendChild(radio);
  item.appendChild(span);
  item.appendChild(button);

  return item;
}

function checkItem(event) {
  let isChecked = event.target.checked;
  let span = event.target.nextElementSibling;
  if (isChecked) {
    span.classList.add("completed");
  } else {
    span.classList.remove("completed");
  }

  updateItemCounts();
}

function deleteItem(event) {
  event.target.parentElement.remove();
  updateItemCounts();
}

function updateItemCounts() {
  let totalItems = document.querySelectorAll("span").length;
  let completedItems = document.querySelectorAll(".completed").length;

  console.log("total=", totalItems, " completed=", completedItems);
}
