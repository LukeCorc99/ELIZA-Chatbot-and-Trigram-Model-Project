// Get references to the HTML elements that display the input box and messages. [1]
// These will be used to alter specific elements in the UI.
const textbox = document.getElementById("textbox"); // Input field.
const conversation = document.getElementById("conversation"); // Conversation area.


/**
 * Generates ELIZA's response based on the user's input message.
 * - Input: A `message` string representing the user's input.
 * - Process:
 *   1. Checks for specific keywords in the input.
 *   2. Selects response based on the keyword category.
 *   3. Randomly selects a response from the category's response list.
 *   4. Provides a default response if no specific match is found.
 * - Output: Returns the generated response string.
 */
function getResponse(message) {
    // Keyword categories and their corresponding responses.
    const keywordCategories = [
        {
            keywords: ["how", "why", "yes", "no"],
            responses: [
                "I want to understand you better.",
                "Can you elaborate on that?",
                "Why do you think that is?",
                "Tell me more about your thoughts."
            ]
        },
        {
            keywords: ["hi", "hello", "hey"],
            responses: [
                "Hello! How are you feeling today?",
                "Hi there! What's on your mind?",
                "Hey! How can I help you today?",
                "Hi! What brings you here today?"
            ]
        },
        {
            keywords: ["bye", "goodbye", "see you"],
            responses: [
                "Goodbye! Take care.",
                "See you later! Stay well.",
                "Bye for now! Hope to chat again soon.",
                "Goodbye! Let me know if you need me again."
            ]
        },
        {
            keywords: ["feeling", "emotion", "mood"],
            responses: [
                "Why do you feel that way?",
                "Can you describe your emotions?",
                "What has been affecting your mood?",
                "Tell me more about how you're feeling."
            ]
        },
        {
            keywords: ["help", "assist", "support"],
            responses: [
                "How can I help you?",
                "What kind of support do you need?",
                "I'm here to assist. What's going on?",
                "Tell me what you need help with."
            ]
        },
        {
            keywords: ["sad", "bad", "unhappy", "depressed"],
            responses: [
                "I'm sorry to hear that. What's been bothering you?",
                "It sounds like you're feeling down. Can you share more?",
                "I'm here for you. What's on your mind?",
                "What has been making you feel this way?"
            ]
        },
        {
            keywords: ["happy", "good", "great", "excited"],
            responses: [
                "Great! What has been making you happy?",
                "That's wonderful! Tell me more about the good things happening.",
                "It's nice to hear that! What's been exciting for you?",
                "Happiness is great! What's the reason behind your joy?"
            ]
        },
        {
            keywords: ["angry", "mad", "furious", "upset"],
            responses: [
                "I see you're upset. What happened?",
                "Can you share why you're feeling this way?",
                "It’s okay to feel angry. What's been bothering you?",
                "What’s made you feel so upset?"
            ]
        },
        {
            keywords: ["confused", "lost", "unsure", "uncertain"],
            responses: [
                "What’s making you feel unsure?",
                "Can you explain what’s confusing you?",
                "Let’s try to clarify things. What’s unclear to you?",
                "It’s normal to feel this way. Tell me more about it."
            ]
        }
    ];

    // Check for specific keywords in the user's message and return the corresponding response.
    for (const category of keywordCategories) {
        if (containsKeyword(category.keywords, message)) {
            // Randomly select one response from the list of responses. [2]
            return category.responses[Math.floor(Math.random() * category.responses.length)];
        }
    }

    // Default response if no keywords match
    return "Tell me more about that.";
}


/**
 * Checks if a keyword exists in the message. Iterates through the keywords array and uses the includes() method to check for a match. [3]
 * - Input: 
 *   - `keywords`: An array of strings representing potential keywords.
 *   - `message`: A string representing the user's input message.
 * - Process:
 *   1. Iterates through the list of keywords.
 *   2. Uses the `includes()` method to check if each keyword exists in the message.
 * - Output: Returns `true` if a keyword is found, otherwise `false`.
 */
function containsKeyword(keywords, message) {
    // Iterates through the selected keywords array.
    for (let i = 0; i < keywords.length; i++) {
        // Check for specific keywords in the user's message.
        if (message.includes(keywords[i])) {
            return true; // Keyword match found.
        }
    }
    return false; // No match found.
}


