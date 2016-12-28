
// Queries

/**
 * Returns an element with a specific id.
 * Stands for QueryId.
 *
 * @param {string} id the id
 * @return {Element} the element, or null
 */
function qi (id) {
  return document.getElementById(id)
}

/**
 * Returns an element that match the specified selectors.
 * Stands for Query.
 *
 * @param {string} text the selectors
 * @return {Element} the element, or null
 */
function q (text) {
  return document.querySelector(text)
}

/**
 * Returns all the elements that match the specified selectors.
 * Stands for QueryAll.
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
 * Stands for QuerySub.
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
 * Stands for QueryAllSub.
 *
 * @param {Element} sub the parrent element
 * @param {string} text the selectors
 * @return {Element[]} the array of the elements
 */
function qas (sub, text) {
  return sub.querySelectorAll(text)
}
