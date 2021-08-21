// sidebar interaction
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

//selecter
const showButton = document.getElementById("show-btn");
const displayDataArea = document.getElementById("display-data-area");
//Work btn
const workBtn = document.getElementById("work-btn");
workBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8080/todolist");
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    if (data[i].assignedto === "work") {
      displayDataArea.innerHTML = `
        <form id='data-detail-form'>
        <div id='data-${i}' class='data-field'>
        <div class='id'>${data[i].id}</div>
        <div class="name">${data[i].name}</div>
        <div class="assigned-to">${data[i].assignedto}</div>
        <div class="due-date">${data[i].duedate}</div>
        <div class="status">${data[i].status}</div>
            <button type="button" class="button update" id="${data[i].id}"><i class="fas fa-edit"></i></button>
            <button type="button" class="button delete" id="${data[i].id}"><i class="far fa-trash-alt"></i></button>
            <button type="button" class="button plus" id="${data[i].id}"><i class="far fa-plus-square"></i></button>
            </div>
        </form>
        <form id='data-detail-form' class="description-container">
        <div class="description">${data[i].description}</div></form>`;
    }
  }
});
//Home btn
const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8080/todolist");
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    if (data[i].assignedto === "home") {
      displayDataArea.innerHTML = `
        <form id='data-detail-form'>
        <div id='data-${i}' class='data-field'>
        <div class='id'>${data[i].id}</div>
        <div class="name">${data[i].name}</div>
        <div class="assigned-to">${data[i].assignedto}</div>
        <div class="due-date">${data[i].duedate}</div>
        <div class="status">${data[i].status}</div>
            <button type="button" class="button update" id="${data[i].id}"><i class="fas fa-edit"></i></button>
            <button type="button" class="button delete" id="${data[i].id}"><i class="far fa-trash-alt"></i></button>
            <button type="button" class="button plus" id="${data[i].id}"><i class="far fa-plus-square"></i></button>
            </div>
        </form>
        <form id='data-detail-form' class="description-container">
        <div class="description">${data[i].description}</div></form>`;
    }
  }
});
//School btn
const schoolBtn = document.getElementById("school-btn");
schoolBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8080/todolist");
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    if (data[i].assignedto === "school") {
      displayDataArea.innerHTML = `
        <form id='data-detail-form'>
        <div id='data-${i}' class='data-field'>
        <div class='id'>${data[i].id}</div>
        <div class="name">${data[i].name}</div>
        <div class="assigned-to">${data[i].assignedto}</div>
        <div class="due-date">${data[i].duedate}</div>
        <div class="status">${data[i].status}</div>
            <button type="button" class="button update" id="${data[i].id}"><i class="fas fa-edit"></i></button>
            <button type="button" class="button delete" id="${data[i].id}"><i class="far fa-trash-alt"></i></button>
            <button type="button" class="button plus" id="${data[i].id}"><i class="far fa-plus-square"></i></button>
            </div>
        </form>
        <form id='data-detail-form' class="description-container">
        <div class="description">${data[i].description}</div></form>`;
    }
  }
});
//Today btn
function getFixMonth(month) {
  if (month < 10) {
    return (month = `0${month}`);
  }
}
const todayBtn = document.getElementById("today-btn");
let date = new Date();
let day = date.getDate();
let month = getFixMonth(date.getMonth() + 1);
let year = date.getFullYear();
let today = `${year}-${month}-${day}`;
todayBtn.addEventListener("click", async () => {
  const res = await fetch("http://localhost:8080/todolist");
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    if (data[i].duedate === today) {
      displayDataArea.innerHTML = `
            <form id='data-detail-form'>
            <div id='data-${i}' class='data-field'>
            <div class='id'>${data[i].id}</div>
            <div class="name">${data[i].name}</div>
            <div class="assigned-to">${data[i].assignedto}</div>
            <div class="due-date">${data[i].duedate}</div>
            <div class="status">${data[i].status}</div>
                <button type="button" class="button update" id="${data[i].id}"><i class="fas fa-edit"></i></button>
                <button type="button" class="button delete" id="${data[i].id}"><i class="far fa-trash-alt"></i></button>
                <button type="button" class="button plus" id="${data[i].id}"><i class="far fa-plus-square"></i></button>
                </div>
            </form>
            <form id='data-detail-form' class="description-container">
            <div class="description">${data[i].description}</div></form>`;
    }
  }
});
//get function
let show = false;
async function showData() {
  const res = await fetch("http://localhost:8080/todolist");
  const data = await res.json();
  if (!show) {
    for (let i = 0; i < data.length; i++) {
      displayDataArea.innerHTML += `
          <form id='data-detail-form'>
          <div id='data-${i}' class='data-field'>
          <div class='id'>${data[i].id}</div>
          <div class="name">${data[i].name}</div>
          <div class="assigned-to">${data[i].assignedto}</div>
          <div class="due-date">${data[i].duedate}</div>
          <div class="status">${data[i].status}</div>
              <button type="button" class="button update ${data[i].id}" id="${data[i].id}"><i class="fas fa-edit"></i></button>
              <button type="button" class="button delete ${data[i].id}" id="${data[i].id}"><i class="far fa-trash-alt"></i></button>
              <button type="button" class="button plus ${data[i].id}" id="${data[i].id}"><i class="far fa-plus-square"></i></button>
              </div>
          </form>
          <form id='data-detail-form' class="description-container ${data[i].id}">
          <div class="description ">${data[i].description}</div></form>`;
    }
    show = true;
  }
  //open button

  const openes = document.querySelectorAll(".button");
  const descriptiones = document.querySelectorAll(".description-container");
  openes.forEach(function (btn) {
    if (btn.classList.contains("plus")) {
      btn.addEventListener("click", function () {
        descriptiones.forEach(function (description) {
          if (description.classList.contains(btn.id)) {
            description.classList.toggle("show-text");
          }
        });
      });
    }
  });

  //updateBtn
  const updateButtons = document.querySelectorAll(".button.update");
  for (let updateButton of updateButtons) {
    updateButton.addEventListener("click", () => {
      updateItem(updateButton.id);
    });
  }
  //deleteBtn
  const deleteButtons = document.querySelectorAll(".button.delete");
  for (let deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", () => {
      deleteItem(deleteButton.id);
    });
  }
}

