describe('Profile', ()=> {
  it('Editar Perfil', ()=>{
    cy.login('rafarafa@gmail.com', 'rafarafa123');
    cy.contains('rafarafa').click();
    cy.contains('Edit Profile Settings').click();
    cy.get('[formcontrolname="image"]').clear();
    cy.get('[formcontrolname="image"]')
      .type('https://thispersondoesnotexist.com/image');
    cy.get('[formcontrolname="password"]').type('rafarafa123');
    cy.contains('Update Settings').click();
  })
})