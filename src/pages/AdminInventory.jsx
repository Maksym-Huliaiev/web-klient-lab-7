import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// імпортуємо наш апі сервіс та компонент таблиці
import { inventoryApi } from '../services/inventoryApi';
import InventoryTable from '../components/inventory/InventoryTable';

export default function AdminInventory() {
  const [items, setItems] = useState([]); // масив для товарів [cite: 54]
  const [loading, setLoading] = useState(true); // стан завантаження [cite: 104]
  const [error, setError] = useState(null); // стан помилки [cite: 106]
  
  const navigate = useNavigate();

  // функція для отримання даних з сервера [cite: 62-63]
  const loadData = async () => {
    try {
      setLoading(true);
      const response = await inventoryApi.getAll();
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError("не вдалося завантажити список товарів");
    } finally {
      setLoading(false);
    }
  };

  // завантажуємо дані при першому запуску сторінки
  useEffect(() => {
    loadData();
  }, []);

  // перехід на сторінку деталей [cite: 59, 75-76]
  const handleView = (id) => {
    navigate(`/details/${id}`);
  };

  // перехід на сторінку редагування [cite: 60, 85-86]
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // видалення товару з обов'язковим підтвердженням [cite: 61, 98-101]
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("ви дійсно хочете видалити цей елемент?");
    
    if (confirmDelete) {
      try {
        await inventoryApi.delete(id);
        // оновлюємо список після видалення [cite: 101]
        loadData();
      } catch (err) {
        alert("помилка при видаленні");
      }
    }
  };

  // відображення під час завантаження [cite: 104]
  if (loading) {
    return <div className="text-center p-20 text-xl">завантаження даних...</div>;
  }

  // відображення якщо сталася помилка [cite: 106]
  if (error) {
    return (
      <div className="text-center p-20 text-red-500">
        <p className="mb-4">{error}</p>
        <button onClick={loadData} className="bg-blue-500 text-white px-4 py-2 rounded">
          спробувати ще раз
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">адмін-панель складу</h1>
        {/* кнопка переходу на сторінку створення [cite: 65-66] */}
        <Link 
          to="/create" 
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          + додати нову позицію
        </Link>
      </div>

      {/* перевірка на порожній список [cite: 105] */}
      {items.length === 0 ? (
        <div className="text-center p-20 bg-gray-50 border-2 border-dashed rounded-xl">
          <p className="text-gray-500 text-lg">на складі поки що немає жодного товару</p>
        </div>
      ) : (
        <InventoryTable 
          items={items} 
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}