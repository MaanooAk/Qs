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
