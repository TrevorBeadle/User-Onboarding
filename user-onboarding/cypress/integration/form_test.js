describe("Users app", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  const firstNameInput = () => cy.get('[for="first_name"] > input');
  const lastNameInput = () => cy.get('[for="last_name"] > input');
  const emailInput = () => cy.get('[for="email"] > input');
  const passwordInput = () => cy.get('[for="password"] > input');
  const checkbox = () => cy.get(".checkboxes > label > input");
  const button = () => cy.get("button");

  it("Check if tests are working", () => {
    expect(1 + 2).to.equal(3);
  });

  it("Check if user can enter first name", () => {
    firstNameInput()
      .should("have.value", "")
      .type("Trevor")
      .should("have.value", "Trevor");
  });

  it("Check if user can enter last name", () => {
    lastNameInput()
      .should("have.value", "")
      .type("Beadle")
      .should("have.value", "Beadle");
  });

  it("Check if user can enter email", () => {
    emailInput()
      .should("have.value", "")
      .type("trevor@beadle.com")
      .should("have.value", "trevor@beadle.com");
  });

  it("Check if user can enter password", () => {
    passwordInput()
      .should("have.value", "")
      .type("password")
      .should("have.value", "password");
  });

  it("Check if user can check terms box", () => {
    checkbox()
      .should("have.value", "false")
      .click()
      .should("have.value", "true");
  });

  it("Check if button is enabled after form completed", () => {
    button().should("be.disabled");
    firstNameInput().type("Trevor");
    lastNameInput().type("Beadle");
    emailInput().type("trevor@beadle.com");
    passwordInput().type("password");
    checkbox().click();
    button().should("not.be.disabled");
  });

  it("Check if submit button works", () => {
    cy.contains("Trevor Beadle").should("not.exist");
    firstNameInput().type("Trevor");
    lastNameInput().type("Beadle");
    emailInput().type("trevor@beadle.com");
    passwordInput().type("password");
    checkbox().click();
    button().click();
    cy.contains("Trevor Beadle").should("exist");
  });
});
