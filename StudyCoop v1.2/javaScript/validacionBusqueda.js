function validarParametroBusqueda(parametroBusqueda){
  patron = /^[A-Za-z ñÑ]{3,}$/;
  alert(patron.test(parametroBusqueda));
  return patron.test(parametroBusqueda);
}
