/**
 * Esta función recibe un numero indefinido de arrays y retorna la suma de esos arrays sin repetir elementos.
 * Suma de conjuntos
 * @param  {...any} arrays Arrays a sumar
 * @returns {array} Array resultante
 */
export function sumSets(...arrays) {
  let results = [];
  // Iteramos sobre cada array recibido
  // Iteramos sobre cada elemento del array
  // Si el elemento no se encuentra en la lista de resultados entonces lo agregas
  for (let array of arrays) for (let element of array) if (!results.includes(element)) results.push(element);
  // Devolvemos el resultado ordenado
  return results.sort((a, b) => a - b);
}
