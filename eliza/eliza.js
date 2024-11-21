// Get references to the input box, send button, and conversation area. [1]
// These will be used to alter specific elements in the UI.
const textbox = document.getElementById("textbox"); // Input field.
const sendButton = document.getElementById("send"); // Button to send the user's message.
const conversationArea = document.querySelector(".conversation"); // Area where the conversation is displayed.

// Store the user's message and convert it to lowercase for easier processing. [2]
const userMessage = textbox.value.toLowerCase();

// Send the message to the ELIZA Chatbot, returning a certain response based on the user's input. [3]
function sendMessage(message) {
    if (message.includes("how")) {
        return "I want to understand you better.";
    } else if (message.includes("feeling")) {
        return "Why do you feel that way?";
    } else if (message == "") {
        return "Is there anything you want to say?.";
    }
    return "Tell me more about that.";
}

// Return the chatbot's response to the conversation area.
elizaReponse = sendMessage(userMessage);



/* References:
[1] Getting references to elements in the UI:         https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
[2] Storing a value fetched using getElementById:     https://chatgpt.com/c/673f5b54-5f5c-800f-ac7b-4b14a7521f8d
[3] Using includes() to check for a substring:        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
