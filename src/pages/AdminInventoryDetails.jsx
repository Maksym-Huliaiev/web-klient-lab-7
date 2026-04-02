import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function AdminInventoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('my_inventory');
    if (saved) {
      const items = JSON.parse(saved);
      const found = items.find(i => i.id === Number(id));
      setItem(found);
    }
  }, [id]);

  if (!item) return <div className="p-20 text-center text-white">Вантажиться інформація...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 text-white text-left min-h-screen bg-gray-900">
      <button 
        onClick={() => navigate('/admin')} 
        className="mb-8 flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
      >
        ← Повернутися до управління складом
      </button>

      <div className="flex flex-col md:flex-row gap-12 bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
        {/* Повне зображення */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden border border-gray-600 bg-black shadow-inner">
            <img 
              src={item.photo_url || 'https://via.placeholder.com/800'} 
              alt={item.inventory_name} 
              className="w-full h-auto object-contain max-h-[600px]" 
            />
          </div>
        </div>

        {/* Інформація */}
        <div className="flex-1 space-y-6">
          <div>
            <span className="text-blue-500 text-xs font-black uppercase tracking-widest">ID товару: #{item.id}</span>
            <h1 className="text-4xl font-black uppercase mt-2 leading-tight">{item.inventory_name}</h1>
          </div>
          
          <div className="h-1 w-20 bg-blue-600"></div>

          <div>
            <h3 className="text-gray-400 text-sm font-bold uppercase mb-2">Опис предмета</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {item.description || "Опис відсутній для цього об'єкта."}
            </p>
          </div>

          <div className="pt-8 flex gap-4">
            <button 
              onClick={() => navigate(`/edit/${id}`)}
              className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all"
            >
              Редагувати дані
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}