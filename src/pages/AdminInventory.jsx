import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InventoryTable from '../components/inventory/InventoryTable';

export default function AdminInventory() {
  const navigate = useNavigate();

  // 1. Зчитуємо дані з пам'яті браузера при завантаженні
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('my_inventory');
    // якщо в пам'яті порожньо, показуємо початкові тестові дані
    return saved ? JSON.parse(saved) : [
      { 
        id: 1, 
        inventory_name: "перфоратор bosch", 
        description: "потужний інструмент для бетону", 
        photo_url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200" 
      },
      { 
        id: 2, 
        inventory_name: "набір ключів", 
        description: "24 одиниці, хром-ванадій", 
        photo_url: "https://images.unsplash.com/photo-1530124560672-d30d1d73c734?w=200" 
      }
    ];
  });

  // 2. Щоразу, коли список items змінюється, зберігаємо його в пам'ять
  useEffect(() => {
    localStorage.setItem('my_inventory', JSON.stringify(items));
  }, [items]);

  // функція видалення (тепер вона реально видаляє з екрана і пам'яті)
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("ви дійсно хочете видалити цей товар?");
    if (confirmDelete) {
      // фільтруємо масив, залишаючи всі елементи, крім видаленого
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-black text-left">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">адмін-панель складу</h1>
        
        {/* кнопка переходу на сторінку створення */}
        <Link 
          to="/create" 
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow transition-colors"
        >
          + додати нову позицію
        </Link>
      </div>

      {/* перевірка на порожній список */}
      {items.length === 0 ? (
        <div className="text-center p-20 bg-gray-50 border-2 border-dashed rounded-xl">
          <p className="text-gray-500 text-lg italic">на складі поки що немає жодного товару</p>
          <button 
            onClick={() => localStorage.removeItem('my_inventory')}
            className="mt-4 text-blue-500 text-sm underline"
          >
            скинути дані до початкових
          </button>
        </div>
      ) : (
        <InventoryTable 
          items={items} 
          onView={(id) => navigate(`/details/${id}`)}
          onEdit={(id) => navigate(`/edit/${id}`)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}