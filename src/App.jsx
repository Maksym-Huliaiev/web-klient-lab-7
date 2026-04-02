import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// імпорт усіх сторінок
import InventoryGallery from './pages/InventoryGallery';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Оновлене зручне меню навігації */}
        <nav className="bg-gray-950 border-b border-gray-800 p-4 sticky top-0 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto flex justify-center gap-12">
            <Link 
              to="/" 
              className="text-gray-400 hover:text-blue-500 uppercase text-xs font-black tracking-widest transition-all hover:scale-105"
            >
              Галерея
            </Link>
            <Link 
              to="/admin" 
              className="text-gray-400 hover:text-blue-500 uppercase text-xs font-black tracking-widest transition-all hover:scale-105"
            >
              Адмін-панель
            </Link>
          </div>
        </nav>

        {/* Контент сторінок */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<InventoryGallery />} />
            <Route path="/admin" element={<AdminInventory />} />
            <Route path="/create" element={<AdminInventoryCreate />} />
            <Route path="/edit/:id" element={<AdminInventoryEdit />} />
            <Route path="/details/:id" element={<AdminInventoryDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;