var express = require('express'); //Include Express  
var app = new express(); // Creating instance   
var port = 3000; // Setting port for the application   

// App will listen on port and throw error if app can't be reached.
app.listen(port, function(err) {  
    if (typeof(err) == "undefined") {  
        console.log('Your application is running on : ' + port + ' port');  
    }  
});
app.get('/home', function(req, res) {  
    // Insert connection to home page  
});  
app.get('/home/createSession', function(req, res) {  
    // Insert connection to createSession page
});
app.get('/home/joinSession', function(req, res) {
    // Insert connection to joinSession page
});
app.get('/main', function(req, res) {
    // Insert connection to main page (swiping)
});