//show listener
showButton.addEventListener("click", showData);

document.querySelector("#add-btn").addEventListener("click", () => {
  if (document.querySelector("#input-data-area").style.display === "none") {
    document.querySelector("#input-data-area").style.display = "flex";
  } else {
    document.querySelector("#input-data-area").style.display = "none";
  }
});

//add function
document
  .querySelector("#data-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const dataObj = {
      id: form.id.value,
      name: form.name.value,
      description: form.description.value,
      assignedto: form.assignedto.value,
      duedate: form.duedate.value,
      status: form.status.value,
    };

    const res = await fetch("http://localhost:8080/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    if (res.ok) {
      console.log(await res.json());
    }
    document.querySelector("#input-data-area").style.display = "none";
    show();
  });

//update function
const updateItem = async (id) => {
  let res = await fetch("http://localhost:8080/todolist");
  let selectedItem = {};
  let updatedItem = {};
  let resArr = await res.json();
  for (let resItem of resArr) {
    if (resItem.id === id) {
      selectedItem = { ...resItem };
    }
  }
  document.querySelector("#display-data-area").innerHTML = `
    <form id='update-form'>
    <input type='text' name='id' value="${selectedItem.id}">
    <input type='text' name='name' value="${selectedItem.name}">
    <input type='text' name='description' value="${selectedItem.description}">
    <input type='text' name='assignedto' value= "${selectedItem.assignedto}">
    <input type='text' name='duedate' value="${selectedItem.duedate}">
    <input type='text' name='status' value="${selectedItem.status}">
    <button class='button'>UPDATE</button>
    </form>
    `;
  document.querySelector("#update-form").addEventListener("submit", (event) => {
    event.preventDefault();
    updatedItem.id = event.target.id.value;
    updatedItem.name = event.target.name.value;
    updatedItem.description = event.target.description.value;
    updatedItem.assignedto = event.target.assignedto.value;
    updatedItem.duedate = event.target.duedate.value;
    updatedItem.status = event.target.status.value;
    performUpdate(updatedItem);
  });
  show = false;
};

const performUpdate = async (data) => {
  let dataObj = {
    id: data.id,
    name: data.name,
    description: data.description,
    assignedto: data.assignedto,
    duedate: data.duedate,
    status: data.status,
  };
  const url = "http://localhost:8080/todolist/" + data.id;
  let res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataObj),
  });
  if (res.ok) {
    document.querySelector("#display-data-area").innerHTML = `
          <div>Item ${data.id} is updated</div>
          <div id='data-${data.id}' class='data-field updated-item'>
          <div class='id'>ID: ${data.id}</div>
          <div class="name">Name: ${data.name}</div>
          <div class="description">Description: ${data.description}</div>
          <div class="assigned-to">Assigned To: ${data.assignedto}</div>
          <div class="due-date">DUE Date: ${data.duedate}</div>
          <div class="status">Status: ${data.status}</div>
          </div>
        `;
  }
};

const deleteItem = async (id) => {
  const url = "http://localhost:8080/todolist/" + id;
  const setting = {
    method: "DELETE",
  };
  const res = await fetch(url, setting);
  if (res.ok) {
    document.querySelector("#display-data-area").innerHTML =
      "<div id='deleteditem'> item: " + id + " is deleted.</div>";
  }
  show = false;
};

//Calendar
new Calendar({
  id: "#color-calendar",
});
