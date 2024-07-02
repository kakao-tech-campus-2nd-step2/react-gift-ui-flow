// eslint-disable-next-line import/prefer-default-export
export function generateRandomId() {
  return `_${Math.random().toString(36).slice(2, 16)}`;
}
