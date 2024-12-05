import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Filter from './components/Filter';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);

      // Extract unique categories from the products
      const productCategories = [...new Set(data.map((product) => product.category))];
      setCategories(productCategories);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex > -1) {
      setAlertMessage(`Already in the cart!`);
    } else {
      // Item is not in the cart, add it
      setCart([...cart, { ...product, quantity: product.quantity }]);
      setAlertMessage(`Added  to the cart!`);
    }

    setTimeout(() => setAlertMessage(''), 3000);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id));
  };

  const updateQuantity = (product, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantities
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const applyFilter = (category) => {
    let filtered = products;

    // Filter by category
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <div className="p-4">
        {alertMessage && (
          <div className="bg-green-500 text-white p-2 rounded-md mb-4  flex items-center justify-center w-full text-center fixed">
            {alertMessage}
          </div>
        )}

        <Filter
          categories={categories}
          applyFilter={applyFilter}
        />

        <Routes>
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    showAlertMessage={alertMessage}
                  />
                ))}
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
