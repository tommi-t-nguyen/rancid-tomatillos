/* eslint-disable no-undef */

  describe('Single Movie Details User Flows', () => {
  beforeEach(() => {
     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/340102', {fixture: 'details.json'})
     .visit('http://localhost:3000/movies/340102');
  });

  it('should be able to visit the url for a single movie and correct movie details be returned', () => {
    cy.url()
    .should('eq', 'http://localhost:3000/movies/340102');
  });
  
  it('should see a title upon page load', () => {
    cy.get('.title')
    .contains('The New Mutants')
    .should('be.visible');
  });

  it('should see a tagline for each single movie if available in data set', () => {
    cy.get('.tagline')
    .contains('It\'s time to face your demons')
    .should('be.visible');
  });

  it('should see an overview for each single movie viewed', () => {
    cy.get('.overview')
    .contains('Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.')
    .should('be.visible');
  });

  it('should see an image backdrop for each single movies viewed', () => {
    cy.get('.movie-img')
    .should('be.visible');
  });
  
  it('should see a starred rating for each movie viewed', () => {
    cy.get('.rating')
    .contains(4)
    .should('be.visible');
  }); 

  it('should see a single movie run time', () => {
    cy.get('.runtime')
    .contains(94)
    .should('be.visible');
  });
  
  it('should see a release date for a single movie', () => {
    cy.get('.release-date')
    .contains("2020-08-26")
    .should('be.visible');
  });

  //NOTE: depending on how error handling gets set up, this test should be altered to include error message above or maybe split if an error component changes it
  it('should be able to click the return home text box with the arrow icon to be returned to the main page', () => { 
    cy.get('.return-home')
    .contains('Home ↩')
    .should('be.visible')
    .click()
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'movies.json'})
    .url()
    .should('eq', 'http://localhost:3000/');
    });
});
