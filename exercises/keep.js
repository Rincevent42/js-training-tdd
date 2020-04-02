'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst (string) {
  return string.slice(0,2);
}

function keepLast (string) {
  return string.slice(-2);
}

function keepFirstLast (string) {
  return string.slice(2,4);
}

//* Begin of tests
const assert = require('assert');
assert.deepStrictEqual(keepFirst('The quick brown'), 'Th');
assert.deepStrictEqual(keepLast('The quick brown'), 'wn');
assert.deepStrictEqual(keepFirstLast('The quick brown'), 'e ');
//assert.fail('You must write your own tests');
// End of tests */
