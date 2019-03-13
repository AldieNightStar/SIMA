// CONFIG
// -----------------
var basePath = "http://aldienightstar.github.io/saver/";
// var basePath = "";

var baseSite_edit = basePath + "edit.html"
var baseSite_apply = basePath + "apply.html"

var specialPrefix = "?d="
// -----------------

function toBase(data) {
	if (!data) return "";
	var b64 = escape(data);
	return btoa(b64)
}

function fromBase(b64) {
	try {
		var data = atob(b64);
		return unescape(data);
	} catch (err) {
		console.log("Error, while calling func 'fromBase()'!", err)
	}
}

function readData() {
	var url = window.location.href;
	var indexOfSpec = url.indexOf(specialPrefix);
	if (indexOfSpec < 0) return "";
	return url.substring(indexOfSpec + specialPrefix.length);
}

function readDecodedData() {
	return fromBase(readData());
}

function makeDataUrl(data) {
	return baseSite_apply + specialPrefix + toBase(data);
}

function editDataUrl(data) {
	return baseSite_edit + specialPrefix + toBase(data);
}