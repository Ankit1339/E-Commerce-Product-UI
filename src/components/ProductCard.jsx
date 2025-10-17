import React from 'react';
export default function ProductCard({ product, onView, onAdd }){
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <div className="h-48 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.title} className="object-contain h-full" />
      </div>
      <div className="mt-3 flex-1">
        <h3 className="text-lg font-medium line-clamp-2">{product.title}</h3>
        <div className="text-sm text-gray-500">{product.category}</div>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-indigo-600 font-semibold">${product.price.toFixed(2)}</div>
          <div className="text-sm text-gray-600">{product.rating?.rate ?? ''} ★</div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={onView} className="flex-1 px-3 py-2 border rounded-md hover:bg-gray-50">View</button>
        <button onClick={onAdd} className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Add</button>
      </div>
    </div>
  );
}
