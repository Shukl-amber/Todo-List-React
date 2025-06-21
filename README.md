# React Todo App

A simple and modern Todo List application built with React and Vite. This app allows you to add, view, and delete your daily tasks, with persistent storage using the browser's localStorage.

## Features

- Add new todos
- Delete existing todos
- Todos are saved in your browser (localStorage)
- Responsive and clean UI

## Demo

![App Screenshot](/public/Screenshot.png)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
├── public/
│   └── todo-list.jpg
├── src/
│   ├── App.jsx
│   ├── Wrapper.jsx
│   ├── Wrapper.css
│   ├── localstorage.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- Edit `src/Wrapper.jsx` to change the todo logic or UI.
- Edit `src/Wrapper.css` for custom styles.

## License

This project is open source.

---

Feel free to fork and improve this project!
