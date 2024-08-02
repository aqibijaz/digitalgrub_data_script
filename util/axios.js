const axios = require('axios').default;
const secGovtUrl = axios.create({
    baseURL: 'https://data.sec.gov/api',
    headers: {
        'User-Agent': 'digitalgrub/1.0',
        'Accept': 'application/json'
    }
});

module.exports = { secGovtUrl }