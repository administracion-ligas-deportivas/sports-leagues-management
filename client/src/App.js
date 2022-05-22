import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import CreateAdvise from './pages/CreateAdvise';
import Advise from './pages/Advise';
import Login from './pages/Login';
import Register from './pages/Register'
import {AuthContext} from './helpers/AuthContext';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Button from './components/Button';
import Label from './components/Label';
import PageNotFound from './pages/PageNotFound';


/**
 * 
 * En react se puede hacer un "if" con 
 * { condición && (
 *    resultado 
 * )}
 * 
 * o un if else
 * { condición ? (
 *    resultado if
 * ):(
 *    resultado else 
 * )}
 * 
 * Las etiquetas <Link> deben tener el atributo to="/ruta" Para funcionar!!!!!!!! (no dará errores en la compilación pero si al momento de ver la página)
 * 
 */

function App() {
  //const navigate = useNavigate();
  const [autState, setAuthState] = useState({
    nombre:'',
    id: 0,
    correo: '',
    status: false
  });

  useEffect(() => {
    axios.get("http://localhost:3001/auth/verify", {
      headers: {
      accessToken: localStorage.getItem("accessToken")
    }
    }).then((response) => {
      if(response.data.error) setAuthState({ nombre: "", id: 0, correo: '', status: false });
      else setAuthState(
        {
          nombre: response.data.nombre,
          id: response.data.id,
          correo: response.userEmail,
          status: true
        }
      );
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ nombre: "", id: 0, correo: '', status: false });
    //navigate('/');
  };

  return (
    <AuthContext.Provider value={{autState, setAuthState}}>
      <Router>
        {autState.status && (
          <>
            <Label>{autState.nombre}</Label>
            <Button onClick={logout}>Cerrar sesión</Button>
          </>
        )}
        <Routes>
            {autState.status ? (
              <>
                <Route exact path="/Home" element={<Home/>}/>
                <Route path="/CreateAdvise" element={<CreateAdvise/>}/>
                <Route path="/Advise/:id" element={<Advise />}/>
              </>
            ): (
              <>
                <Route path="/" element={<Login />}/>
                <Route path="/Register" element={<Register />}/>
                
              </>
            )}
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;
