import React, { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity < 1) return; // Avoid adding negative quantities
    addToCart({ ...product, quantity });
  };

  return (



    <div className="border p-4 m-2 rounded-lg shadow-lg place-content-center">
      <img src={product.image} alt={product.name} className="w-1/2 h-48 rounded-t-lg" />
      <h2 className="text-xl mt-2">{product.name}</h2>
      <p className="text-gray-600 text-xs">{product.description}</p>
      <p className="text-green-500 font-bold">${product.price}</p>

      <div className="flex items-center mt-4">
        <button onClick={() => setQuantity(quantity - 1)} className="px-2 py-1 bg-gray-300 rounded-md" disabled={quantity <= 1}>-</button>
        <span className="mx-2">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 bg-gray-300 rounded-md">+</button>
      </div>

      <button onClick={handleAddToCart} className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg">Add to Cart</button>

    </div>
  );
};

export default ProductCard;