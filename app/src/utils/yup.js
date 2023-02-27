// https://github.com/jquense/yup/issues/971#issuecomment-675528093
const transformNaN = (value) => (isNaN(value) ? undefined : value);

export {
  transformNaN,
};
