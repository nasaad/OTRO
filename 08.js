function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

  if (Math.floor(numero) === numero){
    return true;
  }else{
    return false;
  }

//return numero.Mathfloor(numero) === numero;

}

module.exports = esNumeroEntero;