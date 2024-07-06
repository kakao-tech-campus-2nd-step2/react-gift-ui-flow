import { ContainerSize } from '@/types';

export function generateRandomId() {
  return `_${Math.random().toString(36).slice(2, 16)}`;
}

export function getSizeStyles(size?: ContainerSize) {
  if (!size) return '';

  if (size === 'full-width') {
    return `
      width: 100%;
      height: auto;
    `;
  }

  return `
    width: ${size.width};
    height: ${size.height};
  `;
}
