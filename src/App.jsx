import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Header from './components/Header';

export default function App(){
  const [cart, setCart] = useState(() => {
    try{ return JSON.parse(localStorage.getItem('cart')||'[]'); }catch{ return []; }
  });

  useEffect(()=> localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  const addToCart = (product, qty=1) => {
    setCart(prev => {
      const idx = prev.findIndex(p=>p.id===product.id);
      if(idx>=0){
        const copy=[...prev]; copy[idx].qty += qty; return copy;
      }
      return [...prev, {...product, qty}];
    });
  };

  const updateQty = (id, qty) => setCart(prev => prev.map(p=>p.id===id?{...p, qty}:p));
  const removeItem = id => setCart(prev => prev.filter(p=>p.id!==id));
  const clearCart = () => setCart([]);

  return (
    <div>
      <Header count={cart.reduce((s,i)=>s+i.qty,0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage items={cart} updateQty={updateQty} removeItem={removeItem} clearCart={clearCart} />} />
      </Routes>
    </div>
  );
}
