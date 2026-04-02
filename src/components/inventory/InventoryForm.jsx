import { useState } from 'react';

// форма для введення даних про товар
export default function InventoryForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.inventory_name || '');
  const [desc, setDesc] = useState(initialData.description || '');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // перевірка обов'язкового поля [cite: 74]
    if (!name) return alert("введіть назву");

    // збираємо дані для відправки [cite: 72-73]
    const formData = new FormData();
    formData.append('inventory_name', name);
    formData.append('description', desc);
    if (file) formData.append('photo', file);

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 text-left">
      <div>
        <label className="block text-sm font-medium text-gray-700">назва товару</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">опис</label>
        <textarea 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">вибрати фото</label>
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-1 block w-full text-black"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        зберегти
      </button>
    </form>
  );
}