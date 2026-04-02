import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryGallery from './pages/InventoryGallery';
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        <nav className="bg-black/90 border-b border-gray-800 p-4 sticky top-0 z-50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <div className="text-xl font-black tracking-tighter text-blue-500"></div>
            <div className="flex gap-10 items-center">
              <Link to="/" className="text-gray-400 hover:text-white uppercase text-[10px] font-black tracking-[0.2em] transition-all">Галерея</Link>
              <Link to="/favorites" className="text-gray-400 hover:text-red-500 uppercase text-[10px] font-black tracking-[0.2em] transition-all flex items-center gap-1">Улюблені <span className="text-red-500">❤️</span></Link>
              <Link to="/admin" className="bg-blue-600 px-4 py-2 rounded-full text-white uppercase text-[10px] font-black tracking-[0.2em] hover:bg-blue-700 transition-all">Адмінка</Link>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<InventoryGallery />} />
            <Route path="/favorites" element={<Favorites />} />
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