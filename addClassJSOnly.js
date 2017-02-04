var loc = window.location.href;
var output  = loc.split('/').pop().split('.').shift()
document.body.className="page" + output;
