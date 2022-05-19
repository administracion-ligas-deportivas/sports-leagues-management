import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import CreateAdvise from './pages/CreateAdvise';

function App() {
  return (
    <Router>
      <Link to='/CreateAdvise'>Crear anuncio </Link>
      <Link to='/'>Home</Link>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/CreateAdvise" element={<CreateAdvise/>}/>
      </Routes>
    </Router>
  );
}

export default App;
