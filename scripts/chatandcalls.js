let messagerForm = document.querySelector(".msger-inputarea");
let messangerInput = document.querySelector(".msger-input");
let msgerChat = document.querySelector(".msger-chat");

let bot_msgs = [
 
  "Talk is cheap, i will show you some code tommorrow",
  "Yes, it's completed? need to work on styling",
  "please dont , disturb me, my flow is missing, i will complete it as early as possible!",
  "Don't Bother me! i am on holiday" ,


];

// Icons from www.flaticon.com
let botImg = "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg";
let personImg = "https://as2.ftcdn.net/jpg/01/26/63/11/500_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg";
let botName = "Suraj";
let personName = "User";

messagerForm.addEventListener("submit", event => {
  event.preventDefault();

  let msgText = messangerInput.value;
  // if (!msgText) return;

  appendMessage(personName, personImg, "right", msgText);
  messangerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
 //appending this msgHTML as an message in the chatbox
  let msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  let r = random(0, bot_msgs.length - 1);
  let msgText = bot_msgs[r];
  let delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(botName, botImg, "left", msgText);
  }, delay*5);
}


function formatDate(date) {
  let h = date.getHours();
  let m = date.getMinutes();

  return `${h}:${m}`;
}
//random func
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
