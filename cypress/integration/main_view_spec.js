/* eslint-disable no-undef */
describe('Main View User Flows', () => {
  beforeEach(() => {
     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies.json'})
     .visit('http://localhost:3000');
  });

  it('should be able to visit the url', () => {
    cy.url()
    .should('eq', 'http://localhost:3000/');
  });
  
  it('should be able to see a header', () => {
    cy.get('h1')
    .contains('Rotten Tomatillos')
    .should('be.visible');
  });

  it('should display movie poster options on home page', () => {
    cy.get('.movies-container')
    .should('be.visible');
  });

  it('should display movie details when a movie poster is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/340102', {fixture: 'details.json'})
    .visit('http://localhost:3000')
    .get('.card').first().click()
    .url().should('include', '/movies/340102');
  });
});

