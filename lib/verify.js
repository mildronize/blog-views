const ms = require('ms');
const requestIp = require('request-ip');

const maxDuplicateIP = 2;

// seen ips in the last hour
let data_id = {};

// reset blacklist every hour
setInterval(() => {
    data_id = {};
}, ms('1h'));

// env
const {NODE_ENV} = process.env;

module.exports = (req, id) => {
    if ('development' === NODE_ENV) {
        // ignore limits during development
        return;
    }

    const clientIp = requestIp.getClientIp(req);
    console.log("Viewer is coming via " + clientIp);
    if ( !(id in data_id)) {
        data_id[id] = {};
    }
    data_id[id][clientIp] = data_id[id][clientIp] || 0;
    console.log(data_id[id][clientIp]);
    if (data_id[id][clientIp] > maxDuplicateIP) {
        const err = new Error('Too many views per IP: ' + clientIp);
        err.statusCode = 429;
        throw err;
    }
    data_id[id][clientIp]++;
    // console.log(JSON.stringify(data_id, null, 4));
};
