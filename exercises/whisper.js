'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper (string) {
  return '*' + string.toLowerCase() + '*';
}
//* Begin of tests
const assert = require('assert');
assert.deepStrictEqual(whisper('A'), '*a*');
//assert.fail('You must write your own tests');
// End of tests */
