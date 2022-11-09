describe('daily stories', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=YMwGtcuTdYGINAxVqRw5puQauT6dAhD3', {fixture: "sports"})
    cy.visit('http://localhost:3000/')
  })

  it('should be showing the application name on the homepage', () => {
    cy.get('.header')
    .contains('DAILY STORIES FOR YOUR MINDSPACE').should('be.visible')
  })

  it('should be showing the topic input on the homepage', () => {
    cy.get('.form')
    .should('be.visible')
  })

  it('should be showing a greeting to the user on page load', () => {
    cy.get('.greeting-message')
    .contains('Welcome! Choose a Topic to Begin.'
    ).should('be.visible')
  })

  it('should be able to show a list of results after a user selects a topic', () => {
    cy.get('.form')
    .get('select[name="topic"]')
    .select('Sports')
    .should('have.value', 'sports')
    .wait(2000)
    .get('.single-article')
    .should('be.visible')
    
  })

  it('should be able to click a link to an article and be shown additional details with a picture, a link to the article at NYT and a home link that returns to the list of articles', () => {
    cy.get('.form')
    .get('select[name="topic"]')
    .select('Sports')
    .should('have.value', 'sports')
    .wait(2000)
    .get('.single-article')
    .should('be.visible')
    .get('.article-title')
    .first()
    .click()
    .get('.title-byline')
    .should('be.visible')
    .get('.pic')
    .should('be.visible')
    .get('.abstract')
    .should('be.visible')
    .get('.nyt-link')
    .should('be.visible')
    .get('.home-link')
    .should('be.visible')

    cy.get('.nyt-link')
    .click()

    cy.get('.home-link')
    .click()

    cy.url().should('eq', 'http://localhost:3000/')
  })

});