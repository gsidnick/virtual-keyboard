export function setLocale(value) {
  localStorage.setItem('locale', value);
}

export function getLocale() {
  return localStorage.getItem('locale');
}
