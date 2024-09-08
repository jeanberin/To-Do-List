# To-Do List

![image](https://github.com/user-attachments/assets/7850dfef-df7d-40b1-94d3-dd2bd41cdd68)

## Overview

This is a simple To-Do List web application that allows users to add tasks, categorize them with color-coded buttons, and manage them with basic CRUD operations. The application uses HTML for structure, CSS for styling, and JavaScript for functionality.

## Features

- **Add Tasks**: Enter new tasks into the input field and categorize them with randomly assigned colors.
- **Edit Tasks**: Click on a task to edit its content.
- **Delete Tasks**: Remove tasks from the list.
- **Persistent Storage**: Tasks and their categories are saved in the browser's local storage.
- **Responsive Design**: The application is responsive and adjusts to different screen sizes.

## Getting Started

To get started with this project, you need to set up your local development environment.

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox)
- A code editor (e.g., VSCode, Sublime Text)

### Installation

1. **Clone the repository** (or download the files if not using version control):
   ```
   git clone https://github.com/PiLord1/To-Do-List.git
   ```
2. **Navigate to the project directory:**
   ```
   cd todo-list
   ```
3. **Open `index.html`** in your preferred web browser to view the application. You can simply double-click the `index.html` file, or drag and drop it into an open browser window. This will launch the To-Do List app in your browser where you can start using it immediately.

## Files

- **`index.html`**: This file contains the HTML structure of the application. It sets up the layout and includes references to the CSS for styling and JavaScript for functionality.
- **`style.css`**: The stylesheet that defines the visual appearance of the application. It handles the colors, layout, and responsive design aspects.
- **`index.js`**: The JavaScript file that contains the logic for adding, editing, and deleting tasks. It also manages interactions with local storage to save and retrieve tasks.

## Usage

1. **Open `index.html`** in a web browser to start using the To-Do List application.
2. **Add a new task**: Type your task into the input field and click the "Add" button or press Enter. Each new task will be assigned a random color from the available categories (pink, lightblue, dandelion).
3. **Edit a task**: Click the pencil icon next to a task to make it editable. After making your changes, click the floppy disk icon to save them.
4. **Delete a task**: Click the trash can icon next to a task to remove it from the list.
5. **View tasks**: Your tasks will appear in the main section. They are saved in local storage, so they'll persist even if you close and reopen the browser.

## Challenges Faced

1. **Saving Tasks in Local Storage**:
   - To ensure that tasks are not lost when the browser is closed, the application uses the browser's local storage. The challenge was to correctly save and retrieve tasks and their categories. This was done using `localStorage.setItem()` to save data and `localStorage.getItem()` to retrieve it on page load. The tasks are stored as JSON strings, which allows for easy serialization and deserialization.

2. **Identifying the Clicked Button**:
   - Handling multiple buttons (edit and delete) associated with each task was a challenge. To manage this, each button's event listener uses the index of the task in the list. This ensures that the correct task is edited or deleted when a button is clicked. By dynamically creating and assigning event listeners, the application can accurately track and respond to user interactions.

## Dependencies

- **Font Awesome**: Provides icons used throughout the application. It is included via a CDN, which allows for easy access to a wide range of icons.
- **Google Fonts**: Used to include custom fonts in the application. This is also loaded via a CDN to ensure that the fonts are available and styled consistently.







