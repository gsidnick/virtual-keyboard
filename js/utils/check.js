export function isLetterKey(locale, char) {
  const alphabet = {
    en: 'abcdefghijklmnopqrstuvwxyz',
    ru: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
  };
  return alphabet[locale].split('').includes(char);
}

export function isSpecialKey(keyShift) {
  return keyShift === null;
}
