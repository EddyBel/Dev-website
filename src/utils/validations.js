/**
 * Esta función toma un numero de variables y valida que tengan algun valor
 * @param  {...any} values Variables a validar.
 * @returns {boolean} Resultado de la validación.
 */
export function validateValues(...values) {
  let result = true;
  for (let value of values) {
    if (value === null || value === undefined) {
      result = false;
      break;
    }
  }
  // Retorna el resultado
  return result;
}

/**
 * Esta función toma un numero de variables y valida que no sean objetos vacios.
 * @param  {...any} objetos Objetos a validar
 * @returns {boolean} Resultado de la validación
 */
export function validateObjectsNotNull(...objects) {
  for (const obj of objects) {
    if (Object.keys(obj).length === 0) {
      return false;
    }
  }
  return true; // Ningún objeto está vacío
}
