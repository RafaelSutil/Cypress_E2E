describe('Logout', ()=>{
  it('Logout via Perfil', ()=>{
    cy.login('rafarafa@gmail.com', 'rafarafa123');
    cy.contains('Settings').click();
    cy.url().should('include', '/settings');
    cy.get('.btn-outline-danger').click();
  })
})