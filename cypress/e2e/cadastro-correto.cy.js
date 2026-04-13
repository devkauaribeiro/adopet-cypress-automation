describe("Página de Cadastro", () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="register-button"]').click();
  })
  it("Deve preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
    cy.get('[data-test="input-name"]').type("Kauã Ribeiro");
    cy.get('[data-test="input-email"]').type("kaua@email.com");
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
  });
});
