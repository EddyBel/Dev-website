export function truncate(string, max) {
  if (string.length > max) return string.slice(0, max) + '...';
  else return string;
}
