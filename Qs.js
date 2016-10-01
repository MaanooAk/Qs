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
 
Requests
 
 r			Request 
 rp			Request Post
 rg			Request Get
 rgr		Request Get Raw link

Other

 cloneTemplate
 elementFromHtml
 onEnter
 onScrollNearEnd
 
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
	for(var i=0; i<count; i+=1) f(l[i]);
}

function qaff(text, f) {
	ff(qa(text), f);
}

function qas(sub, text, f) {
	ff(qas(sub, text), f);
}

function fif(n, f) {
	for(var i=0; i<n; i+=1) f(i);
}


// Requests

function r(method, link, params, callback, callback_error) {
	
	var req = new XMLHttpRequest();
	
	req.onreadystatechange = function() {
		if(req.readyState == 4) {
			if (req.status >= 200 && req.status < 300) {
				callback(req.responseText, req.status);
			}else{
				callback_error(req.responseText, req.status);
			}
		}
	};
	
	var couples = [];
	for(var i in params) {
		if(params[i]!="") couples.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]));
		else couples.push(encodeURIComponent(i));
	}
	var paramstext = couples.join("&");
	
	if(method == "POST") {
		req.open(method, link, true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");	
		req.send(paramstext);
	}else{
		if(paramstext!="") link += "?" + paramstext;	
		req.open(method, link, true);
		req.send();
	}
}

function rp(link, params, callback, callback_error) {	
	r("POST", link, params, callback, callback_error);	
}

function rg(link, params, callback, callback_error) {	
	r("GET", link, params, callback, callback_error);	
}

function rgr(link, callback, callback_error) {
	r("GET", link, {}, callback, callback_error);
}

// Other

function cloneTemplate(id) {
	return qi(id).content.children[0].cloneNode(true);
}

function elementFromHtml(text) {
	var tmp = document.createElement("div");
	tmp.innerHTML = text;
	return tmp.children[0];
}

function onEnter(ele, f) {	
	ele.addEventListener("keyup", function (e) {
		if (e.keyCode === 13) f();
	});	
}

function onScrollNearEnd(limit, f) {	
	window.onscroll = function() {
		if(window.innerHeight + window.scrollY >= document.body.offsetHeight - limit) {
			f();
		}
	}
}