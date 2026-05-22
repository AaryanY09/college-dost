// const socket = io();

// let currentChatId = null;
// let currentMentor = null;

// const chatName = document.getElementById('chat-name');
// const chatMessages = document.getElementById('chat-messages');

// // CLICK MENTOR
// function openChat(prn, name) {
//   currentMentor = prn;
//   chatName.innerText = name;

//   // Redirect to backend route (existing logic)
//   window.location.href = `/chats/start/${prn}`;
// }

// // SEND MESSAGE
// function sendMessage() {
//   const msgInput = document.getElementById('messageInput');
//   const fileInput = document.getElementById('fileInput');

//   if (!msgInput.value && !fileInput.files.length) return;

//   const data = {
//     chatId: window.chatId, // already from backend chat page
//     senderPrn: window.userPrn,
//     message: msgInput.value,
//     fileUrl: null
//   };

//   socket.emit('message', data);

//   addMessage(data, true);

//   msgInput.value = "";
//   fileInput.value = "";
// }

// // ADD MESSAGE UI
// function addMessage(data, isOwn) {
//   const div = document.createElement('div');
//   div.classList.add('message');
//   div.classList.add(isOwn ? 'sent' : 'received');

//   if (data.message) {
//     div.innerHTML += `<p>${data.message}</p>`;
//   }

//   chatMessages.appendChild(div);
// }

// // RECEIVE MESSAGE
// socket.on('chat-message', (data) => {
//   addMessage(data, false);
// });

// // SEARCH
// function filterMentors() {
//   const input = document.getElementById('searchText').value.toLowerCase();
//   const items = document.querySelectorAll('.mentor-item');

//   items.forEach(item => {
//     const text = item.innerText.toLowerCase();
//     item.style.display = text.includes(input) ? "" : "none";
//   });
// }