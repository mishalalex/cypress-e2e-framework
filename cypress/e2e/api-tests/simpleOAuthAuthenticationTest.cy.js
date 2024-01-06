describe.skip('Simple OAuth Authentication Test',() => {
    let bearerToken = '';
    before('A simple Oauth authentication test', () => {
        const clientId = '74744e504ecc97dec860';
        const clientSecret = '0b1bb057f8c3e7c95563f0f3a28b2a20ae9c4934';
        const clientCode = '277ae688d109aadc92c2';
        // 1. get oauth 2.0 access token
        cy.request({
            method:'POST',
            url:'https://github.com/login/oauth/access_token',
            qs: {
                client_id: clientId,
                client_secret: clientSecret,
                code: clientCode
            }
        })
            .then((response) => {
                //access_token=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&scope=&token_type=bearer
                expect(response.status).to.eq(200)
                expect(response.body).to.contain('scope=&token_type=bearer')
                const params = response.body.split('&');
                bearerToken = params[0].split('=')[1]
                console.log(`This is the bearer token: ${bearerToken}`)
                cy.log("Generated toke: " + bearerToken)
            })
    })
    it('send a request to the github to retrieve all repos using the access token', () => {
        // 1. get oauth 2.0 access token
        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer ' + bearerToken
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body[1].id).to.eq(430858018)
            })
    })
})