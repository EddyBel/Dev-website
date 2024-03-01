/**
 * Esta función retorna un elemento aleatorio del array.
 * @param {Array} list lista de elementos
 * @returns {any} Elemento del array
 */
export function randomItem(list) {
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}

/**
 * Esta función retorna un numero aleatorio entre dos numeros
 * @param {number} min Numero minimo
 * @param {number} max Numero maximo
 * @returns {number} Numero aleatorio retornado
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
