export function add(...args) {
  return args.reduce((sum, x) => {
     return sum + x;
   }, 0);
};

export function sub(...args) {
  return args.reduce((diff, x) => {
     return diff - x;
   }, 0);
};

export function mul(...args) {
  return args.reduce((product, x) => {
     return product * x;
   }, 1);
};
