let id = parseInt(window.localStorage.getItem('idMax') || '0', 10);
export const createId = (): number => {
  id += 1;
  window.localStorage.setItem('idMax', JSON.stringify(id));
  return id;
};