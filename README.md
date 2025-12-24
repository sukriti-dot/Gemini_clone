# Gemini_clone

A modern, responsive chat application built with React and Vite, replicating the core functionality and aesthetic of Google Gemini. This project integrates the Google Generative AI SDK to provide real-time AI responses.

## Features

- **Real-time AI Chat**: Connects to Google's Gemini API (model: `gemini-2.5-flash`) for intelligent responses.
- **Interactive Suggestions**: Quick-start suggestion cards on the home screen that immediately trigger prompts.
    - *Features interactive hover effects and one-click sending.*
- **Responsive Design**: Clean, modern UI inspired by the official Gemini interface, built with vanilla CSS.
- **Chat History**: Sidebar navigation to view and reload previous chat sessions.
- **Markdown Support**: Responses are formatted with proper HTML rendering.

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Responsive & Modern)
- **AI Integration**: @google/generative-ai SDK

## Setup & Run

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Open in Browser**
    Navigate to `http://localhost:5173/`

    ## Usage

- Type a message in the input bar and press Enter or the Send icon.
- Click on any of the suggested topic cards on the home page to instantly send that prompt.
- Use the Sidebar menu to switch between chat sessions or start a new one.
