import React from 'react';
function Cart({ cartItems, removeFromCart, updateQuantity }){

    // Function to calculate the total price of the cart
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
    };

    

      // Function to calculate the discount
  const calculateDiscount = (total) => {
    return total * 0.10; // 10% discount
  };
  const calculateFinalPrice = () => {
    const total = calculateTotal();
    const discount = calculateDiscount(total);
    return total - discount;
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-4">
              <div>
                <img src={item.image} className="w-16 h-auto"></img>
                <h3 className="font-bold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateQuantity(item, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded-md"
                >
                  +
                </button>
                <button
                  onClick={() => updateQuantity(item, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 rounded-md"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

    <h1 className='text-center font-bold text-3xl bg-green-700'>PAY:{calculateFinalPrice()}</h1>
 
        

    </div>
    
  );
};

export default Cart;

  