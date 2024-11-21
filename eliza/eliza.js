// Get references to the HTML elements that display the input box, ELIZA messages and user messages [1]
// These will be used to alter specific elements in the UI.
const textbox = document.getElementById("textbox"); // Input field.
const userConversation = document.getElementById("user"); // Area to display the user's messages.
const elizaConversation = document.getElementById("eliza"); // Area to display the chatbot's messages.


/**
 * Generates ELIZA's response based on the user's input message.
 * - Input: A `message` string representing the user's input.
 * - Process:
 *   1. Checks for specific keywords in the input.
 *   2. Responds based on the keyword match.
 *   3. If no specific match is found, provides a default response.
 *   4. Displays the response in the chat window.
 * - Output: Returns the generated response string.
 */
function getResponse(message) {
    // Initialize response variable
    let response = "";

     // Check for specific keywords in the user's message using includes(), changing the response based on the keyword.
     if (message.includes("how")) {
        response = "I want to understand you better.";
    } else if (message.includes("feeling")) {
        response = "Why do you feel that way?";
    } else if (message.includes("help")) {
        response = "How can I help you?";
    } else if (message.includes("sad")) {
        response = "I'm sorry to hear that. What's been bothering you?";
    } else if (message.includes("happy")) {
        response = "Great! What has been making you happy?";
    } else if (message.includes("why")) {
        response = "Can you explain more about your thoughts?";
    } else if (message.includes("yes")) {
        response = "Can you tell me more about why you agree?";
    } else if (message.includes("no")) {
        response = "What makes you feel that way?";
    } else {
        response = "Tell me more about that."; // Default response
    }

    // Display ELIZA's messages in the conversation area by using innerHTML. [3]
    if (elizaConversation) {
        elizaConversation.innerHTML += `<p class="elizamessage">${response}</p>`;
    }

    // Return the generated response.
    return response;
}

/**
 * Processes the user's message, removing whitespaces and converting to lowercase.
 * - Input: The text entered in the `textbox` input field.
 * - Process:
 *   1. Converts the input to lowercase for case-insensitive matching.
 *   2. Trims any whitespaces from the input.
 *   3. Displays the user's processed message in the conversation area.
 *   4. Clears the input field after processing.
 * - Output: Returns the cleaned input string.
 */
function processMessage() {
    // Get the user's message and convert it to lowercase for easier processing. [4]
    const rawMessage = textbox.value.toLowerCase();

    // Trim any whitespaces from the beginning and end of the message using trim(). [5]
    const processedMessage = rawMessage.trim();

    // Display the user's message in the conversation area by using innerHTML. [3]
    if (userConversation) {
        userConversation.innerHTML += `<p class="usermessage">${processedMessage}</p>`;
    }

    // Clear the input field after user sends message.
    textbox.value = "";

    // Return processed user message.
    return processedMessage;
}

/**
 * Handles the user's message, generating a response from ELIZA.
 * - Input: None (internally calls `processMessage()`).
 * - Process:
 *   1. Processes the user's input to clean and display it in the chatbox.
 *   2. Generates ELIZA's response by analyzing the processed input, displaying the response in the chatbox.
 * - Output: None (updates the conversation flow dynamically).
 */
function handleUserMessage() {
    // Store the user's message in a variable.
    const userMessage = processMessage();

    // Get ELIZA's response based on the user's message.
    getResponse(userMessage);
}



/* References:
 * [1] Getting references to elements in the UI:             https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 * [2] Using includes() to check for a substring:            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * [3] Displaying messages by targeting an element:          https://chatgpt.com/c/673f83fc-78e4-800f-b848-6b7feb41cd93
 * [4] Storing a value fetched using getElementById:         https://chatgpt.com/c/673f5b54-5f5c-800f-ac7b-4b14a7521f8d
 * [5] Removing whitespaces from a string:                   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
*/
