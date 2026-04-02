import { useEffect, useState } from 'react';
// ось тут ми імпортуємо наш файл таблиці
import InventoryTable from '../components/inventory/InventoryTable';
// імпорт нашого апі сервісу
import { inventoryApi } from '../services/inventoryApi';

export default function AdminInventory() {
  const [items, setItems] = useState([]); // тут зберігаємо список товарів
  const [loading, setLoading] = useState(true); // стан завантаження
  const [error, setError] = useState(null); // стан помилки

  // завантажуємо дані при першому відкритті сторінки
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await inventoryApi.getAll(); // запит до апі [cite: 63]
        setItems(response.data);
      } catch (err) {
        setError("не вдалося завантажити дані"); // обробка помилки 
      } finally {
        setLoading(false); // вимикаємо індикатор завантаження [cite: 104]
      }
    };

    loadData();
  }, []);

  // функції-заглушки для кнопок дій [cite: 58-61]
  const handleDelete = (id) => console.log("видалити товар з id:", id);
  const handleEdit = (id) => console.log("редагувати товар з id:", id);
  const handleView = (id) => console.log("переглянути товар з id:", id);

  // якщо йде завантаження, показуємо текст [cite: 104]
  if (loading) return <div className="p-10">завантаження...</div>;
  
  // якщо сталася помилка, показуємо її 
  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">управління складом</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          + додати товар
        </button>
      </div>

      {/* ось тут ми викликаємо нашу таблицю і передаємо їй дані */}
      {items.length === 0 ? (
        <p>на складі порожньо</p> // стан порожнього списку [cite: 105]
      ) : (
        <InventoryTable 
          items={items} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
          onView={handleView} 
        />
      )}
    </div>
  );
}