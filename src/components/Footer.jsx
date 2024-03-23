import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 ADOPTA UN PERRITO, desarrollado por Guillermo Pérez Lapolla</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary"></a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">CONTACTO</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">UBICACIÓN</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">SOBRE NOSOTROS</a></li>
    </ul>
  </footer>
</div>
    </footer>
  );
};

export default Footer;

