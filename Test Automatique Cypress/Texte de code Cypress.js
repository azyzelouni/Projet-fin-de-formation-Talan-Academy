// Recherche et accès par categorie
describe('select categorie "chaussures homme" on decathlon france', () => {
  it('should select men categorie and choose "chaussures" ', () => {
    cy.visit('www.decathlon.fr')
    cy.get('#didomi-notice-agree-button > span').click();
    cy.get('.menu-button').click();
    cy.get('#cat-01 > span.svelte-78ehab').click();
    cy.get('#cat-11 > span.svelte-1sqyg87').click();
    cy.get('[href="/browse/c0-homme/c1-chaussant/c2-chaussures/_/N-1f5113t"]').click();

  })
})

// accèder au panier

describe('access to shopping cart on decathlon france', () => {
  it('should access to the shopping cart on decathlon france', () => {
    cy.visit('www.decathlon.fr')
    cy.get('#didomi-notice-agree-button > span').click();
    cy.get('.cart-button').click();
   })
})

// recherche et selection article

describe('search  on decathlon france', () => {
  it('should searcha chaussure on decathlon france site', () => {
    cy.visit('www.decathlon.fr')
    cy.get('#didomi-notice-agree-button > span').click();
    cy.get('input.svelte-1ezbm7m').type('chaussure');
    cy.get('button.svelte-1ezbm7m > .svg-icon').click();
    cy.get('[data-supermodelid="168471"] > .dpb-models > div.svelte-1kvkbs3 > a.svelte-1kvkbs3 > .lz').click();
  })
})