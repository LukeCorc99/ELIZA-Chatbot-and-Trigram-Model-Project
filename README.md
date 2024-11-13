# Emerging Technologies Assignment by Luke Corcoran
## Overview

In this project, a series of tasks were undertaken with the aim of building a third-order letter approximation model using English texts, generating text based on the model, and analyzing its accuracy, as well as creating my own version of an ELIZA chatbot which was developed using HTML, CSS, and JavaScript, and deployed via GitHub Pages. The project achieved the assessment's purpose of demonstrating my ability in detecting, contextualizing and researching an emerging technology, using it to implement a solution to a computing problem.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contact](#contact)
- [References](#references)

## Installation

In order to install the project on your machine, follow these steps:

1. **Install Visual Studio Code**
   Make sure that Visual Studio Code is installed on your machine.
   - Go to the Visual Studio Code download page.
   - Download the Windows installer (.exe).
   - Run the installer and follow the prompts to complete the installation.
   Once installed, you can launch Visual Studio Code either normally or by typing code in your terminal (after ensuring it's added to your PATH).

2. **Clone the repository:**
   Open your Command Line Interface and clone the project to your machine.
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
5. **Install dependencies:**
   -  Click on the Extensions icon in the Activity Bar on the side
   -  Search for "Jupyter" and install the Jupyter extension provided by Microsoft
   -  Then, search for "Python" in the Extensions view and install the Python extension by Microsoft.
6. **Start the application:**
   After installing the extensions, you can open .ipynb files directly. Just navigate to the notebook file in your project VS Code and click on it to open.
   
## Usage
**Trigram Model Tasks:**

Simply navigate to trigram.ipynb and hit 'Run All'. This will execute all code cells, demonstrating the functionality of the implementation of each task.


**ELIZA Chatbot:**


## Features
**Trigram Model Tasks:**


*- Feature 1: Trigram Model Creation*

Generates a third-order letter approximation model using multiple English texts. This model captures sequences of three characters (trigrams) and stores their frequency.

*- Feature 2: Text Generation Using Trigram Model*

Utilizes the trigram model created previously to generate a 10,000-character string. Starting with a given pair of characters, it selects each next character based on weighted probability until it reaches 10,000 characters.

*- Feature 3: Model Analysis and Validation*

Analyzes the generated string by comparing it against a list of English words, calculating the percentage of actual English words in the generated string. 

**ELIZA Chatbot:**


## Contributors

Created by Luke Corcoran [@g00410404](https://github.com/g00410404)

## References

- This work was assisted by OpenAI’s ChatGPT and Microsoft's Copilot for providing insights and clarifying key concepts, and for guidance on aspects of repository structure and formatting.
