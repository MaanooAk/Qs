/*

Selectors

 q			Query
 qi			Query by Id
 qa			Query All
 qs			Query in Sub element
 qas		Query All in Sub element
 
For each
 
 ff			For each call Function
 qaff		Query All For each call Function
 qasff		Query All in Sub element For each call Function
 fif		For each Integer from 0 call Function
  
*/

// Selectors

function qi(id) {
	return document.getElementById(id);
}	

function q(text) {
	return document.querySelector(text);
}

function qa(text) {
	return document.querySelectorAll(text);
}

function qs(sub, text) {
	return sub.querySelector(text);
}

function qas(sub, text) {
	return sub.querySelectorAll(text);
}

// For each

function ff(l, f) {
	var count = l.length;
	for(var i = 0; i < count; i += 1) f(l[i]);
}

function qaff(text, f) {
	ff(qa(text), f);
}

function qas(sub, text, f) {
	ff(qas(sub, text), f);
}

function fif(n, f) {
	for(var i = 0; i < n; i += 1) f(i);
}
