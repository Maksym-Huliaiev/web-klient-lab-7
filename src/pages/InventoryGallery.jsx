import { useState } from 'react';

export default function InventoryGallery() {
  // фейкові дані для галереї (лаба 8)
  const [items] = useState([
    { id: 1, inventory_name: "перфоратор bosch", description: "потужний інструмент для бетону", photo_url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500" },
    { id: 2, inventory_name: "набір ключів", description: "24 одиниці, хром-ванадій", photo_url: "https://images.unsplash.com/photo-1530124560672-d30d1d73c734?w=500" }
  ]);

  return (
    <div className="max-w-7xl mx-auto p-6 text-black text-left">
      <h1 className="text-3xl font-bold mb-8">галерея товарів</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map(item => (
          <div key={item.id} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <img src={item.photo_url} alt="item" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.inventory_name}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}