describe('Projects', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/#!/projects')
        cy.get('#email').type('testing@project-supervision-tool.com');
        cy.get('#password').type('Pass@Tool');
        cy.get('button[type=submit]').should('exist').should('contain', 'Log In').click();
    });

    it('should render the top navigation bar', () => {
        cy.get('.Breadcrumb a').should('contain', 'Projects');
        cy.get('.UserMenu').should('be.visible').as('userIcon')
        cy.get('@userIcon').trigger('mouseover').as('triggleButton')
        cy.get('.UserProfileMenu > li').should(($lis) => {
            expect($lis).to.have.length(2)
            expect($lis.eq(0)).to.contain('Change Password')
            expect($lis.eq(1)).to.contain('Sign Out')
        })
        cy.get('@userIcon').trigger('mouseout');
        cy.get('.UserProfileMenu > li').should('not.be.visible');

    });

})