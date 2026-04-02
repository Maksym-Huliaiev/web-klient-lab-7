import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// імпортуємо всі наші сторінки
import AdminInventory from './pages/AdminInventory';
import AdminInventoryCreate from './pages/AdminInventoryCreate';
import AdminInventoryEdit from './pages/AdminInventoryEdit';
import AdminInventoryDetails from './pages/AdminInventoryDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          {/* головна сторінка зі списком */}
          <Route path="/" element={<AdminInventory />} />
          
          {/* сторінка створення */}
          <Route path="/create" element={<AdminInventoryCreate />} />
          
          {/* динамічні маршрути з :id */}
          <Route path="/edit/:id" element={<AdminInventoryEdit />} />
          <Route path="/details/:id" element={<AdminInventoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;