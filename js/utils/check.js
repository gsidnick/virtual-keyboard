const alphabet = {
  en: 'abcdefghijklmnopqrstuvwxyz',
  ru: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
};

export function isLetterKey(locale, char) {
  return alphabet[locale].split('').includes(char);
}

export function isSpecialKey(keyShift) {
  return keyShift === null;
}

export function isSymbolKey(locale, char) {
  return !alphabet[locale].split('').includes(char);
}
