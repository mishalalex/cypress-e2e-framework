describe('Digest Authentication', () => {
    it('A simple digest authentication test', () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password',
                method: 'digest'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.authenticated).to.eq(true);
            })
    })
})