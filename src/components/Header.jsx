import React from "react";

const Header = ({ Tittle }) => {
  return (
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-3 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">ADOPTA UN PERRITO</a></li>
        <li><a href="#" class="nav-link px-2">Sea colaborar</a></li>
        <li><a href="#" class="nav-link px-2">Donaciones</a></li>
        <li><a href="#" class="nav-link px-2">Historias</a></li>
        <li><a href="#" class="nav-link px-2">Inicio</a></li>
      </ul>

      <div class="col-md-2 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Ingrese</button>
        <button type="button" class="btn btn-primary">Regístrese</button>
      </div>
    </header>
  </div>
  );
};

export default Header;
