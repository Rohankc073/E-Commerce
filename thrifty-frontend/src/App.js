import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={Login} />
        <Route path='/admin' element={AdminDashboard} />
      </Routes>
    </Router>
  );
}

export default App;
