const { secGovtUrl } = require('./axios');

class SecGovt {

    COMPANY_URL = '/xbrl/frames/us-gaap/AccountsPayableCurrent/USD/CY2019Q1I.json'

    constructor() { }

    async getCompanyData() {
        try {

            const response = await secGovtUrl.get(this.COMPANY_URL, {
                headers: {
                    'User-Agent': 'digitalgrub/1.0',
                    'Accept': 'application/json'
                }
            });
            console.log('response', response.data.data.length);
            return response.data;
        } catch (error) {
            console.error('Error fetching company data:', error);
            throw error;
        }
    }
}

module.exports = SecGovt


// const secGovt = new SecGovt();
// secGovt.getCompanyData()
//     .then(data => {
//         console.log('Company Data:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });