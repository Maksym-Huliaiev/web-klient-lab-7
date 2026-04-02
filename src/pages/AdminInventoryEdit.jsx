import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import InventoryForm from '../components/inventory/InventoryForm';

export default function AdminInventoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    inventoryApi.getById(id).then(res => setItem(res.data));
  }, [id]);

  const handleUpdate = async (formData) => {
    try {
      // 1. оновлення тексту (JSON формат) [cite: 87-90]
      const textData = {
        inventory_name: formData.get('inventory_name'),
        description: formData.get('description')
      };
      await inventoryApi.updateText(id, textData);

      // 2. оновлення фото, якщо вибрано новий файл [cite: 94-97]
      const newPhoto = formData.get('photo');
      if (newPhoto && newPhoto.size > 0) {
        const photoData = new FormData();
        photoData.append('photo', newPhoto);
        await inventoryApi.updatePhoto(id, photoData);
      }

      alert("дані оновлено!");
      navigate('/');
    } catch (err) {
      alert("помилка при оновленні");
    }
  };

  if (!item) return <div className="p-10">завантаження...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">редагувати товар</h1>
      <InventoryForm onSubmit={handleUpdate} initialData={item} />
    </div>
  );
}