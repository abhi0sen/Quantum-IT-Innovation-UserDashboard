import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>


      {/* <Login /> */}
    {/* <Register /> */}
    {/* <Dashboard /> */}
    </div>
  );
}

export default App;
