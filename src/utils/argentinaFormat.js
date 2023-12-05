const argentinaFormat = (number, options = {}) =>
  Intl.NumberFormat("es-AR", options).format(number);

export default argentinaFormat;
