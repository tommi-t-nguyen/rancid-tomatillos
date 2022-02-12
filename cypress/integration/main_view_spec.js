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

  //there are 5 in dummy data? Not sure how to test for this? 
  it('should display 5 different movie poster options on home page', () => {
    cy.get('.movies-container')
    .should('be.visible');

  });

  //This one is broken, need to figure out how to fix! see note below on clicking movie with another intercept?
  // it('should be able to click a movie poster from on the main page and be taken to single movie details', () => { 
  //   cy.get('.movie-poster-img')    
  //   .contains('movie-details-container)
  //   .click();
  //   });

  });

//TEST URL in the describe block
// .url
// .includes
//it should display movies details when a movie is clicked & intercept the URL for that movie (heroku app link url) and replace it with indvidual url
//test clicking  
//cypress commands 

  //test for click intercept ??
  //how many visible?
  //status code
  //working or an error
  //test for movie card button to go to a single view 