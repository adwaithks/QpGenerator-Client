import './App.css';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import InstDasboard from './pages/InstDashboard/InstDasboard';
import TeacherDashboard from './pages/TeacherDashboard/TeacherDashboard';
import TeacherQuestionContr from './pages/TeacherQuestionContr/TeacherQuestionContr';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher/dashboard/manage" element={<TeacherQuestionContr />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/institution/dashboard" element={<InstDasboard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
