import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Імпорт Провайдера Контексту (твоя 7-ма лаба на 100%)
import { InventoryProvider } from './store/InventoryContext';

// Імпорт сторінок користувача (8-ма лаба)
import InventoryGallery from './pages/InventoryGallery';
import Favorites from './pages/Favorites';

// Імпорт сторінок адмінки (7-ма лаба)
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

function App() {
  return (
    // Огортаємо весь додаток у Провайдер, щоб дані були доступні в кожному компоненті
    <InventoryProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white font-sans">
          
          {/* Навігаційна панель */}
          <nav className="bg-black/90 border-b border-gray-800 p-4 sticky top-0 z-50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
              <div className="text-xl font-black tracking-tighter text-blue-500 uppercase">
                Sklad MS
              </div>
              
              <div className="flex gap-8 items-center">
                <Link to="/" className="text-gray-400 hover:text-white uppercase text-[10px] font-black tracking-[0.2em] transition-all">
                  Галерея
                </Link>
                <Link to="/favorites" className="text-gray-400 hover:text-red-500 uppercase text-[10px] font-black tracking-[0.2em] transition-all flex items-center gap-1">
                  Улюблені <span className="text-red-500">❤️</span>
                </Link>
                <Link to="/admin" className="bg-blue-600 px-5 py-2 rounded-full text-white uppercase text-[10px] font-black tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  Адмінка
                </Link>
              </div>
            </div>
          </nav>

          {/* Маршрутизація проєкту (Лаби 7-8) */}
          <main className="py-8">
            <Routes>
              {/* Публічна частина (Лаба 8) */}
              <Route path="/" element={<InventoryGallery />} />
              <Route path="/favorites" element={<Favorites />} />

              {/* Адмін-панель: повний CRUD (Лаба 7) */}
              <Route path="/admin" element={<AdminInventory />} />
              <Route path="/create" element={<AdminInventoryCreate />} />
              <Route path="/edit/:id" element={<AdminInventoryEdit />} />
              <Route path="/details/:id" element={<AdminInventoryDetails />} />
            </Routes>
          </main>

          <footer className="p-8 text-center text-gray-600 text-xs border-t border-gray-800 mt-20">
            &copy; 2026 Складська система управління | Лабораторні роботи 7-8
          </footer>
        </div>
      </Router>
    </InventoryProvider>
  );
}

export default App;