🛒 E-Commerce Web Application (React.js)

A responsive E-Commerce frontend application built using React.js.
The application allows users to browse products, add items to the cart, manage quantities, and view dynamic total pricing.

🚀 Features

Product Listing Page

Add to Cart Functionality

Quantity Increment / Decrement

Remove Items from Cart

Dynamic Total Price Calculation

Product Search Functionality

Category-Based Filtering

Cart Persistence using localStorage

Client-Side Routing using React Router

Responsive Design

🛠 Tech Stack

Frontend

React.js

JavaScript (ES6+)

React Router DOM

Context API

HTML5 & CSS3

State Management

React Context API

Storage

localStorage (Cart Persistence)

📂 Project Structure
src/
 ├── components/
 │     ├── Navbar.jsx
 │     ├── ProductCard.jsx
 │
 ├── pages/
 │     ├── Home.jsx
 │     ├── Cart.jsx
 │
 ├── context/
 │     ├── CartContext.jsx
 │
 ├── data/
 │     ├── products.js
 │
 ├── App.jsx
 └── main.jsx

🧠 Core Concepts Implemented

Component-Based Architecture

Global State Management using Context API

React Hooks (useState, useEffect, useContext)

Client-Side Routing

Array Methods (map, filter, reduce)

Persistent Storage using localStorage

⚙️ Installation & Setup

Clone the repository:

git clone <your-repository-link>


Navigate to the project folder:

cd ecommerce-ui


Install dependencies:

npm install


Run the development server:

npm run dev


Open in browser:

http://localhost:5173

📌 How It Works

Products are displayed dynamically from a data file.

Users can add products to the cart.

If a product already exists in the cart, its quantity increases.

The total price updates dynamically using JavaScript reduce method.

Cart data is stored in localStorage to prevent data loss on refresh.

Navigation between pages is handled by React Router.

🎯 Future Enhancements

Backend Integration (FastAPI / Django)

Database Integration (MySQL / MongoDB)

User Authentication (JWT)

Payment Gateway Integration

Order History Feature

Admin Dashboard