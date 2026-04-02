import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function AdminInventoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [photo, setPhoto] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('my_inventory');
    if (saved) {
      const items = JSON.parse(saved);
      const item = items.find(i => i.id === Number(id));
      if (item) {
        setCurrentItem(item);
        setName(item.inventory_name);
        setDesc(item.description);
      }
    }
  }, [id]);

  const handleUpdateText = () => {
    const saved = localStorage.getItem('my_inventory');
    const items = JSON.parse(saved);
    const updatedItems = items.map(item => 
      item.id === Number(id) ? { ...item, inventory_name: name, description: desc } : item
    );
    localStorage.setItem('my_inventory', JSON.stringify(updatedItems));
    alert("Текстові дані оновлено!");
  };

  const handleUpdatePhoto = async () => {
    if (!photo) return alert("Виберіть нове фото");
    
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = () => {
      const saved = localStorage.getItem('my_inventory');
      const items = JSON.parse(saved);
      const updatedItems = items.map(item => 
        item.id === Number(id) ? { ...item, photo_url: reader.result } : item
      );
      localStorage.setItem('my_inventory', JSON.stringify(updatedItems));
      alert("Фотографію оновлено!");
      window.location.reload(); // оновити прев'ю
    };
  };

  if (!currentItem) return <div className="p-10 text-white">Вантажиться...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 text-white text-left bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-4">Редагування товару #{id}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Секція ТЕКСТУ */}
        <div className="space-y-6 bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <h2 className="text-xl font-bold text-blue-400 uppercase tracking-wider">Текстова інформація</h2>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Назва інвентарю</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Опис</label>
            <textarea 
              rows="4"
              value={desc} 
              onChange={(e) => setDesc(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-white focus:border-blue-500 outline-none"
            />
          </div>
          <button onClick={handleUpdateText} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition-colors">
            Зберегти текст
          </button>
        </div>

        {/* Секція ФОТО */}
        <div className="space-y-6 bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <h2 className="text-xl font-bold text-orange-400 uppercase tracking-wider">Зображення</h2>
          <div className="h-48 w-full bg-black rounded-lg overflow-hidden border border-gray-700">
            <img src={currentItem.photo_url} alt="current" className="w-full h-full object-cover" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Завантажити нове фото</label>
            <input 
              type="file" 
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700 cursor-pointer"
            />
          </div>
          <button onClick={handleUpdatePhoto} className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded-lg font-bold transition-colors">
            Оновити фотографію
          </button>
        </div>
      </div>

      <button onClick={() => navigate('/admin')} className="mt-12 text-gray-500 hover:text-white underline">
        ← Назад до списку
      </button>
    </div>
  );
}