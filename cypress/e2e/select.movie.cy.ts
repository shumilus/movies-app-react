import { movies } from '../../src/mocks/movies';

describe('Select/Deselect Movie', () => {
  describe('select movie from list', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      // cy.intercept( 'GET', 'http://localhost:4000/movies', 'mock:movies.json')

    });

    it('does not display a selected movie card', () => {
      cy.get('div.movie-details').should('not.exist');
    });


    it('display a list of 10 fetched movies', () => {
      cy.get('div.movies-list')
        .should('be.visible')
        .within(() => {
          cy.get('div.movie-card').should('have.length', 10);
        });
    });

    it('should set movie query parameter to the selected movie id', () => {
      cy.get('div.movies-list')
        .should('be.visible')
        .within(() => {
          cy.get('div.movie-card')
            .first()
            .within(() => {
              cy.get('p.movie-card-title').should('have.text', movies[0].title).click();

              cy.location().should((loc: Location) => {
                expect(loc.search).to.eq(`?movie=${movies[0].id}`);
              });
            });
        });
    });

    it('should display selected movie card', () => {
      cy.get('div.movies-list')
        .should('be.visible')
        .within(() => {
          cy.get('div.movie-card')
            .first()
            .within(() => {
              cy.get('p.movie-card-title').should('have.text', movies[0].title).click();
            });
        });

      cy.get('div.movie-details')
        .should('be.visible')
        .within(() => {
          cy.get('h2.movie-details-title').should('have.text', movies[0].title);
        });
    });
  });
});
