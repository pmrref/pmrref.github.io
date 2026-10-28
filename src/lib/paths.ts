/** Internal paths work at / and at a future GitHub Pages repository base. */
export function url(path = '') {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
