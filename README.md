# ELIZA Chatbot and Trigram Model Project by Luke Corcoran
## Overview

In this project, a series of tasks were undertaken with the aim of building a third-order letter approximation model using English texts, generating text based on the model, and analyzing its accuracy. Additionally, I developed my own version of an ELIZA chatbot using HTML, CSS, and JavaScript, which was deployed via GitHub Pages. This project achieved the assessment's purpose of demonstrating my ability to detect, contextualize, and research an emerging technology and use it to implement a solution to a computing problem.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contact](#contact)
- [References](#references)

## Installation

In order to install the **trigram model** project on your machine, follow these steps:

1. **Install Visual Studio Code**
   Make sure that Visual Studio Code is installed on your machine.
   - Go to the Visual Studio Code download page.
   - Download the Windows installer (.exe).
   - Run the installer and follow the prompts to complete the installation.
   Once installed, you can launch Visual Studio Code either normally or by typing `code .` in your terminal (after ensuring it's added to your PATH).

2. **Clone the repository:**
   Open your Command Line Interface and clone the project to your machine:
   ```
   git clone https://github.com/g00410404/EmergingTechG00410404.git
   ```
3. **Navigate to the project directory:**
   ```
   cd path/to/the/project
   ```
4. **Open Visual Studio Code via Project Directory**
   ```
   code .
   ```
5. **Install Python:**
   -  Click on the Extensions icon in the Activity Bar on the side
   -  Search for "Python" in the Extensions view and install the Python extension by Microsoft.

6. **Install the required dependencies for Jupyter Notebook:**
   Run the following command to install Jupyter Notebook:
   ```
   pip install -r requirements.txt
   ```

7. **Start the application:**
   After installing the extensions, you can open .ipynb files directly. Just navigate to the notebook file in your project VS Code and click on it to open.


- For the **ELIZA Chatbot**, no installation is needed; simply head over to the [ELIZA Chatbot](https://lukecorc99.github.io/ELIZA-Chatbot-and-Trigram-Model-Project/) webpage to use it.
   
## Usage
**Trigram Model Tasks:**

Simply navigate to trigram.ipynb and hit 'Run All'. This will execute all code cells, demonstrating the functionality of the implementation of each task.


**ELIZA Chatbot:**

Simply navigate to the ELIZA Chatbot webpage [here](https://lukecorc99.github.io/ELIZA-Chatbot-and-Trigram-Model-Project/). To use the chatbot, enter any thoughts, feelings, or questions in the message box, and ELIZA will respond accordingly.

## Features
**Trigram Model Tasks:**


*- Feature 1: Trigram Model Creation*

Generates a third-order letter approximation model using multiple English texts. This model captures sequences of three characters (trigrams) and stores their frequency.

*- Feature 2: Text Generation Using Trigram Model*

Utilizes the trigram model created previously to generate a 10,000-character string. Starting with a given pair of characters, it selects each next character based on weighted probability until the string reaches 10,000 characters.

*- Feature 3: Model Analysis and Validation*

Analyzes the generated string by comparing it against a list of English words, calculating the percentage of actual English words in the generated string. 


**ELIZA Chatbot:**


*- Feature 1: Messenger Interface*

The ELIZA chatbot provides a user-friendly messenger interface using HTML, CSS, and JavaScript. Users can enter text into a message box to start a conversation.

*- Feature 2: Natural Language Processing* 

Implements keyword-based natural language processing to identify specific keywords in user input and respond with predefined messages, for example if the user mentions feeling "sad," the chatbot replies with empathetic responses.

*- Feature 3: Predefined Responses*

Responds to various keywords and phrases, such as greetings ("hello") or emotions ("happy" or "angry"), by selecting appropriate responses from a predefined list.

*- Feature 4: Accessible Deployment*

The chatbot is deployed via GitHub Pages, allowing users to interact with it directly in their browsers without installation or setup

## Contributors

Created by Luke Corcoran [@LukeCorc99](https://github.com/LukeCorc99)

## References

- This work was assisted by OpenAI’s ChatGPT and Microsoft's Copilot for providing insights and clarifying key concepts, and for guidance on aspects of repository structure and formatting.
- Specific references can be found in the documentation within the source files.
