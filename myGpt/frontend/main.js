import bot from './assets/bot.svg';
import user from './assets/user.svg';

const chatContainer = document.querySelector('#chat_container');
const form = document.querySelector("#chatForm");

let loadInterval;
function loader(element){
  element.textContent = "";
  loadInterval = setInterval(()=>{
    element.textContent = element.textContent + ".";
    if(element.textContent === "...."){
      element.textContent = "";
      
    }
  }, 300)
}
function typeText(element, text){
  let index = 0;
  let interval = setInterval(()=>{
    if(index < text.length){
      element.innerHTML = element.innerHTML + text.charAt(index);
      index++
    }
    else{
      clearInterval(interval)
    }
  },20)
}

function generateUniqueId(){
  const timeStamp = Date.now();
  const randomNo = Math.random();
  const hexaDecimalString = randomNo.toString(16);
  return `id-${timeStamp}-${randomNo}-${hexaDecimalString}` 
}


function chatStrip (isAi, value, uniqueId){
  return (
    ` 
      <div class = "wrapper ${isAi && 'ai'}">
      <div class = "chat">
        <div class = "profile">
        <img
          src = "${isAi ? bot : user}"
          alt = "${isAi ? 'bot' : 'user'}"
          />
        </div>
        <div class= "message" id = ${uniqueId}>${value}</div>
      </div>
      </div>
    `
  )
}
async function handleSubmit(e){
  e.preventDefault();
  const data = new FormData(form);
  // for user
  chatContainer.innerHTML += chatStrip(false, data.get('prompt'));
   
  form.reset();

  // for bot
  const uniqueId = generateUniqueId()
  chatContainer.innerHTML += chatStrip(true, " ", uniqueId);

  chatContainer.scrollTop = chatContainer.scrollHeight;

  const messageDiv = document.getElementById(uniqueId);
  loader(messageDiv);

  const response = await fetch('http://localhost:3001', {
    method : "POST",
    headers : {
      "content-type" : "application/json"
    },
    body : JSON.stringify({
      prompt : data.get('prompt')
    })
  });
  clearInterval(loadInterval);
  messageDiv.innerHTML = "";
  if(response.ok){
    const data = await response.json();
    const parsedData = data.bot.trim();
    typeText(messageDiv, parsedData);

  }
  else{
    const err = await response.text();
    messageDiv.innerHTML = "something went wrong";
    alert(err)
  }


}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e)=>{
  if(e.keyCode=== 13){
    handleSubmit(e);
  }
})