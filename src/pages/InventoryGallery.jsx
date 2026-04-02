import { useState, useEffect } from 'react';

export default function InventoryGallery() {
  // завантажуємо дані з пам'яті браузера
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('my_inventory');
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <div className="max-w-7xl mx-auto p-6 text-white text-left min-h-screen bg-gray-900">
      <div className="mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-4xl font-bold uppercase tracking-widest text-blue-500">Галерея інвентарю</h1>
      </div>
      
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-20 border-2 border-dashed border-gray-700 rounded-3xl">
           <p className="text-gray-500 italic text-xl">На складі порожньо...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500 transition-all group">
              {/* Блок з картинкою: фіксована висота h-64 запобігає розтягуванню */}
              <div className="h-64 w-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src={item.photo_url || 'https://via.placeholder.com/400x300?text=Немає+фото'} 
                  alt={item.inventory_name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              {/* Блок з текстом */}
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-blue-400 uppercase tracking-tight">
                  {item.inventory_name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}