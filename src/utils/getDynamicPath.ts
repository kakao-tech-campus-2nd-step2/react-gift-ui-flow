export const getDynamicPath = (path: string, params: { [key: string]: string }): string =>
  Object.keys(params).reduce((acc, key) => acc.replace(`:${key}`, params[key]), path);
