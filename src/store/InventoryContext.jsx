import { createContext, useState, useEffect } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('my_inventory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('my_inventory', JSON.stringify(items));
  }, [items]);

  // Функції для оновлення стану з будь-якого місця
  const addItem = (item) => setItems([...items, item]);
  const deleteItem = (id) => setItems(items.filter(i => i.id !== id));
  const updateItem = (updatedItem) => {
    setItems(items.map(i => i.id === updatedItem.id ? updatedItem : i));
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, deleteItem, updateItem }}>
      {children}
    </InventoryContext.Provider>
  );
};