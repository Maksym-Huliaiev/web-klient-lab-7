import { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';

export default function InventoryGallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    inventoryApi.getAll()
      .then(res => setItems(res.data))
      .catch(() => console.log("помилка"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-10 text-center text-black">завантаження галереї...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-8">галерея інвентарю</h1>
      
      {items.length === 0 ? (
        <p>товарів поки немає</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={item.photo_url || 'https://via.placeholder.com/300'} alt="item" className="w-full h-48 object-cover" />
              <div className="p-4 text-black">
                <h3 className="font-bold text-lg mb-2">{item.inventory_name}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}