// export function truncate(string, max) {
//   if (string.length > max) return string.slice(0, max) + '...';
//   else return string;
// }

/**
 * Acorta un string si excede la longitud máxima permitida.
 * @param {string} texto - El string a acortar.
 * @param {number} maxLongitud - El número máximo de caracteres permitidos.
 * @returns {string} El string acortado con tres puntos al final si es más largo que `maxLongitud`, o el string original si no lo es.
 */
export function truncate(text, maxLength) {
  if (text)
    if (text.length > maxLength) return text.substring(0, maxLength) + '...';
    else return text;
}