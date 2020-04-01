function solve() {
  let button = document.getElementById("send");
  let sendInfo = document.getElementById("chat_input");
  let chatField = document.getElementById("chat_messages");

  button.addEventListener("click", e => {
    let newMessage = document.createElement("div");
    newMessage.innerHTML = sendInfo.value;
    newMessage.classList.add("message", "my-message");
    chatField.appendChild(newMessage);
    sendInfo.value = "";
  });
}
