import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

// ось ця назва має збігатися з тим, що ти імпортуєш
export const inventoryApi = {
  getAll: () => axios.get(`${API_URL}/inventory`),
  // ... інші методи
};