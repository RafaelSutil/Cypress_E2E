describe('Primeiro Teste', () =>{
  it('Exemplos Cypress', ()=>{ /* it para o nome real do teste */
    cy.visit('https://example.cypress.io') /*primeiro comando*/
    expect(true).to.equal(true) /* primeira validacao */
  })
})