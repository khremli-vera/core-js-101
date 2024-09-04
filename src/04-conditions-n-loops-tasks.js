/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } if (num % 3 === 0) {
    return 'Fizz';
  } if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = n;
  for (let i = n - 1; i > 0; i -= 1) {
    res *= i;
  }
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let res = 0;
  for (let i = n1; i < n2 + 1; i += 1) {
    res += i;
  }
  return res;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const array = [];
  array.push(a);
  array.push(b);
  array.push(c);
  array.sort((i, j) => i - j);
  if (array[2] < array[1] + array[0]) {
    return true;
  }
  return false;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */

function doRectanglesOverlap(rect1, rect2) {
  const cond1 = ((rect1.left <= rect2.left) && (rect2.left <= (rect1.left + rect1.width)));
  const cond2 = (rect1.top <= rect2.top);
  const cond3 = (rect2.top <= (rect1.top + rect1.height));
  const cond4 = (rect2.left <= rect1.left) && (rect1.left <= (rect2.left + rect2.width));
  const cond5 = (rect2.top <= rect1.top);
  const cond6 = (rect1.top <= (rect2.top + rect2.height));
  if ((cond1 && cond2 && cond3) || (cond4 && cond5 && cond6)) {
    return true;
  } return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  if (
    Math.sqrt((point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2) >= circle.radius
  ) {
    return false;
  }
  return true;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let subStr1 = '';
  let subStr2 = str.substring(1);
  if (!subStr2.includes(str.at(0))) { return str.at(0); }
  for (let i = 1; i < str.length; i += 1) {
    subStr1 = str.substring(0, i - 1);
    subStr2 = str.substring(i + 1);
    if ((!subStr1.includes(str.at(i))) && (!subStr2.includes(str.at(i)))) {
      return str.at(i);
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let min;
  let max;
  if (a > b) { min = b; max = a; } else { min = a; max = b; }
  const startBrackets = {
    true: '[',
    false: '(',
  };
  const endBrackets = {
    true: ']',
    false: ')',
  };
  const start = startBrackets[isStartIncluded];
  const end = endBrackets[isEndIncluded];
  const space = ', ';
  return start + min.toString() + space + max.toString() + end;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +String(num).split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const array = String(ccn).split('').reverse();
  for (let i = 0; i < array.length; i += 1) {
    array[i] = +array[i];
    if (i % 2 === 1) {
      array[i] *= 2;
      if (array[i] > 9) { array[i] -= 9; }
    }
  }
  const sum = array.reduce((a, b) => a + b, 0);
  return (sum % 10 === 0);
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const array = String(num).split('');
  let resArray = array.map((element) => Number(element));
  let sum;
  do {
    sum = resArray.reduce((a, b) => a + b, 0);
    resArray = String(sum).split('');
    resArray = resArray.map((element) => Number(element));
  } while (resArray.length !== 1);

  return resArray[0];
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const openBrackets = ['(', '{', '[', '<'];
  const closeBrackets = {
    ')': '(',
    '}': '{',
    ']': '[',
    '>': '<',
  };

  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const element = str[i];
    if (openBrackets.includes(element)) {
      stack.push(element);
    } else {
      if (stack.length === 0) { return false; }

      const passedElement = stack[stack.length - 1];
      if (closeBrackets[element] === passedElement) {
        stack.pop();
      } else { return false; }
    }
  }
  return stack.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let quotient = num;
  let res = '';
  do {
    res = (quotient % n) + res;
    quotient = Math.trunc(quotient / n);
  } while (quotient >= n);
  res = quotient + res;
  return res;
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */

function getCommonDirectoryPath(pathes) {
  const pathArrays = [];
  let commonPath = '';
  let indexArray = [];
  const slash = '/';
  for (let i = 0; i < pathes.length; i += 1) {
    pathArrays.push(pathes[i].split('/'));
  }
  const minLength = Math.min(...pathArrays.map((x) => x.length));
  for (let j = 0; j < minLength; j += 1) {
    indexArray = [];
    for (let k = 0; k < pathes.length; k += 1) {
      indexArray.push(pathArrays[k][j]);
    }
    const firstElem = indexArray[0];
    if (indexArray.every((elem) => elem === firstElem)) {
      commonPath = commonPath + indexArray[0] + slash;
    } else {
      break;
    }
  }
  return commonPath;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const j = m1.length;
  const i = m2.length;
  const k = m2[0].length;
  let res;
  const resMatrix = [];
  for (let c = 0; c < j; c += 1) {
    resMatrix.push([]);
    for (let a = 0; a < k; a += 1) {
      res = 0;
      for (let b = 0; b < i; b += 1) {
        res += m1[c][b] * m2[b][a];
      }
      resMatrix[c][a] = res;
    }
  }
  return resMatrix;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  console.log(position);
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let n = 0; n < position.length; n += 1) {
    while (position[n].length !== 3) {
      position[n].push(1);
    }
  }
  const positionFlat = position.flat();
  for (let k = 0; k < positionFlat.length; k += 1) {
    if (typeof positionFlat[k] === 'undefined') {
      positionFlat[k] = 1;
    }
  }
  for (let i = 0; i < winningCombinations.length; i += 1) {
    if ((positionFlat[winningCombinations[i][0]] === 'X') && (positionFlat[winningCombinations[i][1]] === 'X') && (positionFlat[winningCombinations[i][2]] === 'X')) {
      return 'X';
    }
    if ((positionFlat[winningCombinations[i][0]] === '0') && (positionFlat[winningCombinations[i][1]] === '0') && (positionFlat[winningCombinations[i][2]] === '0')) {
      return '0';
    }
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
