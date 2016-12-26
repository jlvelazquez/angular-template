/**
 * This is the filter function.
 *
 * @param  {String} input The filter input
 * @return {String}       The filter output
 */
export default function (input) {

  let output = input.toLowerCase();

  return output
    .split('')
    .reverse()
    .join('');
}
