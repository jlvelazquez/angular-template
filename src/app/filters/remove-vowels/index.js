/**
 * This is the filter function.
 *
 * @param  {String} input The filter input
 * @return {String}       The filter output
 */
export default function (input) {

  let output = input.toLowerCase();

  return output
    .replace(/a/g, '')
    .replace(/e/g, '')
    .replace(/i/g, '')
    .replace(/o/g, '')
    .replace(/u/g, '');
}
