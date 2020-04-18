'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase (sentence) {
  const words = sentence.split(' ');
  const newSentence = [];
  let upper = '';
  let lower = '';

  for (const string of words) {
    if (string.length > 1) {
      upper = string.slice(0, 1).toUpperCase();
      lower = string.slice(-(string.length - 1)).toLowerCase();
    } else {
      upper = string.toUpperCase();
      lower = '';
    }
    newSentence.push(upper + lower + ' ');
  }
  const result = ''.concat(...newSentence);
  return result.trim();
}

//* Begin of tests

const assert = require('assert');
assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?');

// assert.fail('You must write your own tests');
// End of tests */

