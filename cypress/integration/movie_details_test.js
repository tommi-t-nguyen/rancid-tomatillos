/* eslint-disable no-unused-expressions */
it('should have a sample test', () => {
    expect(true).to.equal(true)
  });

beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  describe('Testing, testing, testing', () => {
  it('checks to see if correct home link is visited', () => {
    expect(true).to.equal(true)
  })
})


// describe('It should have the details for a single movie', () => {
//    beforeEach(() => {
//         cy.visit('http://localhost:3000')
//     })
//   })