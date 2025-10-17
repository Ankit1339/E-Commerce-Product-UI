import React from 'react';
import { Link } from 'react-router-dom';
export default function Header({ count=0 }){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/"><div><h1 className="text-xl font-semibold">ShopUI</h1><div className="text-sm text-gray-500">React + Tailwind Demo</div></div></Link>
        <nav className="flex items-center gap-4">
          <Link className="text-gray-600 hover:text-gray-900" to="/">Home</Link>
          <Link className="text-gray-600 hover:text-gray-900" to="/cart">Cart ({count})</Link>
        </nav>
      </div>
    </header>
  );
}
