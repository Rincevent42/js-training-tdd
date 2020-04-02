'use strict';

/*
 * Create a `sentence` function that takes an array of strings
 * and return a string of all the element separated by a space
 *
 */

// Your code:

function sentence (array) {
  let line = '';
  for (let i=0 ; i < array.length ; i++) {
    line += array[i];
    if (i < array.length -1) {
      line += ' ';
    }
  }
  return line;
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof sentence, 'function');
assert.strictEqual(sentence.length, 1);
assert.deepStrictEqual(sentence([ 'a', 'b', 'c' ]), 'a b c');
assert.deepStrictEqual(sentence([ 'a', '1', 'c' ]), 'a 1 c');
assert.deepStrictEqual(sentence([ 'a', '1', 'c', 'd', 'e', 'f' ]), 'a 1 c d e f');
assert.deepStrictEqual(sentence([ 'wol.lol', 'lo,lol' ]), 'wol.lol lo,lol');
// End of tests */
