const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require('./models');
const SecGovt = require('./util/secGovt');

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    
    const secGovt = new SecGovt();
    const data = await secGovt.getCompanyData()
    res.send(data)
  } catch (error) {
    console.log('Error =?', error)
  }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
