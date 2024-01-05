describe('Bearer token api tests', () => {
    let authenticationToken = null;
    let orderId = null;

    before("0 - create the bearer token for the test account", () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {'Content-Type':'application/json'},
            body: {
                clientName: Math.random().toString(5).substring(2)+' Company',
                clientEmail: Math.random().toString(5).substring(2)+"@yopmail.com"
            }
        })
            .then((response) => {
                authenticationToken = response.body.accessToken;
            });
    });

    it("Create a new order using the bearer token created", () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type':'application/json',
                'Authorization':authenticationToken
            },
            body: {
                bookId: 1,
                customerName: Math.random().toString(5).substring(2)
            }
        })
            .then((response) => {
                orderId = response.body.orderId;
                expect(response.status).to.eq(201);
                expect(response.body.created).to.eq(true);
            });
    });

    it('Get all orders for the user and count the number of orders created which should be one.', () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type':'application/json',
                'Authorization':authenticationToken
            },
            cookies: {
                'cookieName': 'optional_cookie'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).has.length(1);
            })
    })
})