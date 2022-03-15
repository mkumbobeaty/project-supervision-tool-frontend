describe('Projects', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000/#!/projects')
    });

    it('should bulk actions on projects page', () => {
        cy.get('#email').type('testing@project-supervision-tool.com');
        cy.get('#password').type('Pass@Tool');
        cy.get('button[type=submit]').should('exist').should('contain', 'Log In').click();
        cy.get('.Breadcrumb a').should('contain', 'Projects');

    })
})