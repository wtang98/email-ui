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
    it('shows trash array', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = trashSelector]').click()
        cy.get('[data-cy = emailFeedItem-1]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-2]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-3]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-4]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-5]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-6]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-7]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-8]').should('exist')
        cy.get('[data-cy = emailFeedItem-9]').should('exist')
        cy.get('[data-cy = emailFeedItem-10]').should('exist')
        cy.get('[data-cy = emailFeedItem-11]').should('exist')
        cy.get('[data-cy = emailFeedItem-12]').should('exist')
        cy.get('[data-cy = emailFeedItem-13]').should('exist')
    })
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
    it('shows inbox array', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = inboxSelector]').click()
        cy.get('[data-cy = emailFeedItem-1]').should('exist')
        cy.get('[data-cy = emailFeedItem-2]').should('exist')
        cy.get('[data-cy = emailFeedItem-3]').should('exist')
        cy.get('[data-cy = emailFeedItem-4]').should('exist')
        cy.get('[data-cy = emailFeedItem-5]').should('exist')
        cy.get('[data-cy = emailFeedItem-6]').should('exist')
        cy.get('[data-cy = emailFeedItem-7]').should('exist')
        cy.get('[data-cy = emailFeedItem-8]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-9]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-10]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-11]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-12]').should('not.exist')
        cy.get('[data-cy = emailFeedItem-13]').should('not.exist')
    })
    it('shows first email for user to see in inbox', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = inboxSelector]').click()
        cy.get('[data-cy = emailContent-6]').should('exist')
    })
})

describe('Filtermenu tests', ()=> {
    it('open and closes filtermenu', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = filterMenu]').should('exist')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = filterMenu]').should('not.exist')
    })
    it('urgent filter only shows urgent tagged inbox items', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = inboxSelector]').click()
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = urgentFilter]').click()
        cy.get('[data-cy = emailFeedItem-2]').should('exist')
        cy.get('[data-cy = emailFeedItem-4]').should('exist')
        cy.get('[data-cy = emailFeedItem-7]').should('exist')
    })
    it('urgent filter only shows urgent tagged trash items', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = trashSelector]').click()
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = urgentFilter]').click()
        cy.get('[data-cy = emailFeedItem-11]').should('exist')
        cy.get('[data-cy = emailFeedItem-12]').should('exist')
    })
    it('urgent filter updates sideNav counter', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = urgentFilter]').click()
        cy.get('[data-cy = inboxCounter').should('have.text', '3')
        cy.get('[data-cy = trashCounter').should('have.text', '2')
    })
    it('When urgent and sort shows the oldest email that has an urgent tag', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = urgentFilter]').click()
        cy.get('[data-cy = sortBy]').select('2')
        cy.get('[data-cy = emailContent-4]').should('exist')
    })
    it('shows the oldest email when you sort by oldest', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = sortBy]').select('2')
        cy.get('[data-cy = emailContent-5]').should('exist')
    })
    it('shows thevlatest when sorting by more recent', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = filterMenuButton]').click()
        cy.get('[data-cy = sortBy]').select('1')
        cy.get('[data-cy = emailContent-6]').should('exist')
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

describe('Checks if the next email item is shown when the current email the user is looking at is deleted/ restored', ()=> {
    it('moves to next email on deletion', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = deleteButton]').click()
        cy.get('[data-cy = emailFeedItem-2').should('exist')
    })
    it('moves to next email on restore', ()=> {
        cy.visit('http://localhost:3000/')
        cy.get('[data-cy = trashSelector]').click()
        cy.get('[data-cy = restoreButton]').click()
        cy.get('[data-cy = emailFeedItem-9').should('exist')
    })
})


