const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cookie = require('cookie');
const nonce = require('nonce');
const querystring = require('querystring');
const request = require('request');

const apiKey = process.env.SHOPIFY_API;
const apiSecret = process.env.SHOPIFY_API_SECRET;

const scopes = 'read products';
const forwardingAddress = 'https://b48c30a1.ngrok.io'
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.send('Testing');
});

app.listen(PORT, () => {
	console.log('working now');
});

