
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

// Requests

/**
 * An http responce handle callback.
 *
 * @callback responceCallback
 * @param {string} text the responce text
 * @param {number} status the responce status code
 */

/**
 * Sends one http request.
 * Stands for Request.
 *
 * @param {string} method the request method: 'POST' or 'GET'
 * @param {string} link the http url
 * @param {Object} params the request parameters
 * @param {responceCallback} callback the responce callback
 * @param {responceCallback} callbackError the responce callback on error
 */
function r (method, link, params, callback, callbackError) {
  var req = new XMLHttpRequest()

  // set the callbacks
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      if (req.status >= 200 && req.status < 300) {
        callback(req.responseText, req.status)
      } else {
        callbackError(req.responseText, req.status)
      }
    }
  }

  // create the params text from the object
  var couples = []
  for (var i in params) {
    if (params[i] !== '') {
      couples.push(encodeURIComponent(i) + '=' + encodeURIComponent(params[i]))
    } else {
      couples.push(encodeURIComponent(i))
    }
  }
  var paramstext = couples.join('&')

  // send the request
  if (method === 'POST') {
    req.open(method, link, true)
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    req.send(paramstext)
  } else {
    if (paramstext !== '') link += '?' + paramstext
    req.open(method, link, true)
    req.send()
  }
}

/**
 * Sends one http POST request.
 * Stands for RequestPost.
 *
 * @param {string} link the http url
 * @param {Object} params the request parameters
 * @param {responceCallback} callback the responce callback
 * @param {responceCallback} callbackError the responce callback on error
 */
function rp (link, params, callback, callbackError) {
  r('POST', link, params, callback, callbackError)
}

/**
 * Sends one http GET request.
 * Stands for RequestGet.
 *
 * @param {string} link the http url
 * @param {Object} params the request parameters
 * @param {responceCallback} callback the responce callback
 * @param {responceCallback} callbackError the responce callback on error
 */
function rg (link, params, callback, callbackError) {
  r('GET', link, params, callback, callbackError)
}

/**
 * Sends one http GET request without parameters.
 * Stands for RequestGetRaw.
 *
 * @param {string} link the http url
 * @param {responceCallback} callback the responce callback
 * @param {responceCallback} callbackError the responce callback on error
 */
function rgr (link, callback, callbackError) {
  r('GET', link, {}, callback, callbackError)
}

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
