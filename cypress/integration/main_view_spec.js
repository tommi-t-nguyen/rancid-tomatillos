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
  
  it('should be able to see a nav with the app title', () => {
    cy.get('.nav')
    .contains('Rotten Tomatillos')
    .should('be.visible');
  });

  it('should be able to see contents in in the banner at top of screen', () => {
    cy.get('.banner-contents')
    .get('.banner-title')
    .should('be.visible')
  });

  it('should display movie poster options on home page', () => {
    cy.get('.movies-container')
    .get('.card')
    .should('be.visible');
  });

  it('should be able to click the movie trailer button and be taken to the movie details page', () => {
    cy.get('.banner-button')
    .should('be.visible');
  });

  it('should display movie details when a movie poster is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/340102', {fixture: 'details.json'})
    .visit('http://localhost:3000')
    .get('.card').first().click()
    .url().should('include', '/movies/340102');
  });
});

