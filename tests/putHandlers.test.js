// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "My modified kit",
	"productsList": [
		{
			"id": 5,
			"quantity": 1
		}
	]
}

test('Response code is 200 for PUT request', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

test('Response body contains True in the ok field for PUT request', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true)
});
