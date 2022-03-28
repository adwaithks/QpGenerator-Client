import './App.css';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import SignupPage from './pages/SignupPage/SignupPage';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

//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

export default App;
