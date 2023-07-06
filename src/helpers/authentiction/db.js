// Localstorage database
export const dbWrite = (key, value) => {
  //Localstorage
  localStorage.setItem(key, value);
}

export const getdbRead = (key) => {
  return localStorage.getItem(key);
}