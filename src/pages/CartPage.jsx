import React from 'react';
export default function CartPage({ items=[], updateQty=()=>{}, removeItem=()=>{}, clearCart=()=>{} }){
  const total = items.reduce((s,i)=> s + i.price * i.qty, 0);
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {items.length===0 ? <div>Your cart is empty.</div> : (
        <div className="space-y-4">
          {items.map(it=>(
            <div key={it.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <img src={it.image} alt={it.title} className="w-24 h-24 object-contain" />
              <div className="flex-1">
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-gray-500">${it.price.toFixed(2)}</div>
                <div className="mt-2">
                  <input type="number" min="1" value={it.qty} onChange={e=>updateQty(it.id, Math.max(1, Number(e.target.value)||1))} className="w-20 px-2 py-1 border rounded" />
                  <button onClick={()=>removeItem(it.id)} className="ml-3 text-red-600">Remove</button>
                </div>
              </div>
              <div className="text-lg font-semibold">${(it.price*it.qty).toFixed(2)}</div>
            </div>
          ))}
          <div className="flex items-center justify-between bg-white p-4 rounded shadow">
            <div className="font-semibold">Total</div>
            <div className="text-xl font-bold">${total.toFixed(2)}</div>
          </div>
          <div className="flex gap-3">
            <button onClick={()=>alert('Checkout not implemented in demo')} className="px-4 py-2 bg-green-600 text-white rounded">Checkout</button>
            <button onClick={clearCart} className="px-4 py-2 border rounded">Clear Cart</button>
          </div>
        </div>
      )}
    </main>
  );
}
