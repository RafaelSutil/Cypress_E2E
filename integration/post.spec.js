describe('Post', ()=> {
  beforeEach(()=> {
    cy.login('rafarafa@gmail.com', 'rafarafa123');
  })
  it('Novo', ()=>{
    const titulo = 'Cypress E2E';
    cy.contains('New Article').click();
    cy.location('pathname').should('equal', '/editor');
    cy.get('[formcontrolname=title]').type(titulo)
    cy.get('[formcontrolname=description]').type('Ponta a Ponta')
    cy.get('[formcontrolname=body]').type('Agilidade, Qualidade')
    cy.contains('Publish Article').click()
    cy.get('h1').contains(titulo)
  })
  it('Editar', ()=>{
    cy.contains('rafarafa').click();
    cy.location('pathname').should('contains', '/profile');
    cy.get('.article-preview').get('h1').first().click();
    cy.contains('Edit Article').click();
    cy.get('[formcontrolname=body]').clear();
    cy.get('[formcontrolname=body]').type('Economia');
    cy.contains('Publish Article').click();
    cy.contains('Economia');
  })
})