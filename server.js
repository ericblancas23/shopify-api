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

//get testing route
app.get('/', (req, res) => {
	res.send('Testing');
});

//port listening
app.listen(PORT, () => {
	console.log('working now');
});

//get shopify api
app.get('/shopify', (req, res) => {
	const shop = req.query.shop;

	if(shop) {
			const state = nonce();
			const redirectUri = forwarding_address;
			const installURL = 'https://' + shop + '/admin/oauth/authorize?client_id=' + 
			apiKey + '&scope=' + scopes + '&state' + state + '&redirect_uri' + redirectUri;

			res.cookie('state', state);
			res.redirect(installURL);
	} else {
		return res.status(404).send('Missing shop parameters');
	}
});
