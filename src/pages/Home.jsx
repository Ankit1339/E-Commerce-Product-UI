import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

export default function Home({ addToCart }){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(()=>{
    let mounted = true;
    API.get('/products').then(r=>{ if(mounted){ setProducts(r.data); setLoading(false); } }).catch(()=>setLoading(false));
    return ()=> mounted=false;
  },[]);

  const categories = ['All', ...Array.from(new Set(products.map(p=>p.category)))];
  const filtered = products.filter(p=> (p.title.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())) && (category==='All'?true:p.category===category) );

  if(loading) return <div className="p-8 text-center">Loading products…</div>;

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search products..." className="px-3 py-2 border rounded-md w-64" />
          <select value={category} onChange={e=>setCategory(e.target.value)} className="px-3 py-2 border rounded-md">
            {categories.map(c=> <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p=>(
          <ProductCard key={p.id} product={p} onView={()=>setSelected(p)} onAdd={()=>addToCart(p,1)} />
        ))}
      </div>

      {selected && <ProductModal product={selected} onClose={()=>setSelected(null)} onAdd={(qty)=>{ addToCart(selected, qty); setSelected(null); }} />}
    </main>
  );
}
