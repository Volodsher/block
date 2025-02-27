const express = require('express');
const https = require('https');
const router = express.Router();

const API_KEY = process.env.EXCHANGE_RATE_API_KEY; // Access API key from .env
const API_URL = 'https://v6.exchangerate-api.com/v6/';
console.log('API Key:', API_KEY);

router.get('/convert', (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res
      .status(400)
      .json({ error: 'Missing parameters (from, to, amount)' });
  }

  const url = `${API_URL}${API_KEY}/latest/${from.toUpperCase()}`;

  https
    .get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => (data += chunk));
      response.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (!json.conversion_rates[to.toUpperCase()]) {
            return res.status(400).json({ error: 'Invalid currency code' });
          }

          const rate = json.conversion_rates[to.toUpperCase()];
          const convertedAmount = (parseFloat(amount) * rate).toFixed(2);

          res.json({
            from,
            to,
            amount: parseFloat(amount),
            convertedAmount,
            rate,
          });
        } catch (error) {
          res
            .status(500)
            .json({ error: 'Error processing exchange rate data' });
        }
      });
    })
    .on('error', (err) => {
      console.error('Currency conversion error:', err.message);
      res.status(500).json({ error: 'Error fetching exchange rates' });
    });
});

module.exports = router;
