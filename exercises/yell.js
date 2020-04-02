'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell (string) {
  return string.toUpperCase();
}
//* Begin of tests
const assert = require('assert');
assert.deepStrictEqual(yell('a'), 'A');
assert.deepStrictEqual(yell('Le chemin sera long !'), 'LE CHEMIN SERA LONG !');
//assert.fail('You must write your own tests');
// End of tests */
