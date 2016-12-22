// Classes

/**
 * Adds and removes classes from an element.
 * Stands for CLaSses.
 *
 * @param {Element} ele the element
 * @param {string[]} add the classes to add
 * @param {string[]} remove the classes to remove
 */
function cls (ele, add, remove) {
  var addLength = add.length
  var removeLength = remove.length

  var i
  for (i = 0; i < addLength; i += 1) {
    ele.classList.add(add[i])
  }
  for (i = 0; i < removeLength; i += 1) {
    ele.classList.remove(remove[i])
  }
}

/**
 * Adds and removes classes for each element that match the specified selectors.
 * Stands for QueryAllCLaSses.
 *
 * @param {string} text the selectors
 * @param {string[]} add the classes to add
 * @param {string[]} remove the classes to remove
 */
function qacls (text, add, remove) {
  var l = document.querySelectorAll(text)
  var count = l.length
  for (var i = 0; i < count; i += 1) {
    cls(l[i], add, remove)
  }
}

/**
 * Adds and removes classes for each element that match the specified selectors
 * inside a given parrent element.
 * Stands for QueryAllSubCLaSses.
 *
 * @param {Element} sub the parrent element
 * @param {string} text the selectors
 * @param {string[]} add the classes to add
 * @param {string[]} remove the classes to remove
 */
function qascls (sub, text, add, remove) {
  var l = sub.querySelectorAll(text)
  var count = l.length
  for (var i = 0; i < count; i += 1) {
    cls(l[i], add, remove)
  }
}

