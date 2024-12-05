# Add to Cart Page - README

## Overview

The **Add to Cart** page of the e-commerce application allows users to view products, add them to their shopping cart, and manage the cart's content. This page fetches product data from the Fake Store API and displays it in a user-friendly format. Users can add products to the cart, view product details, and navigate to the cart page to manage their items and proceed with checkout.

### Key Features:
- Display a list of products fetched from the Fake Store API.
- Each product has an image, title, price, and description.
- Users can add products to the cart, and the "Add to Cart" button changes to "Remove" once an item is added.
- Manage the cart with the ability to increase/decrease product quantities.
- Total cart price dynamically updates based on item quantities, and a 10% discount is applied to the final total.

## Features

### Product List
- A list of products is fetched from the Fake Store API and displayed in a responsive grid.
- Each product displays its **image**, **title**, **description**, and **price**.
- An **Add to Cart** button is available for each product.
  
### Add/Remove Items from Cart
- If the product is already in the cart, the button shows **Remove Cart**.
- Clicking the **Add to Cart** button adds the product to the cart, and the product quantity is updated if it's already in the cart.

### Cart Management
- Users can view all items added to the cart on the Cart page, including their name, price, quantity, and total price for each item.
- Each cart item has buttons to **increase** or **decrease** the quantity.
- The cart page dynamically updates the total price based on the quantity changes.
- A **10% discount** is applied to the total price of all items in the cart.

### Navigation
- Users can navigate between the **Home** (where they can add products to the cart) and the **Cart** (where they can review and manage their cart items).

## Technologies Used
- **React** for building the user interface.
- **React Router** for page navigation between Product List and Cart pages.
- **Fetch** for making HTTP requests to the Fake Store API.
- **Tailwind CSS** for styling and responsive design.

## Installation Instructions

### Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/rizasimkhana/Add-to-cart
npm install for installing node modules

