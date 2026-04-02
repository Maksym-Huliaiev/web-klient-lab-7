import { useState } from 'react';
import { useFavorites } from '../hooks/useFavorites';
import InventoryQuickView from '../components/gallery/InventoryQuickView';

export default function InventoryGallery() {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedItem, setSelectedItem] = useState(null); // Стан для модалки

  const [items] = useState(() => {
    const saved = localStorage.getItem('my_inventory');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <div className="max-w-7xl mx-auto p-6 text-white text-left min-h-screen bg-gray-900">
      <div className="mb-12">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-white">Каталог</h1>
        <div className="h-2 w-20 bg-blue-600 mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map(item => (
          <div 
            key={item.id} 
            className="bg-gray-800 border border-gray-700 rounded-3xl overflow-hidden relative group shadow-2xl hover:border-blue-500/50 transition-all cursor-pointer"
            onClick={() => setSelectedItem(item)} // Відкриваємо модалку при кліку
          >
            {/* Кнопка ❤️ */}
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Щоб не відкривалася модалка при кліку на серце
                toggleFavorite(item.id);
              }}
              className={`absolute top-5 right-5 z-20 p-3 rounded-full backdrop-blur-md transition-all ${
                isFavorite(item.id) ? 'bg-red-600 text-white scale-110 shadow-lg shadow-red-600/40' : 'bg-black/40 text-white hover:scale-110'
              }`}
            >
              {isFavorite(item.id) ? '❤️' : '🤍'}
            </button>

            <div className="h-72 w-full overflow-hidden bg-black flex items-center justify-center">
              <img src={item.photo_url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" alt="img" />
            </div>
            
            <div className="p-6">
              <h3 className="font-black text-xl text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                {item.inventory_name}
              </h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2 italic">
                Клікніть для детального перегляду...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Модалка Quick View */}
      <InventoryQuickView 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}