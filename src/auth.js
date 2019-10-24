const fetch = require("node-fetch")
const base64 = require('base-64');
global.Headers = fetch.Headers;

let url = 'http://mars.theblueground.net/api/auth/login';
let email = 'ben@2041.uk';
let password = 'idietoosoon';

let headers = new Headers();

headers.set('Authorization', 'Basic ' + base64.encode(email + ":" + password));

fetch(url, {method:'GET',
        headers: headers,
       })
.then(response => response.json())
.then(json => console.log(json));

function parseJSON(response) {
return response.json()
}