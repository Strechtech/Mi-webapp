import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importa componentes y utilidades de react-router-dom para manejar la navegación en la aplicación
import Navbar from './Components/Navbar'; // Importa el componente Navbar
import Inicio from './Components/Inicio'; // Importa el componente Inicio
import Proyecto from './Components/Proyecto'; // Importa el componente Proyecto
import Colaboradores from './Components/Colaboradores'; // Importa el componente Colaboradores
import Logueo from './Components/Logueo'; // Importa el componente Logueo

import './main.css'; // Importa el archivo CSS para estilos globales de la aplicación

function App() {
  return (
    <div>
      <BrowserRouter> {/* Enrutador principal para la navegación */}
        <Navbar /> {/* Componente de navegación */}
        <div className="container"> {/* Contenedor principal de la aplicación */}
          <Routes> {/* Definición de rutas */}
            <Route path="/" element={<Inicio />} /> {/* Ruta para la página de inicio */}
            <Route path="/proyecto" element={<Proyecto />} /> {/* Ruta para la página del proyecto */}
            <Route path="/colaboradores" element={<Colaboradores />} /> {/* Ruta para la página de colaboradores */}
            {/* Ruta para mostrar el componente Logueo */}
            <Route path="/acceso" element={<Logueo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
