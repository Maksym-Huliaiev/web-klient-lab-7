import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';

export default function AdminInventoryDetails() {
  const { id } = useParams(); // беремо id з адресної стрічки
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await inventoryApi.getById(id); // запит за id [cite: 78]
        setItem(res.data);
      } catch (err) {
        alert("помилка завантаження");
      }
    };
    fetchItem();
  }, [id]);

  if (!item) return <div className="p-10">завантаження...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">назад до списку</Link>
      <h1 className="text-3xl font-bold mb-4">{item.inventory_name}</h1>
      <img 
        src={item.photo_url} 
        alt="full view" 
        className="w-full h-96 object-contain bg-gray-100 rounded mb-6" 
      />
      <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
    </div>
  );
}