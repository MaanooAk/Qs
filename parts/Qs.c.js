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
