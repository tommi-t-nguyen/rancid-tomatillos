describe('Error Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 500})
    cy.visit('http://localhost:3000/');
  });

  it('should show an error message if a 500 error occurs', () => {
    cy.contains('Sorry we\'re having techincal difficulty. Please try again later.');
  });

  it('should show an error if a 404 error occurs', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {statusCode: 404})
    // cy.visit('http://localhost:3000/');
    cy.contains('Sorry we\'re having techincal difficulty. Please try again later.');

  })
})