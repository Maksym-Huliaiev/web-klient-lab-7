import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminInventory from './pages/AdminInventory';

// головний компонент з маршрутизацією
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* вказуємо, що на головній сторінці показувати адмінку */}
          <Route path="/" element={<AdminInventory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;