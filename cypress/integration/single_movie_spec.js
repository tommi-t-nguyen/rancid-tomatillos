
  describe('Single Movie Details User Flows', () => {
  beforeEach(() => {
     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/340102', {fixture: 'details.json'})
     .visit('http://localhost:3000/movies/340102');
  })


  it('should be able to visit the url for a single movie', () => {
    cy.url()
    .should('eq', 'http://localhost:3000/movies/340102')
  });
  
  
});
