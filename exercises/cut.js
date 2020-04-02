'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst (string) {
  return string.slice(2);
}

function cutLast (string) {
  return string.slice(0,-2);
}

function cutFirstLast (string) {
  return string.slice(2,-2);
}

//* Begin of tests
const assert = require('assert');
assert.deepStrictEqual(cutFirst('aa'), '');
assert.deepStrictEqual(cutFirst('The quick brown'), 'e quick brown');
assert.deepStrictEqual(cutLast('aa'), '');
assert.deepStrictEqual(cutLast('The quick brown'), 'The quick bro');
assert.deepStrictEqual(cutFirstLast('1234'), '');
assert.deepStrictEqual(cutFirstLast('The quick brown'), 'e quick bro');
//assert.fail('You must write your own tests');
// End of tests */
