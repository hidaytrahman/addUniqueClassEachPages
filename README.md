# Add Unique Class on Body using JQuery

Add unique Class on All pages using JQuery/JavaScript only

### JavaScript only
```
var loc = window.location.href;
var output  = loc.split('/').pop().split('.').shift()
document.body.className="page" + output;
```

### jQuery
```
var loc = window.location.href;
var output  = loc.split('/').pop().split('.').shift();
$("body").addClassN("page" + output);
```

[Demo](https://rawgit.com/hidaytrahman/addUniqueClassEachPages/master/index.html)


