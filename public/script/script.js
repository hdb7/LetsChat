//client-side
const site = "http://localhost:3000";
const socket = io(site);
const msgForm = document.getElementById('send-container');
const msgInput= document.getElementById('msg-input');
const msgContainer = document.getElementById('msg-container');
const username = prompt("Enter username: ");
appendMsg("You joined !");
socket.emit("new-user", username);
//catch what server is sending
socket.on("chat-msg", (data)=>{
  //console.log(data);
  appendMsg(`${data.username}: ${data.msg}`);
});
socket.on("user-connected", (username)=>{
  appendMsg(`${username} connected`);
});
socket.on("user-disconnected", (username)=>{
  appendMsg(`${username} disconnected`);
});
//send msg to server
msgForm.addEventListener('submit',(e)=>{
  e.preventDefault();     //stop refreshing page
  const msg = msgInput.value;
  appendMsg(`You: ${msg}`); // display ur msg
  socket.emit('send-chat-msg', msg);  //send msg back to server
  msgInput.value = " "; //clear the text when button is press
})
//display all the sended messages 
function appendMsg(msg){
  const msgElem = document.createElement('div');
  msgElem.innerText = msg;
  msgContainer.append(msgElem);
}