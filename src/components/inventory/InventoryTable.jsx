import React from 'react';

// цей компонент малює таблицю з нашими товарами
const InventoryTable = ({ items, onEdit, onDelete, onView }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        {/* шапка таблиці за вимогами лаби */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-3">Фото</th> {/* прев'ю [cite: 57] */}
            <th className="px-6 py-3">Назва</th> {/* inventory_name [cite: 55] */}
            <th className="px-6 py-3">Опис</th> {/* description [cite: 56] */}
            <th className="px-6 py-3 text-center">Дії</th> {/* [cite: 58] */}
          </tr>
        </thead>
        <tbody>
          {/* перебираємо масив і виводимо кожен рядок */}
          {items.map((item) => (
            <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">
                <img 
                  src={item.photo_url || 'https://via.placeholder.com/50'} 
                  alt="preview" 
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                {item.inventory_name}
              </td>
              <td className="px-6 py-4">
                <span className="truncate block max-w-xs">{item.description}</span>
              </td>
              <td className="px-6 py-4 text-center">
                {/* кнопки для перегляду, редагування та видалення [cite: 59-61] */}
                <button 
                  onClick={() => onView(item.id)} 
                  className="text-blue-600 hover:underline mx-2"
                >
                  Переглянути
                </button>
                <button 
                  onClick={() => onEdit(item.id)} 
                  className="text-yellow-600 hover:underline mx-2"
                >
                  Редагувати
                </button>
                <button 
                  onClick={() => onDelete(item.id)} 
                  className="text-red-600 hover:underline mx-2"
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
};

export default InventoryTable;