// Get references to the input box, send button, and conversation area. [1]
// These will be used to alter specific elements in the UI.
const textbox = document.getElementById("textbox"); // Input field.
const sendButton = document.getElementById("send"); // Button to send the user's message.
const userConversation = document.getElementById("user"); // Area to display the user's messages.


// Get ELIZA's response based on the user's input.
function getResponse(message) {
    let response = ""; // Initialize response

    // Check for specific keywords in the user's message. [2]
    if (message.includes("how")) {
        response = "I want to understand you better.";
    } 
    else if (message.includes("feeling")) {
        response = "Why do you feel that way?";
    } 
    else if (message.trim() === "") { // Handle different types of empty messages, using trim() to remove whitespaces (in case message is blank, or only has spaces). [3]
        return "Is there anything you want to say?";
    } 
    else {
        response = "Tell me more about that."; // Default response
    }

    return response;
}

function processMessage() {
    // Get the user's message and convert it to lowercase for easier processing. [4]
    const rawMessage = textbox.value.toLowerCase();

    // Trim whitespace from the beginning and end of the message. [3]
    const processedMessage = rawMessage.trim();

    // Display the user's message in the conversation area. [5]
    if (userConversation) {
        userConversation.innerHTML += `<p class="usermessage">${processedMessage}</p>`;
    }

    // Clear the input field after user sends message.
    textbox.value = "";

    // Return processed user message.
    return processedMessage;
}

function handleUserMessage() {
    // Store the user's message in a variable.
    const userMessage = processMessage();
    console.log(userMessage);
    // Get ELIZA's response based on the user's message.
    const elizaResponse = getResponse(userMessage);
    console.log(elizaResponse);
}



/* References:
 * [1] Getting references to elements in the UI:             https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 * [2] Using includes() to check for a substring:            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * [3] Using trim() to remove whitespace:                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 * [4] Storing a value fetched using getElementById:         https://chatgpt.com/c/673f5b54-5f5c-800f-ac7b-4b14a7521f8d
 * [5] Displaying messages by targeting an element:          https://chatgpt.com/c/673f83fc-78e4-800f-b848-6b7feb41cd93
*/
