describe("Simple Api request tests",()=>{
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

    it('simple put request',()=> {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title: "Test post - updated via put",
                body: "This is a test post call",
                userId: 1
            }
        })
            .its('status').should('equal',200);
    })

    it('simple delete request', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
            .its('status').should('equal',200)
    })
})