import { useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import InventoryForm from '../components/inventory/InventoryForm';

export default function AdminInventoryCreate() {
  const navigate = useNavigate();

  // функція, яка спрацьовує при натисканні "зберегти" у формі
  const handleCreate = async (formData) => {
    try {
      // відправляємо дані на сервер (POST /register) [cite: 70-71]
      await inventoryApi.create(formData);
      alert("товар успішно додано до складу");
      // після успіху повертаємо користувача на головну таблицю
      navigate('/');
    } catch (err) {
      console.error(err);
      alert("не вдалося створити товар. перевірте з'єднання");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">додавання нової позиції</h1>
      
      {/* викликаємо компонент форми, який ми створили раніше [cite: 39] */}
      <InventoryForm onSubmit={handleCreate} />
      
      <button 
        onClick={() => navigate('/')} 
        className="mt-4 text-gray-500 hover:underline"
      >
        скасувати та повернутися
      </button>
    </div>
  );
}