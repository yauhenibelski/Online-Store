export function formatText(string: string) {
  const str = string[0].toLocaleUpperCase() + string.slice(1, string.length);
  return str.replace('-', ' ');
}
