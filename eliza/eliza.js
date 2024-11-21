// Get references to the input box, send button, and conversation area. [1]
// These elements are selected from the DOM using their respective IDs or class selectors.
const textbox = document.getElementById("textbox"); // Input field where the user types their message.
const sendButton = document.getElementById("send"); // Button to send the user's input to the chatbot.
const conversationArea = document.querySelector(".conversation"); // Area where the conversation (user and ELIZA messages) is displayed.


// Function to add a message to the conversation area
function addMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    if (sender === "user") {
        messageDiv.style.textAlign = "right"; // Align user messages to the right
    }
    messageDiv.innerHTML = `<p>${text}</p>`;
    conversationArea.appendChild(messageDiv);
    conversationArea.scrollTop = conversationArea.scrollHeight; // Scroll to the latest message
}

// Function to simulate ELIZA's response
function getElizaResponse(userInput) {
    if (userInput.toLowerCase().includes("how")) {
        return "I'm just a chatbot, but I want to understand you better.";
    } else if (userInput.toLowerCase().includes("feeling")) {
        return "Why do you feel that way?";
    } else if (userInput.trim() === "") {
        return "Please say something so I can respond.";
    }
    return "Tell me more about that.";
}

// Function to handle the send button click
function handleSend() {
    const userInput = textbox.value.trim();
    if (userInput) {
        addMessage("user", userInput); // Add user's message
        const response = getElizaResponse(userInput); // Get ELIZA's response
        setTimeout(() => addMessage("eliza", response), 1000); // Simulate response delay
    }
    textbox.value = ""; // Clear the textbox
}

// Add event listener to the send button
sendButton.addEventListener("click", handleSend);

// Add event listener for the Enter key in the input box
textbox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleSend();
    }
});

