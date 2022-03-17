describe('Projects', () => {

    before(() => {
        cy.visit('http://localhost:3000/')
        cy.get('#email').type('testing@project-supervision-tool.com');
        cy.get('#password').type('Pass@Tool');
        cy.intercept('GET', '/api/v1/projects', { fixture: 'Projects/projects_200.json' }).as('projects');
        cy.get('button[type=submit]').should('exist').should('contain', 'Log In').click();
    });

    it('should show loader before rendering projects', () => {
        cy.get('.ant-spin-spinning').should('have.css', 'font-size', '14px')
    });

    it('should render the top navigation bar', () => {
        cy.get('.Breadcrumb a').should('contain', 'Projects');
        cy.get('.UserMenu').should('be.visible').as('userIcon').trigger('mouseover')
        cy.get('.UserProfileMenu > li').should(($lis) => {
            expect($lis).to.have.length(2)
            expect($lis.eq(0)).to.contain('Change Password')
            expect($lis.eq(1)).to.contain('Sign Out')
        })
        cy.get('@userIcon').trigger('mouseout');
        cy.get('.UserProfileMenu > li').should('not.be.visible');

    });

    it('should display list of project(s) if there is any', () => {
        cy.get('.List .ListHeader > div').should(($div) => { expect($div).to.have.length(9) });
        cy.get('.List ul > div').should(($item) => { expect($item).to.have.length(3) });
        cy.get('.ListItem > div').should('contain', 'Dar es Salaam Metropolitan Development Project')
         .and('contain', 'P123134')
         .and('contain','DMDP')
         .and('contain','active')

    })




})