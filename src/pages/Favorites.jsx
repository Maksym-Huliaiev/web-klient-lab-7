import { useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';

export default function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();
  const [allItems] = useState(() => {
    const saved = localStorage.getItem('my_inventory');
    return saved ? JSON.parse(saved) : [];
  });

  const favoriteItems = allItems.filter(item => favorites.includes(item.id));

  return (
    <div className="max-w-7xl mx-auto p-6 text-white text-left min-h-screen bg-gray-900">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-red-500">Обране</h1>
        <div className="h-2 w-20 bg-red-600 mt-2"></div>
      </div>
      
      {favoriteItems.length === 0 ? (
        <div className="py-32 text-center bg-gray-800/50 rounded-3xl border-2 border-dashed border-gray-700">
          <p className="text-gray-500 text-2xl font-bold uppercase tracking-widest">Ви ще не обрали жодного товару</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favoriteItems.map(item => (
            <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden relative group">
              <button 
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-3 right-3 bg-red-600/80 hover:bg-red-600 p-2 rounded-full text-[10px] uppercase font-bold z-10"
              >
                Прибрати ✕
              </button>
              <div className="h-48 bg-black">
                <img src={item.photo_url} className="w-full h-full object-cover" alt="fav" />
              </div>
              <div className="p-4 bg-gray-900/50">
                <h3 className="font-bold text-sm text-white uppercase truncate">{item.inventory_name}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}