$(document).ready(function(){

// add  Unique class for All pages
var loc = window.location.href;
var output  = loc.split('/').pop().split('.').shift()
$("body").addClass("page" + output)

})
