# React + TypeScript + Vite

# E-Commerce Product Display App

## 1. Project Overview

This is a simple product display e-commerce application that allows users to browse products, add them to a cart, and manage their cart. The app is built with modern web technologies, including React for UI, Redux Toolkit for state management, and Tailwind CSS for styling. It features smooth and intuitive UX using React Icons for visual enhancements and React Hot Toast for user feedback notifications. Redux Persist is used to maintain cart state even after refreshing the page.

### Key Features:

- Dockerized.
- Browse and view products.
- Add products to the cart.
- Search product by category name.
- Infinite scrolling.
- Persistent cart state.
- Responsive design with Tailwind CSS.
- Feedback and notifications via React Hot Toast.

## 2. Steps to Run the App Locally

### Prerequisites:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed

### Steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NazrulIslam-Chowdhury/pixfar-task.git
   cd your-repo
   ```
2. **Run on the terminal:**
   ```bash
   npm install
   npm run dev
   ```
or. **Run on the terminal:**
   ```bash
   docker run -p 3000:3000 pixfar-task
   ```
## 3. Key Architectural Choices

### Redux Toolkit & Redux Persist:

The app's state management is handled with Redux Toolkit, simplifying the logic for actions and reducers. This makes it easier to manage the app’s global state, especially for the cart functionality. Redux Persist ensures that cart data is saved to local storage, so users can retain their cart items even after refreshing or closing the browser.

### RTK query:

RTK query is used for data fetching, searching product and infinite scrolling.

### Docker:

Docker is used to containerizing the application.

### Tailwind CSS:

For styling, Tailwind CSS is used to create a responsive and modern interface. Its utility-first approach allows for rapid UI development without writing a lot of custom CSS, promoting consistency and reusability across components.

### React Icons & React Hot Toast:

React Icons enhances the visual appearance of buttons and interactive elements with vector icons, providing a cleaner look.
React Hot Toast is integrated for user feedback, enabling non-intrusive notifications when adding items to the cart or performing other actions.
This combination of libraries ensures the app is efficient, responsive, and user-friendly, while also maintaining state persistence and a clean, modern UI.
