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
    // it('shows trash array', ()=> {
    //     cy.visit('http://localhost:3000/')
    //     cy.get('[data-cy = trashSelector]').click()

    // })
    it('shows first email for user to see in trash', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = trashSelector]').click()
        cy.get('[data-cy = emailContent-8]').should('exist')
    })

    it('changes inbox styling onClick', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = inboxSelector]').click()
        cy.get('[data-cy = inboxSelector]').should('have.css', 'background-color', 'rgba(186, 232, 232, 0.37)')
    })
        // it('shows inbox array', ()=> {
    //     cy.visit('http://localhost:3000/')
    //     cy.get('[data-cy = trashSelector]').click()

    // })
    it('shows first email for user to see in inbox', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = inboxSelector]').click()
        cy.get('[data-cy = emailContent-6]').should('exist')
    })

})

describe('Removes the Unread styling when it has been read', ()=> {
    it('removes the unread styling', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = trashSelector]').click()
        cy.get('[data-cy = trashSelector]').should('have.css', 'background-color', 'rgba(186, 232, 232, 0.37)')
    })
})

describe('When filtermenu is clicked the menu opens or closes', ()=> {
    it('open and closes filtermenu', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = filterMenu]').should('exist')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = filterMenu]').should('not.exist')
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

describe('Checks if the next email item is shown when the current email the user is looking at is deleted', ()=> {
    it('moves to next email on deletion', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = emailFeedItem-6]').click()
        cy.get('[data-cy = deleteButton]').click()
        cy.get('[data-cy = emailFeedItem-2').should('exist')
    })
})


