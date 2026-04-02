export default function InventoryTable({ items, onView, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto bg-gray-800 rounded-xl border border-gray-700 shadow-2xl">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-900 border-b border-gray-700 text-gray-400 uppercase text-xs tracking-widest">
            <th className="p-4 font-bold">Фото</th>
            <th className="p-4 font-bold">Назва</th>
            <th className="p-4 font-bold text-center">Опис</th>
            <th className="p-4 font-bold text-right">Дії</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
              <td className="p-4">
                {/* Компактне прев'ю картинки для таблиці */}
                <img 
                  src={item.photo_url || 'https://via.placeholder.com/64?text=?'} 
                  className="w-16 h-16 object-cover rounded-lg border border-gray-600 shadow-sm"
                  alt="preview"
                />
              </td>
              <td className="p-4 font-bold text-blue-400">
                {item.inventory_name}
              </td>
              <td className="p-4 text-gray-400 text-sm max-w-xs italic truncate">
                {item.description}
              </td>
              <td className="p-4 text-right space-x-3">
                <button 
                  onClick={() => onView(item.id)} 
                  className="text-blue-500 text-xs font-black uppercase hover:text-white transition-colors"
                >
                  Деталі
                </button>
                <button 
                  onClick={() => onEdit(item.id)} 
                  className="text-orange-500 text-xs font-black uppercase hover:text-white transition-colors"
                >
                  Редагувати
                </button>
                <button 
                  onClick={() => onDelete(item.id)} 
                  className="text-red-500 text-xs font-black uppercase hover:text-white transition-colors"
                >
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}