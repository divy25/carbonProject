var sideBarClosed = true;

function toggleSidebar() {
  if (sideBarClosed) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "270px";
    document.getElementById("main").style.marginLeft = "270px";
    document.getElementById("main").style.width = "79%";
    document.getElementById("toggleBtn1").style.marginLeft = "-15px";
    document.getElementById("full__Logo").style.marginLeft = "-15px";
    document.getElementById("myFooter__bar").style.width = "50%";
    document.getElementById("myFooter__bar").style.marginLeft="220px";
    this.sideBarClosed = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("main").style.marginLeft = "85px";
    document.getElementById("main").style.width = "80%";
    document.getElementById("toggleBtn1").style.marginLeft = "0px";
    document.getElementById("full__Logo").style.marginLeft = "0px";
    document.getElementById("myFooter__bar").style.width = "60%";
    document.getElementById("myFooter__bar").style.marginLeft="20px";
    this.sideBarClosed = true;
  }
}

//function for clock

function renderTime(){
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    console.log(currentTime)
      // if(h>12){
      //   h=h-12;
      //   p="PM"
      // }
      // if(h<11 && m>59){
      //   p="PM"
      // }
      // if(h<12 && m<00){
      //   p="PM"
      // }
      // if(h==0){
      //     h=12;
      // }
      if(h<10){
          h='0'+h;
      }
      if(m<10){
        m='0'+m;
      }
      if(s<10){
        s='0'+s;
      }
    var myClock = document.getElementById("clockDisplay");
    myClock.textContent= h+" : "+m+" : "+s;
    myClock.innerHtml = h+":"+m+":"+s;
    setTimeout("renderTime()",1000);
}
renderTime();

/* Set the width of the panel to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

//side panel

function openNav() {
  
  document.getElementById("mySidepanel").style.width = "350px";
  
}
var openForOneSec=setTimeout("closeNav()",1000);
/*drop down usermenu*/


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function newTask(){
  document.getElementById("newTaskDropDown").classList.toggle("show");
}

function addNewTask(){
  document.getElementById("inputForNewTask").classList.toggle("show");
}

function goBack(){
  document.getElementById("inputForNewTask").classList.toggle("show");
}

function displayTasks(){
  // let localtaskname=localStorage.getItem("taskName");
  // let localdeadline=localStorage.getItem("deadline");
  // let localresponsible=localStorage.getItem("responsible");
  // if(localtaskname==null && localdeadline==null && localresponsible==null)
  // {
  //   localtaskname="";
  //   localdeadline="";
  //   localresponsible="";
  // }
  var name=document.getElementById("newTaskTextArea").value;
  var deadline=document.getElementById("deadLine").value;
  var responsible=document.getElementById("responsiblePerson").value;
  // localStorage.setItem("taskName",localtaskname+" "+name);
  // localStorage.setItem("deadline",localdeadline+" "+deadline);
  // localStorage.setItem("responsible",localresponsible+" "+responsible);
  var output=document.getElementById("taskAdder").innerHTML;
   output=output+`
    <div id="${name}" class="tasksTableContent">
      <input  class="checkBox" type="checkbox"/>
      <img onClick="taskDeleterOption(newTaskDeleteDropDown${name})" id="tasksIcon${name}" class="tasksIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/1024px-VisualEditor_-_Icon_-_Menu.svg.png"/>
      <div id="newTaskDeleteDropDown${name}" class="newTaskDeleteDropDown">
        <div onClick="taskDeleterFunc(${name})" id="deleteTask${name}" class="deleteTask">Delete task ?</div>
      </div>
      
      <div class="name">${name}</div>
      <div class="activity">December 28, 1:58pm</div>
      <div class="deadline">${deadline}</div>
      <div class="createdBy" style="display: flex;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAU9KXPynTtqeWYLQlJ9CRVULXthc2yNlRw&usqp=CAU"/>
          <div>User</div>
      </div>
      <div class="responsible" style="display: flex;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAU9KXPynTtqeWYLQlJ9CRVULXthc2yNlRw&usqp=CAU"/>
          <div>${responsible}</div>
      </div>
    </div>
      `;
  document.getElementById("taskAdder").innerHTML=output;
  document.getElementById("newTaskTextArea").value="";
  document.getElementById("deadLine").value="";
  document.getElementById("responsiblePerson").value="";
}

function taskDeleterOption(element){
  let id=element.getAttribute("id");
  document.getElementById(id).classList.toggle("show");
}

function taskDeleterFunc(element){
  element.remove();

}

function checkBoxCounter(){
  let checkBoxCounter=document.querySelectorAll('input[type="checkbox"]:checked').length;
 
  document.getElementById("checkedCounter").innerHTML=checkBoxCounter;
}

// function showTemplates(){
//   let name=localStorage.getItem("taskname");
//   let deadline=localStorage.getItem("deadline");
//   let responsible=localStorage.getItem("responsible");
//   let output=`
//   <div class="taskDisplayer" id="taskDisplayer">
//       <h4>Your Pending Tasks</h4>
//       <div>${name}</div>
//       <div>${deadline}</div>
//       <div>${responsible}</div>
//   </div>
//   `;
//   document.getElementById("taskTemplatesToggler").innerHTML=output;
//   document.getElementById("taskTemplatesToggler").classList.toggle("show");
// }

document.getElementById("newTaskIcon").addEventListener("click",newTask);
document.getElementById("newTask").addEventListener("click",newTask);
document.getElementById("addNewTask").addEventListener("click",addNewTask);
document.getElementById("goBack").addEventListener("click",goBack);
document.getElementById("addTaskBtn").addEventListener("click",displayTasks);
document.getElementById("applyBtn").addEventListener("click",checkBoxCounter);
// document.getElementById("allTemplates").addEventListener("click",showTemplates);