/**
 * Processes the user's input, removing whitespaces and converting it to lowercase, while also displaying the user's message and ELIZA's response.
 * - Input: The text entered in the `textbox` input field.
 * - Process:
 *   1. Extracts the user's message from the input field.
 *   2. Trims any whitespaces from the input.
 *   3. Displays the user's processed message in the conversation area.
 *   4. Converts the input to lowercase for case-insensitive matching.
 *   5. Clears the input field after processing.
 *   6. Retrieves ELIZA's response based on the user's message.
 *   7. Displays ELIZA's response in the conversation area.
 *   8. Scrolls to the bottom of the conversation area.
 * - Output: Updates the conversation area with the user's message and ELIZA's response.
 */
function processMessages() {
    // Get the user's message from the input field. [4]
    const rawMessage = textbox.value;

    // Trim any whitespace from the beginning and end of the message using trim(). [5]
    const trimmedMessage = rawMessage.trim();

    // Display the user's message in the conversation area.
    appendMessage(trimmedMessage, "usermessage");

    // Convert the user's message to lowercase to make it case-insensitive.
    const processedMessage = trimmedMessage.toLowerCase();

    // Clear the input field after user sends message.
    textbox.value = "";

    // Get ELIZA's response based on the user's message.
    const elizaResponse = getResponse(processedMessage);

    // Display ELIZA's response in the conversation area.
    appendMessage(elizaResponse, "elizamessage");

    // Scroll to the bottom of the conversation area. [6]
    conversation.scrollTop = conversation.scrollHeight;
}


/**
 * Display messages in the conversation box, using both createElement and appendChild methods. [7]
 * - Input:
 *   - `content`: A string representing the message content.
 *   - `className`: A string representing the CSS class name to style the message.
 * - Process:
 *   1. Creates a new paragraph element for the message.
 *   2. Sets the class name of the element for styling.
 *   3. Assigns the sender's name and message text to the element's content.
 *   4. Appends the element to the conversation area in the UI.
 * - Output: Updates the UI to include the new message.
 */
function appendMessage(content, className) {
    // Create a new paragraph element to display the message.
    const messageElement = document.createElement("p");

    // Set the class name for the message element to style it accordingly.
    messageElement.className = className;

    // Set the text content of the message element to include the name and message.
    if (className === "usermessage") {
        messageElement.textContent = "You: " + content;
    } else {
        messageElement.textContent = "ELIZA: " + content;
    }

    // Append the message element to the conversation area.
    conversation.appendChild(messageElement);
}


// Triggers the handleUserMessage() function when the user presses enter. [8]
textbox.addEventListener("keydown", function(event) {
    // Check if the key pressed is enter, process the message if it is.
    if (event.key === "Enter") {
        processMessages() 
    }
});

// Function to hide the intro screen when the user clicks the "Start Chatting" button in the user interface.
function startChat() {
    // Get the introductory section element.
    const intro = document.getElementById("intro");
    // Hide the introductory section when the user presses the button. [9]
    intro.style.display = "none"; 

     // Get the main program element.
    const mainProgram = document.getElementById("container");
    // Display the main program when the user presses the button. [9]
    mainProgram.style.display = "block";
}




/* References:
 * [1] Getting references to elements in the UI:             https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 * [2] Selecting a random element of an array:               https://chatgpt.com/share/67467bd7-19e0-800f-a5b6-784d3bbc2724
 * [3] Using includes() to check for a substring:            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * [4] Storing a value fetched using getElementById:         https://chatgpt.com/c/673f5b54-5f5c-800f-ac7b-4b14a7521f8d
 * [5] Removing whitespaces from a string:                   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 * [6] Scrolling to the bottom of an element:                https://stackoverflow.com/questions/75059290/scrolltop-to-follow-bottom-of-the-page
 * [7] Appending a child element to a parent element:        https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild         
 * [8] Triggering an event on key press (Enter key):         https://www.w3resource.com/javascript-exercises/event/javascript-event-handling-exercise-9.php  
 * [9] Hiding an element by changing its display property:   https://allyjs.io/tutorials/hiding-elements.html
*/
