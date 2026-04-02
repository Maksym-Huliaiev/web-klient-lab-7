import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InventoryTable from '../components/inventory/InventoryTable';

export default function AdminInventory() {
  const navigate = useNavigate();

  // додаємо фейкові дані прямо в стан, щоб вони завжди були на екрані
  const [items, setItems] = useState([
    { id: 1, inventory_name: "перфоратор bosch", description: "потужний інструмент для бетону", photo_url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200" },
    { id: 2, inventory_name: "набір ключів", description: "24 одиниці, хром-ванадій", photo_url: "https://images.unsplash.com/photo-1530124560672-d30d1d73c734?w=200" }
  ]);

  // ці функції тепер просто виводять в консоль, бо сервера немає
  const handleDelete = (id) => {
    if (window.confirm("видалити цей товар?")) {
      setItems(items.filter(item => item.id !== id)); // видаляємо локально з екрана
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-black">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">адмін-панель складу</h1>
        <Link to="/create" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          + додати товар
        </Link>
      </div>

      <InventoryTable 
        items={items} 
        onView={(id) => navigate(`/details/${id}`)}
        onEdit={(id) => navigate(`/edit/${id}`)}
        onDelete={handleDelete}
      />
    </div>
  );
}