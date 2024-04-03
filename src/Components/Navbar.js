// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
        <li><NavLink to="/proyecto" activeClassName="active">Proyecto</NavLink></li>
        <li><NavLink to="/colaboradores" activeClassName="active">Colaboradores</NavLink></li>
        <li><NavLink to="/acceso" activeClassName="active">Acceso</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
