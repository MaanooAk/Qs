/*

Requests
 
 r			Request 
 rp			Request Post
 rg			Request Get
 rgr		Request Get Raw link

*/

// Requests

function r(method, link, params, callback, callback_error) {
	
	var req = new XMLHttpRequest();
	
	req.onreadystatechange = function() {
		if(req.readyState == 4) {
			if (req.status >= 200 && req.status < 300) {
				callback(req.responseText, req.status);
			} else {
				callback_error(req.responseText, req.status);
			}
		}
	};
	
	var couples = [];
	for(var i in params) {
		if(params[i] != "") couples.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]));
		else couples.push(encodeURIComponent(i));
	}
	var paramstext = couples.join("&");
	
	if(method == "POST") {
		req.open(method, link, true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");	
		req.send(paramstext);
	}else{
		if(paramstext != "") link += "?" + paramstext;	
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
