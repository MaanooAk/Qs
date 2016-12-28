
// Other

/**
 * Clone the first (and only) child of a template element.
 *
 * @param {string} id the id of the template element
 * @return {Element} the new element
 */
function cloneTemplate (id) {
  return document.getElementById(id).content.children[0].cloneNode(true)
}

/**
 * Create an element from html text.
 *
 * @param {string} text the html text
 * @return {Element} the new element
 */
function elementFromHtml (text) {
  var tmp = document.createElement('div')
  tmp.innerHTML = text
  return tmp.children[0]
}

/**
 * An event callback.
 *
 * @callback callbackEnter
 * @param {Event} e the keydown event
 */

/**
 * Adds a listener to an element for the keydown event of the enter character.
 *
 * @param {Element} ele the element
 * @param {callbackEnter} f the callback
 */
function onEnter (ele, f) {
  ele.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      f(e)
      e.preventDefault()
    }
  })
}

/**
 * An event callback.
 *
 * @callback callbackScrollNearEnd
 * @param {number} offset offset of the limit
 */

/**
 * Adds a listener for scrolling near the end of the page.
 * Near is defined by a number of pixels from the end of the page.
 *
 * @param {number} limit the number of pixels
 * @param {callbackScrollNearEnd} f the callback
 */
function onScrollNearEnd (limit, f) {
  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - limit) {
      f(window.innerHeight + window.scrollY - document.documentElement.scrollHeight + limit)
    }
  }
}
