

var url = require('url');
var http = require('http');
var moment = require('moment');

var server = http.createServer(function(req, res) {
    var urlInfo = url.parse(req.url, true);
    var urlQuery = urlInfo["query"];
    res.writeHead(200, { 'content-type':'application/json'});
    if(urlInfo.pathname === '/api/parsetime'){
        var date = moment(urlQuery["iso"]);
        var obj = {
            "hour":date.hour(),
            "minute":date.minute(),
            "second":date.second()
        };
        res.end(JSON.stringify(obj));
    }
    else if(urlInfo.pathname === '/api/unixtime'){
        res.end(JSON.stringify({'unixtime':moment().valueOf()}));
    }
    else {
        res.end("thanks");
    }
});

// process.argv[2] = 1234;
server.listen(process.argv[2]);


