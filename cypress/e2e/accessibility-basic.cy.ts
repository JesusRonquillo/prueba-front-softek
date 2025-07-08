/// <reference types="cypress" />

describe("Basic Accessibility Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load page and have basic structure", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check main content exists
    cy.get("main").should("exist");
    cy.get(".home__container").should("be.visible");
  });

  it("should have images with alt text", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check images have alt attributes
    cy.get("img").each(($img) => {
      cy.wrap($img).should("have.attr", "alt");
    });
  });

  it("should have focusable form elements", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Test inputs can be focused - inputs are type="number", not "text"
    cy.get('input[type="number"]').first().should("be.visible").focus();
    cy.get('input[type="number"]').first().should("be.focused");

    // Test checkboxes can be focused
    cy.get('input[type="checkbox"]').first().should("be.visible").focus();
    cy.get('input[type="checkbox"]').first().should("be.focused");
  });

  it("should have buttons with text content", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check buttons have readable text
    cy.get("button").each(($btn) => {
      const text = $btn.text().trim();
      expect(text).to.not.be.empty;
    });
  });

  it("should have proper page title", () => {
    cy.title().should("not.be.empty");
  });

  it("should be responsive to viewport changes", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Test mobile viewport
    cy.viewport(375, 667);
    cy.get(".home__container").should("be.visible");

    // Test desktop viewport
    cy.viewport(1280, 720);
    cy.get(".home__container").should("be.visible");
  });

  it("should handle form validation properly", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Button should be disabled initially - select the button element specifically
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Fill form partially and check validation
    cy.get('input[type="number"]').first().type("12345678");
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Complete form and check button enables
    cy.get('input[type="number"]').last().type("987654321");
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').last().check();
    cy.get("button")
      .filter(':contains("Cotiza aquí")')
      .should("not.be.disabled");
  });

  it("should navigate to terms and conditions", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Click terms link
    cy.get("a").contains("Términos y Condiciones").click();

    // Should navigate to work in progress page
    cy.url().should("include", "/work-in-progress");
    cy.get(".work-in-progress").should("be.visible");
  });
});
