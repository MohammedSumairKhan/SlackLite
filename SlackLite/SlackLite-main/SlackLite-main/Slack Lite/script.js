// Select DOM elements
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatArea = document.getElementById("chat-area");

// User avatar and username
const userAvatar = "https://via.placeholder.com/48"; // Replace with a dynamic or relevant avatar URL
const usernameText = "You"; // Replace with a dynamic username if available

// Function to create a new chat message
const createMessageElement = (messageText) => {
    // Create the container div
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("flex", "items-start", "mb-4");

    // Add the avatar
    const avatar = document.createElement("img");
    avatar.src = userAvatar;
    avatar.alt = "User avatar";
    avatar.classList.add("w-12", "h-12", "rounded-full", "mr-4");

    // Add the message content
    const messageContent = document.createElement("div");

    // Add the username and timestamp
    const header = document.createElement("div");
    header.classList.add("flex", "items-center");

    const username = document.createElement("h3");
    username.classList.add("font-bold");
    username.textContent = usernameText;

    const timestamp = document.createElement("span");
    timestamp.classList.add("ml-2", "text-sm", "text-gray-500");
    const currentTime = new Date();
    timestamp.textContent = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    header.appendChild(username);
    header.appendChild(timestamp);

    // Add the message text
    const messageTextElement = document.createElement("p");
    messageTextElement.classList.add("mt-1");
    messageTextElement.textContent = messageText;

    // Append header and text to message content
    messageContent.appendChild(header);
    messageContent.appendChild(messageTextElement);

    // Append avatar and content to the message container
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);

    return messageDiv;
};

// Event listener for sending messages
const sendMessage = () => {
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const messageElement = createMessageElement(messageText);
        chatArea.appendChild(messageElement); // Add the message to the chat area
        chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the bottom
        messageInput.value = ""; // Clear the input field
    }
};

// Event listeners for sending messages
sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
