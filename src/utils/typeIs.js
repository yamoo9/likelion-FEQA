function typeIs(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8, -1);
}

export default typeIs;

// export const isFunction = (data) => typeIs(data).includes('function');
// export const isObject = (data) => typeIs(data).includes('object');
// export const isArray = (data) => typeIs(data).includes('array');
// export const isDate = (data) => typeIs(data).includes('date');
// export const isNumeric = (data) =>
//   typeIs(data).includes('number') && !Number.isNaN(data);
