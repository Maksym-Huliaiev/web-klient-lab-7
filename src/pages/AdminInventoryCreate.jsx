import { useNavigate } from 'react-router-dom';
import InventoryForm from '../components/inventory/InventoryForm';

export default function AdminInventoryCreate() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    const file = formData.get('photo'); // отримуємо файл з форми
    
    // функція для перетворення файлу в текст (Base64)
    const readFileAsDataURL = (file) => {
      return new Promise((resolve) => {
        if (!file || !(file instanceof File)) return resolve("");
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    };

    try {
      // чекаємо, поки картинка перетвориться на текст
      const imageBase64 = await readFileAsDataURL(file);

      const newItem = {
        id: Date.now(),
        inventory_name: formData.get('inventory_name'),
        description: formData.get('description'),
        photo_url: imageBase64 // тепер тут справжнє фото, а не заглушка!
      };

      // зберігаємо в localStorage
      const savedData = localStorage.getItem('my_inventory');
      const currentItems = savedData ? JSON.parse(savedData) : [];
      localStorage.setItem('my_inventory', JSON.stringify([...currentItems, newItem]));

      alert("товар з вашим фото успішно додано!");
      navigate('/admin');

    } catch (err) {
      alert("помилка при обробці фото");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-black text-left">
      <h1 className="text-3xl font-bold mb-6">Додати новий товар</h1>
      <div className="bg-white shadow-xl rounded-2xl p-4 border border-gray-100">
        <InventoryForm onSubmit={handleCreate} />
      </div>
      <button onClick={() => navigate('/admin')} className="mt-6 text-gray-400 hover:text-gray-600 underline">
        скасувати
      </button>
    </div>
  );
}