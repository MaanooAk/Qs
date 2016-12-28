
// Foreach

/**
 * A function with one parameter.
 *
 * @callback lambdaOne
 * @param {Object} param the prameter
 */

/**
 * Call a function for each element inside an array.
 * Stands for ForeachcallFunction.
 *
 * @param {Object[]} l the array of objects
 * @param {lambdaOne} f the function
 */
function ff (l, f) {
  var count = l.length
  for (var i = 0; i < count; i += 1) {
    f(l[i])
  }
}

/**
 * Call a function for each element that match the specified selectors.
 * Stands for QueryAllForeachcallFunction.
 *
 * @param {string} text the selectors
 * @param {lambdaOne} f the function
 */
function qaff (text, f) {
  ff(document.querySelectorAll(text), f)
}

/**
 * Call a function for each element that match the specified selectors inside a
 * given parrent element.
 * Stands for QueryAllSubForeachcallFunction.
 *
 * @param {Element} sub the parrent element
 * @param {string} text the selectors
 * @param {lambdaOne} f the function
 */
function qasff (sub, text, f) {
  ff(sub.querySelectorAll(text), f)
}

/**
 * Call a function for each integer number from 0 to given limit.
 * Stands for ForeachIntegercallFunction.
 *
 * @param {Number} n the limit
 * @param {lambdaOne} f the function
 */
function fif (n, f) {
  for (var i = 0; i < n; i += 1) {
    f(i)
  }
}
