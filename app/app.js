const app = require('express')();

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8888, function() {
    console.log('Port 8888')
});