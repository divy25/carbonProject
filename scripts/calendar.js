todoMain();

function todoMain() {
  const DEFAULT_OPTION = "Choose category";
// get elements
var inputElem = document.getElementById("inputTodo");
var inputElem2 = document.getElementsByTagName("input")[1];
var dateInput = document.getElementById("dateInput");
var timeInput = document.getElementById("timeInput");
var addButton = document.getElementById("addBtn");
var sortButton = document.getElementById("sortBtn");
var selectElem = document.getElementById("categoryFilter");
var todoList = [];

// add event listeners
addButton.addEventListener("click", addEntry);
sortButton.addEventListener("click", sortEntry);
selectElem.addEventListener("change", filterEntries);
    
  
  load();
  renderRows();
  updateSelectOptions();



  function addEntry(event) {

    let inputValue = inputElem.value;
    inputElem.value = "";

    let inputValue2 = inputElem2.value;
    inputElem2.value = "";

    let dateValue = dateInput.value;
    dateInput.value = "";

    let timeValue = timeInput.value;
    timeInput.value = "";

    let obj = {
      id: uuid(),
      todo: inputValue,
      category: inputValue2,
      date: dateValue,
      time: timeValue,
      done: false,
    };

    rendowRow(obj);

    todoList.push(obj);

    save();

    updateSelectOptions();



  }

  function filterEntries() {
    let selection = selectElem.value;

    // Empty the table, keeping the first row
    let trElems = document.getElementsByTagName("tr");
    for(let i = trElems.length - 1; i > 0; i--){
      trElems[i].remove();
    }

    if (selection == DEFAULT_OPTION) {
      todoList.forEach( obj => rendowRow(obj) );
    } else {
      todoList.forEach( obj => {
        if( obj.category == selection ){
          rendowRow(obj);
        }
      });
    }
  }

  function updateSelectOptions() {
    let options = [];

    todoList.forEach((obj)=>{
      options.push(obj.category);
    });

    let optionsSet = new Set(options);

    // empty the select options
    selectElem.innerHTML = "";

    let newOptionElem = document.createElement('option');
    newOptionElem.value = DEFAULT_OPTION;
    newOptionElem.innerText = DEFAULT_OPTION;
    selectElem.appendChild(newOptionElem);

    for (let option of optionsSet) {
      let newOptionElem = document.createElement('option');
      newOptionElem.value = option;
      newOptionElem.innerText = option;
      selectElem.appendChild(newOptionElem);
    }


  }

  function save() {
    let stringified = JSON.stringify(todoList);
    localStorage.setItem("todoList", stringified);
  }

  function load() {
    let retrieved = localStorage.getItem("todoList");
    todoList = JSON.parse(retrieved);
    //console.log(typeof todoList)
    if (todoList == null)
      todoList = [];
  }

  function renderRows() {
    todoList.forEach(todoObj => {


      // let todoEntry = todoObj["todo"];
      // let key = "category";
      // let todoCategory = todoObj[key];
      rendowRow(todoObj);
    })
  }
  draw(todoList.map(obj=>{
      return {
          title:obj.todo,
          start:obj.date,
      }
  }))

  function rendowRow({ todo: inputValue, category: inputValue2, id, date, time, done }) {
    // add a new row

    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);

    // checkbox cell
    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.addEventListener("click", checkboxClickCallback, false);
    checkboxElem.dataset.id = id;
    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1);

    // date cell
    let dateElem = document.createElement("td");
    let dateObj = new Date(date);
    let formattedDate = dateObj.toLocaleString("en-GB", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    dateElem.innerText = formattedDate;
    trElem.appendChild(dateElem);

    // time cell
    let timeElem = document.createElement("td");
    timeElem.innerText = time;
    trElem.appendChild(timeElem);

    // to-do cell
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputValue;
    trElem.appendChild(tdElem2);

    // category cell
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = inputValue2;
    tdElem3.className = "categoryCell";
    trElem.appendChild(tdElem3);

    // delete cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    spanElem.dataset.id = id;
    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);

    checkboxElem.type = "checkbox";
    checkboxElem.checked = done;
    if (done) {
      trElem.classList.add("strike");
    } else {
      trElem.classList.remove("strike");
    }


    function deleteItem() {
      trElem.remove();
      updateSelectOptions();

      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == this.dataset.id)
          todoList.splice(i, 1);
      }
      save();
    }

    function checkboxClickCallback() {
      trElem.classList.toggle("strike");
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == this.dataset.id)
          todoList[i]["done"] = this.checked;
      }
      save();
    }
  }


// i feel like , this uuid is more faster and efficient
function uuid(){
  var sum="";
  var d = new Date();
  var h=d.getHours();
  var m=d.getMinutes(); 
  var s=d.getSeconds();
  sum=d+""+h+""+ m+""+s;
  return sum;
}

  function sortEntry() {
    todoList.sort((a, b) => {
      let aDate = Date.parse(a.date);
      let bDate = Date.parse(b.date);
      return aDate - bDate;
    });

    save();

    let trElems = document.getElementsByTagName("tr");
    for(let i = trElems.length - 1; i > 0; i--){
      trElems[i].remove();
    }

    renderRows();
  }

}
function draw(data){

        var calendarEl = document.getElementById('calendar');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          initialDate: '2020-12-07',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          events: data
       
      });
      calendar.render();
}
