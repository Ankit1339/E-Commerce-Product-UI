import React, { useState } from 'react';
export default function ProductModal({ product, onClose, onAdd }){
  const [qty, setQty] = useState(1);
  if(!product) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4 shadow-lg overflow-hidden">
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-64 flex items-center justify-center"><img src={product.image} alt={product.title} className="h-full object-contain" /></div>
          <div>
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <div className="text-sm text-gray-600">{product.category} • {product.rating?.rate ?? ''} ★</div>
            <p className="mt-3 text-gray-700">{product.description}</p>
            <div className="mt-4 text-xl font-semibold">${product.price.toFixed(2)}</div>
            <div className="mt-4 flex items-center gap-2">
              <label className="text-sm">Qty:</label>
              <input type="number" min="1" value={qty} onChange={e=>setQty(Math.max(1,Number(e.target.value)||1))} className="w-20 px-2 py-1 border rounded-md" />
            </div>
            <div className="mt-6 flex gap-2">
              <button onClick={()=>onAdd(qty)} className="px-4 py-2 bg-indigo-600 text-white rounded-md">Add to cart</button>
              <button onClick={onClose} className="px-4 py-2 border rounded-md">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
