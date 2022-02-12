
  describe('Single Movie Details User Flows', () => {
  beforeEach(() => {
     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/340102', {fixture: 'details.json'})
     .visit('http://localhost:3000/movies/340102');
  })

  it('should be able to visit the url for a single movie and corrent movie details be returned', () => {
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

  //IS THIS ONE DONE CORRECTLY?
  it('should see an image backdrop for each single moview viewed', () => {
    cy.get('.movie-img');
     cy.url()
    .should('eq','http://localhost:3000/movies/340102');
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

  it('should be able to click the return home text box with the arrow icon to be returned to the main page', () => { 
    cy.get('.return-home')
    .contains('Home ↩')
    .should('be.visible')
    .click();
    });
    
  //DO I need to have these two bottom tests?
  it('should see all details for image, rating, runtime, and release date on left side of a single movie details view', () => {
    cy.get('.left-details')
    // .contains();
  });

  it('should see all details for title, tagline, and overview on right side of a single movie details card', () => {
    cy.get('.right-details')
    // .contains()
  });


//Think still need these: 
  //test for click intercept ??
  //status code
  //working or an error

});
