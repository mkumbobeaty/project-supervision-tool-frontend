describe('Signin', () => {
    it('should signin with valid credentials', () => {
        cy.visit('http://localhost:3000/#!/signin');
        cy.get('.Logo h2').should('contain', 'Projects Supervison tool');
        cy.get('.Logo h5').should('contain', 'Please Login to your account');

        cy.get('#email').type('testing@project-supervision-tool.com');
        cy.get('#password').type('Pass@Tool');
        cy.get('button[type=submit]').should('exist').should('contain', 'Log In').click();
        cy.url().should('include', '/#!/projects');
    });

    it('should not signin with invalid credentials', () => {
        cy.visit('http://localhost:3000/#!/signin');
        cy.get('.Logo h2').should('contain', 'Projects Supervison tool');
        cy.get('.Logo h5').should('contain', 'Please Login to your account');

        cy.get('#email').type('testing@project-supervision-tool.com');
        cy.get('#password').type('Pass@Too');
        cy.get('button[type=submit]').should('exist').should('contain', 'Log In').click();
        cy.get('.Logo + div').should('contain', 'Request failed with status code 401');
    });
});