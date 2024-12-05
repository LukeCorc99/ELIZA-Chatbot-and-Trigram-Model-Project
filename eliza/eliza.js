// Get references to the HTML elements that display the input box and messages. [1]
// These will be used to alter specific elements in the UI.
const textbox = document.getElementById("textbox"); // Input field.
const conversation = document.getElementById("conversation"); // Conversation area.

/**
 * Reflects the user's input by replacing certain words with corresponding reflections. [2]
 * 
 * - Input: A `text` string representing the user's input.
 * 
 * - Process:
 *   1. Splits the input string into individual words.
 *   2. Replaces specific words using a reflections object (for example, "I" becomes "you").
 *   3. Reassembles the transformed words into a single string.
 * 
 * - Output: Returns the transformed string with reflected words.
 */
function reflectWord(text) {
    // Reflections object for word replacements.
    const reflections = {
        "I": "you",
        "me": "you",
        "my": "your",
        "am": "are",
        "i'd": "you would",
        "i've": "you have",
        "i'll": "you will",
        "you've": "I have",
        "you'll": "I will",
        "you": "me",
        "your": "my",
        "yours": "mine",
        "are": "am"
    };

    // Split the input text into words.
    const words = text.toLowerCase().split(" ");

    // Replace words using the reflections object.
    const reflectedWords = words.map(word => reflections[word] || word);

    // Join the words back into a string.
    return reflectedWords.join(" ");
}


/**
 * Generates ELIZA's response based on the user's input message.
 * 
 * - Input: A `message` string representing the user's input.
 * 
 * - Process:
 *   1. Iterates through the `patternCategories` to match the user's input with a pattern using pattern matching.
 *   2. If a match is found:
 *      - Extracts relevant parts of the input using the `match()` function.
 *      - Applies the `reflectWord` function to convert particular words to their reflections.
 *      - Selects a random response from the corresponding pattern's responses.
 *      - Replaces placeholders (such as `{1}`) with the captured and reflected text.
 *   3. If no pattern matches are found, checks for keywords in the user input from `keywordCategories`.
 *   4. If keywords are found, selects a random response associated with that keyword.
 *   5. If no matches or keywords are found, returns a default response.
 * 
 * - Output: Returns the generated response string.
 */
function getResponse(message) {
    // Patterns with corresponding responses. [2]
    const patternCategories = [
        {
            pattern: /I need (.*)/i,
            responses: [
                "Why do you think {1} is necessary?",
                "What would change for you if you had {1}?",
                "How do you feel when you don't have {1}?"
            ]
        },
        {
            pattern: /I am (.*)/i,
            responses: [
                "Why do you believe you are {1}?",
                "How does being {1} impact your thoughts or actions?",
                "What led you to realize you are {1}?"
            ]
        },
        {
            pattern: /I feel (.*)/i,
            responses: [
                "What makes you feel {1}?",
                "How often do you feel {1}?",
                "How does feeling {1} influence your decisions?"
            ]
        },
        {
            pattern: /I want (.*)/i,
            responses: [
                "What would achieving {1} mean to you?",
                "Why is {1} important to you?",
                "How would your life be different if you had {1}?"
            ]
        },
        {
            pattern: /I love (.*)/i,
            responses: [
                "What do you love about {1}?",
                "How does {1} make you feel?",
                "Have you always loved {1}?"
            ]
        },
        {
            pattern: /I hate (.*)/i,
            responses: [
                "What do you hate about {1}?",
                "How does {1} make you feel?",
                "Have you always hated {1}?"
            ]
        },
    ];
    
    

    // Keyword categories and their corresponding responses.
    const keywordCategories = [
        {
            keywords: ["how", "when", "yes", "no"],
            responses: [
                "I want to understand you better.",
                "Can you elaborate on that?",
                "Tell me more about your thoughts."
            ]
        },
        {
            keywords: ["hi", "hello", "hey"],
            responses: [
                "Hello! How are you feeling today?",
                "Hi there! What's on your mind?",
                "Hey! How can I help you today?",
            ]
        },
        {
            keywords: ["bye", "goodbye", "see you"],
            responses: [
                "Goodbye! Take care.",
                "See you later! Stay well.",
                "Bye! Have a great day."
            ]
        }
    ];

    // Check if the message matches any pattern.
    for (const category of patternCategories) {
        // Check if the message matches the pattern using a regular expression. [3]
        const match = message.match(category.pattern);
        if (match) {
            // Apply reflection to the relevant parts of the user input.
            const reflectedWord = reflectWord(match[1]);
            // Randomly select a response from the list of responses. [4]
            const response = category.responses[Math.floor(Math.random() * category.responses.length)]; 
            // Replace placeholder with the reflected word.
            return response.replace("{1}", reflectedWord);
        }
    }

    // Check for specific keywords in the user's message and return the corresponding response.
    for (const category of keywordCategories) {
        if (containsKeyword(category.keywords, message)) {
            // Randomly select a response from the list of responses. [4]
            return category.responses[Math.floor(Math.random() * category.responses.length)];
        }
    }

    // Default response if no patterns match.
    return "Tell me more about that.";
}


