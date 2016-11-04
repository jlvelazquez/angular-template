export default function (input) {

    let output = input.toLowerCase();

    return output
        .replace(/a/g, '4')
        .replace(/e/g, '3')
        .replace(/i/g, '1')
        .replace(/o/g, '0');
}
