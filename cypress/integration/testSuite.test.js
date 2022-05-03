describe('loads the app', ()=> {
    it('loads the app', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = app]')
    })
})

describe('Check sidenav buttons works', ()=> {
    it('changes trash styling onClick', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = trashSelector]').click()
        cy.get('[data-cy = trashSelector]').should('have.css', 'background-color', 'rgba(186, 232, 232, 0.37)')
    })
    it('changes inbox styling onClick', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = inboxSelector]').click()
        cy.get('[data-cy = inboxSelector]').should('have.css', 'background-color', 'rgba(186, 232, 232, 0.37)')
    })
})

describe('Checks on click that email feed items apperance changes', ()=> {
    it('sorts by most recent', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = emailFeedItem]')
    })
})

describe('Checks the inbox and Trashcounter update with delete and restore buttons', ()=> {
    it('delete, minus 1 from inbox counter and plus 1 to trash counter', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = deleteButton]').click()
        cy.get('[data-cy = inboxCounter').should('have.text', '6')
        cy.get('[data-cy = trashCounter').should('have.text', '7')
    })
    it('restore, plus 1 from inbox counter and minus 1 to trash counter', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = trashSelector]').click()
        cy.get('[data-cy = restoreButton]').click()
        cy.get('[data-cy = inboxCounter').should('have.text', '8')
        cy.get('[data-cy = trashCounter').should('have.text', '5')
    })
})

