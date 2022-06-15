describe('Navigation', () => {
    it('should navigate to the All Files page', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')


        // The new url should include "/about"
        cy.url().should('include', '/files')

    })
})