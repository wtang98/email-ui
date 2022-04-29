describe('page items loads', ()=> {
    it('loads form successfully', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = home]')
    })
})