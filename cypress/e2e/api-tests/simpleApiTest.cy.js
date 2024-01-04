describe("HTTP requests",()=>{
    it('simple get request', ()=> {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal',200)
    })
    it('simple post request', ()=> {
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: "Test post",
                body: "This is a test post call",
                userId: 1
            }
        })
            .its('status')
            .should('equal',201)
    })
})