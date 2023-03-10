import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import './App.css';
import { formGroupClasses } from '@mui/material';
import Login from './paginas/login/Login';

function App() { 
  return(
    <Router>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes> // Antigo Switch
               <Route path="/" element={<Login />} />
                 <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                   </Routes>
                   <Route path='cadastrousuario'>
                    <CadastroUsuario/>
                   <Route/>
          </div>
    <Footer />
    
    </Router>
    )
  }
    export default App;