/**
 * Checks if a keyword exists in the message. Iterates through the keywords array and uses the includes() method to check for a match. [5]
 * 
 * - Input: 
 *   - `keywords`: An array of strings representing potential keywords.
 *   - `message`: A string representing the user's input message.
 * 
 * - Process:
 *   1. Iterates through the list of keywords.
 *   2. Uses the `includes()` method to check if each keyword exists in the message.
 * 
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
 * 
 * - Input: The text entered in the `textbox` input field.
 * 
 * - Process:
 *   1. Extracts the user's message from the input field.
 *   2. Trims any whitespaces from the input.
 *   3. Displays the user's processed message in the conversation area.
 *   4. Converts the input to lowercase for case-insensitive matching.
 *   5. Clears the input field after processing.
 *   6. Retrieves ELIZA's response based on the user's message.
 *   7. Displays ELIZA's response in the conversation area.
 *   8. Scrolls to the bottom of the conversation area.
 * 
 * - Output: Updates the conversation area with the user's message and ELIZA's response.
 */
function processMessages() {
    // Get the user's message from the input field. [6]
    const rawMessage = textbox.value;
    // Trim any whitespace from the beginning and end of the message using trim(). [7]
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

    // Scroll to the bottom of the conversation area. [8]
    conversation.scrollTop = conversation.scrollHeight;
}


/**
 * Display messages in the conversation box, using both createElement and appendChild methods. [9]
 * 
 * - Input:
 *   - `content`: A string representing the message content.
 *   - `className`: A string representing the CSS class name to style the message.
 * 
 * - Process:
 *   1. Creates a new paragraph element for the message.
 *   2. Sets the class name of the element for styling.
 *   3. Assigns the sender's name and message text to the element's content.
 *   4. Appends the element to the conversation area in the UI.
 * 
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


// Triggers the handleUserMessage() function when the user presses enter. [10]
textbox.addEventListener("keydown", function (event) {
    // Check if the key pressed is enter, process the message if it is.
    if (event.key === "Enter") {
        processMessages()
    }
});


// Function to hide the intro screen when the user clicks the "Start Chatting" button in the user interface.
function startChat() {
    // Get the introductory section element.
    const intro = document.getElementById("intro");
    // Hide the introductory section when the user presses the button. [11]
    intro.style.display = "none";

    // Get the main program element.
    const mainProgram = document.getElementById("container");
    // Display the main program when the user presses the button. [11]
    mainProgram.style.display = "block";
}




/* References:
 * [1] Getting references to elements in the UI:             https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 * [2] Reflecting words in a string:                         https://github.com/ianmcloughlin/2425_emerging_technologies/blob/main/03_eliza.ipynb
 * [3] Using match() for pattern matching:                   https://www.geeksforgeeks.org/javascript-string-match-method/
 * [4] Selecting a random element of an array:               https://chatgpt.com/share/67467bd7-19e0-800f-a5b6-784d3bbc2724
 * [5] Using includes() to check for a substring:            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * [6] Storing a value fetched using getElementById:         https://chatgpt.com/c/673f5b54-5f5c-800f-ac7b-4b14a7521f8d
 * [7] Removing whitespaces from a string:                   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
 * [8] Scrolling to the bottom of an element:                https://stackoverflow.com/questions/75059290/scrolltop-to-follow-bottom-of-the-page
 * [9] Appending a child element to a parent element:        https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild         
 * [10] Triggering an event on key press (Enter key):        https://www.w3resource.com/javascript-exercises/event/javascript-event-handling-exercise-9.php  
 * [11] Changing an element's display property:              https://allyjs.io/tutorials/hiding-elements.html
*/
