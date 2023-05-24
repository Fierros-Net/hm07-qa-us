// eslint-disable-next-line no-undef
const config = require('../config');

test('Response code is 200 ok for DELETE', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

test('Response body contains OK True response', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.ok).toBe(true)
});
