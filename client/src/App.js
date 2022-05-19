import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from './pages/Home';
import CreateAdvise from './pages/CreateAdvise';
import Advise from './pages/Advise';
import Login from './pages/Login';
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/Home" element={<Home/>}/>
          <Route path="/CreateAdvise" element={<CreateAdvise/>}/>
          <Route path="/Advise/:id" element={<Advise />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
