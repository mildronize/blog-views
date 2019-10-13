const verify = require('./lib/verify');
const increment = require('./lib/increment-views');

const express = require('express');
const http = require('http');

const app = express();
// app.get('/', (req, res) => {
//     console.log(req.query.id);
//     res.send('Mildronize\'s blog View Counter')
// });

app.use(function(req, res, next) {
    var allowedOrigins = ['https://mildronize.com', 'http://localhost:4000'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.header("Access-Control-Allow-Origin", "mildronize.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',  async (req, res) => {
    let id = req.query.id;
    let isAllowIncrement = true;
    try {
        verify(req, id);
    }
    catch (e) {
        console.log(e);
        isAllowIncrement = false;
    }
    if (!id) {
        const err = new Error('Missing `id` parameter');
        err.statusCode = 400;
        throw err;
    }
    const {snapshot} = await increment(id, isAllowIncrement);
    res.send({total: snapshot.val()});
});

const server = http.createServer(app);
server.listen(3000);

// module.exports = async (req, res) => {
    // const orig = req.headers.origin;
    // if (/https:\/\/*\.)?mildronize\.com/.test(orig)) {
    //     res.setHeader('Access-Control-Allow-Origin', orig);
    //     res.setHeader('Access-Control-Allow-Methods', 'GET');
    // }

//     // ensure no duplicate views
//     try {
//         verify(req);
//         const {
//             query: {id}
//         } = parse(req.url, true);
//     }
//     catch (e) {
//         console.log(e);
//     }

//     if (!id) {
//         const err = new Error('Missing `id` parameter');
//         err.statusCode = 400;
//         throw err;
//     }

//     const {snapshot} = await increment(id);
//     return {total: snapshot.val()};
// };
