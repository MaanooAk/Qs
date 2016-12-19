// Queries

/**
 * Returns an element with a specific id.
 * Starts for QueryId.
 *
 * @param {string} id the id
 * @return {Element} the element, or null
 */
function qi (id) {
  return document.getElementById(id)
}

/**
 * Returns an element that match the specified selectors.
 * Starts for Query.
 *
 * @param {string} text the selectors
 * @return {Element} the element, or null
 */
function q (text) {
  return document.querySelector(text)
}

/**
 * Returns all the elements that match the specified selectors.
 * Starts for QueryAll.
 *
 * @param {string} text the selectors
 * @return {Element[]} the array of the elements
 */
function qa (text) {
  return document.querySelectorAll(text)
}

/**
 * Returns an element that match the specified selectors inside a given parrent
 * element.
 * Starts for QuerySub.
 *
 * @param {Element} sub the parrent element
 * @param {string} text the selectors
 * @return {Element} the element, or null
 */
function qs (sub, text) {
  return sub.querySelector(text)
}

/**
 * Returns all the elements that match the specified selectors inside a given
 * parrent element.
 * Starts for QueryAllSub.
 *
 * @param {Element} sub the parrent element
 * @param {string} text the selectors
 * @return {Element[]} the array of the elements
 */
function qas (sub, text) {
  return sub.querySelectorAll(text)
}
