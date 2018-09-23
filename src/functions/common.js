export function add(...args) {
  return args.reduce((sum, x) => {
     return sum + x;
   }, 0);
};

export function sub(...args) {
  if (args.length === 0) {
    return 0;
  }
  if (args.length === 1) {
    return 0 - args[0];
  }
  return args.reduce((diff, x) => {
     return diff - x;
   }, args[0] * 2);
};

export function mul(...args) {
  return args.reduce((product, x) => {
     return product * x;
   }, 1);
};

export function div(...args) {
  return args.reduce((q, x) => {
     return q / x;
   }, 1);
};
