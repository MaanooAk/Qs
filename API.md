

<!-- Start Qs.js -->

## qi(id)

Returns an element with a specific id.
Stands for QueryId.

### Params:

* **string** *id* the id

### Return:

* **Element** the element, or null

## q(text)

Returns an element that match the specified selectors.
Stands for Query.

### Params:

* **string** *text* the selectors

### Return:

* **Element** the element, or null

## qa(text)

Returns all the elements that match the specified selectors.
Stands for QueryAll.

### Params:

* **string** *text* the selectors

### Return:

* **Array.\<Element>** the array of the elements

## qs(sub, text)

Returns an element that match the specified selectors inside a given parrent
element.
Stands for QuerySub.

### Params:

* **Element** *sub* the parrent element
* **string** *text* the selectors

### Return:

* **Element** the element, or null

## qas(sub, text)

Returns all the elements that match the specified selectors inside a given
parrent element.
Stands for QueryAllSub.

### Params:

* **Element** *sub* the parrent element
* **string** *text* the selectors

### Return:

* **Array.\<Element>** the array of the elements

A function with one parameter.

### Params:

* **Object** *param* the prameter

## ff(l, f)

Call a function for each element inside an array.
Stands for ForeachcallFunction.

### Params:

* **Array.\<Object>** *l* the array of objects
* **lambdaOne** *f* the function

## qaff(text, f)

Call a function for each element that match the specified selectors.
Stands for QueryAllForeachcallFunction.

### Params:

* **string** *text* the selectors
* **lambdaOne** *f* the function

## qasff(sub, text, f)

Call a function for each element that match the specified selectors inside a
given parrent element.
Stands for QueryAllSubForeachcallFunction.

### Params:

* **Element** *sub* the parrent element
* **string** *text* the selectors
* **lambdaOne** *f* the function

## fif(n, f)

Call a function for each integer number from 0 to given limit.
Stands for ForeachIntegercallFunction.

### Params:

* **Number** *n* the limit
* **lambdaOne** *f* the function

## cls(ele, add, remove)

Adds and removes classes from an element.
Stands for CLaSses.

### Params:

* **Element** *ele* the element
* **Array.\<string>** *add* the classes to add
* **Array.\<string>** *remove* the classes to remove

## qacls(text, add, remove)

Adds and removes classes for each element that match the specified selectors.
Stands for QueryAllCLaSses.

### Params:

* **string** *text* the selectors
* **Array.\<string>** *add* the classes to add
* **Array.\<string>** *remove* the classes to remove

## qascls(sub, text, add, remove)

Adds and removes classes for each element that match the specified selectors
inside a given parrent element.
Stands for QueryAllSubCLaSses.

### Params:

* **Element** *sub* the parrent element
* **string** *text* the selectors
* **Array.\<string>** *add* the classes to add
* **Array.\<string>** *remove* the classes to remove

An http responce handle callback.

### Params:

* **string** *text* the responce text
* **number** *status* the responce status code

## r(method, link, params, callback, callbackError)

Sends one http request.
Stands for Request.

### Params:

* **string** *method* the request method: 'POST' or 'GET'
* **string** *link* the http url
* **Object** *params* the request parameters
* **responceCallback** *callback* the responce callback
* **responceCallback** *callbackError* the responce callback on error

## rp(link, params, callback, callbackError)

Sends one http POST request.
Stands for RequestPost.

### Params:

* **string** *link* the http url
* **Object** *params* the request parameters
* **responceCallback** *callback* the responce callback
* **responceCallback** *callbackError* the responce callback on error

## rg(link, params, callback, callbackError)

Sends one http GET request.
Stands for RequestGet.

### Params:

* **string** *link* the http url
* **Object** *params* the request parameters
* **responceCallback** *callback* the responce callback
* **responceCallback** *callbackError* the responce callback on error

## rgr(link, callback, callbackError)

Sends one http GET request without parameters.
Stands for RequestGetRaw.

### Params:

* **string** *link* the http url
* **responceCallback** *callback* the responce callback
* **responceCallback** *callbackError* the responce callback on error

## cloneTemplate(id)

Clone the first (and only) child of a template element.

### Params:

* **string** *id* the id of the template element

### Return:

* **Element** the new element

## elementFromHtml(text)

Create an element from html text.

### Params:

* **string** *text* the html text

### Return:

* **Element** the new element

An event callback.

### Params:

* **Event** *e* the keydown event

## onEnter(ele, f)

Adds a listener to an element for the keydown event of the enter character.

### Params:

* **Element** *ele* the element
* **callbackEnter** *f* the callback

An event callback.

### Params:

* **number** *offset* offset of the limit

## onScrollNearEnd(limit, f)

Adds a listener for scrolling near the end of the page.
Near is defined by a number of pixels from the end of the page.

### Params:

* **number** *limit* the number of pixels
* **callbackScrollNearEnd** *f* the callback

<!-- End Qs.js -->

