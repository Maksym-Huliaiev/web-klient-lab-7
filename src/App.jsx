import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// імпортуємо сторінку галереї (це вже лаба 8)
import InventoryGallery from './pages/InventoryGallery';

// імпортуємо всі сторінки адмінки (лаба 7)
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

function App() {
  return (
    <Router>
      {/* проста навігація зверху, щоб ти міг перемикатися між галереєю та адмінкою */}
      <nav className="bg-gray-800 p-4 text-white flex gap-6 shadow-lg">
        <Link to="/" className="hover:text-blue-400 transition-colors font-medium">
          головна (галерея)
        </Link>
        <Link to="/admin" className="hover:text-blue-400 transition-colors font-medium">
          адмін-панель
        </Link>
      </nav>

      <div className="min-h-screen bg-gray-50 p-4">
        <Routes>
          {/* публічна частина: галерея для користувачів */}
          <Route path="/" element={<InventoryGallery />} />

          {/* адмінська частина (CRUD операції) */}
          <Route path="/admin" element={<AdminInventory />} />
          <Route path="/create" element={<AdminInventoryCreate />} />
          <Route path="/edit/:id" element={<AdminInventoryEdit />} />
          <Route path="/details/:id" element={<AdminInventoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;