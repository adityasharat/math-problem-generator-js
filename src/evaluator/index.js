const IS_SAFE_REGEX = /^[\d\+\-\*x/\(\)\se%><\.^]*$/i;

export function isSafe(expression) {
  return IS_SAFE_REGEX.test(expression.trim().replace(/\s/, ''));
}

export function evaluate(expression) {

}
