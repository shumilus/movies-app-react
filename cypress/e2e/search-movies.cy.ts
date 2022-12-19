// @ts-ignore
import { movies } from '../../src/mocks/movies';

describe('Search movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('redirects to "/search" from "/"', () => {
    cy.location().should((loc: Location) => {
      expect(loc.pathname).to.eq('/search');
      expect(loc.search).to.eq('');
      expect(loc.href).to.eq('http://localhost:3000/search');
    });
  });

  it('display a search component successfully', () => {
    cy.get('.header')
      .should('be.visible')
      .within(() => {
        cy.get('h2').should('contain.text', 'find your movie');
        cy.get('.search-container')
          .should('be.visible')
          .within(() => {
            cy.get('button').should('contain.text', 'Search').should('be.enabled');
          });
      });
  });

  it('displays a list of 10 fetched movies', () => {
    cy.get('div.movies-list')
      .should('be.visible')
      .within(() => {
        cy.get('div.movie-card').should('have.length', 10);
      });
  });

  it('redirects to /search/:searchQuery on Search form submit', () => {
    cy.get('.search-container')
      .should('be.visible')
      .within(() => {
        cy.get('input.search-input').type('Moon');

        cy.get('button').should('contain.text', 'Search').should('be.enabled').click();

        cy.location().should((loc: Location) => {
          expect(loc.href).to.eq('http://localhost:3000/search?title=Moon');
        });
      });
  });

  it('displays movies that match searchQuery by title', () => {
    cy.get('.search-container')
      .should('be.visible')
      .within(() => {
        cy.get('input.search-input').type('Moon');
        cy.get('button').should('contain.text', 'Search').should('be.enabled').click();
      });

    cy.get('div.movies-list')
      .should('be.visible')
      .within(() => {
        cy.get('div.movie-card p.movie-card-title').each((movieItem: any) => {
          expect(movieItem.text()).to.match(/moon/i);
        });
      });
  });
});
