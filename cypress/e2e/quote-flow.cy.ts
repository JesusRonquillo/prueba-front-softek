/// <reference types="cypress" />

describe("Quote Flow E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should complete the full quote flow successfully", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Verify home page loaded
    cy.get(".home__container").should("be.visible");

    // Wait for images to load
    cy.get("img").should("be.visible");
    cy.get(".home__image").should("be.visible");

    // Fill the quote form - inputs are type="number", not "text"
    cy.get('input[type="number"]').first().type("12345678");
    cy.get('input[type="number"]').last().type("987654321");

    // Accept privacy and commercial policies
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').last().check();

    // Submit the form
    cy.get("button").filter(':contains("Cotiza aquí")').click();

    // Should navigate to offers page
    cy.url().should("include", "/oferts-user");

    // Verify offers page loaded
    cy.get(".page-container").should("be.visible");

    // Select insurance type (for me) - click on the card selection
    cy.get(".card-selection").first().click();

    // Wait for plans to appear
    cy.get(".plans-carousel").should("be.visible");

    // Select first plan - click "Seleccionar Plan" button
    cy.get(".plans-carousel__card")
      .first()
      .within(() => {
        cy.get("button").filter(':contains("Seleccionar Plan")').click();
      });

    // Should navigate to summary
    cy.url().should("include", "/summary-user");

    // Verify summary page
    cy.get(".summary-container").should("be.visible");
    cy.get(".summary-card").should("be.visible");
  });

  it("should show validation errors for empty form", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Try to submit empty form - use filter to select button element specifically
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Fill only document number (but too short - needs exactly 8 digits)
    cy.get('input[type="number"]').first().type("123");
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Fill both fields but still invalid for validation
    cy.get('input[type="number"]').last().type("987");
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Try with valid document but invalid phone (doesn't start with 9)
    cy.get('input[type="number"]').first().clear().type("12345678");
    cy.get('input[type="number"]').last().clear().type("876543210");
    cy.get('input[type="checkbox"]').first().check();
    cy.get('input[type="checkbox"]').last().check();
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Clear and fill with valid data (document = 8 digits, phone = 9 digits starting with 9)
    cy.get('input[type="number"]').first().clear().type("12345678");
    cy.get('input[type="number"]').last().clear().type("987654321");

    // Uncheck all checkboxes first
    cy.get('input[type="checkbox"]').first().uncheck();
    cy.get('input[type="checkbox"]').last().uncheck();
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Check only first checkbox
    cy.get('input[type="checkbox"]').first().check();
    cy.get("button").filter(':contains("Cotiza aquí")').should("be.disabled");

    // Check second checkbox - now should be enabled
    cy.get('input[type="checkbox"]').last().check();
    cy.get("button")
      .filter(':contains("Cotiza aquí")')
      .should("not.be.disabled");
  });

  it("should navigate to work in progress page when clicking terms and conditions", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Click on terms and conditions link
    cy.get("a").contains("Aplican Términos y Condiciones").click();

    // Should navigate to work in progress page
    cy.url().should("include", "/work-in-progress");

    // Verify work in progress page content
    cy.get(".work-in-progress").should("be.visible");
    cy.get(".work-in-progress__title").should(
      "contain",
      "Estamos trabajando en ello"
    );

    // Test back button
    cy.get("button").filter(':contains("Volver atrás")').click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should load images with lazy loading", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check that images are loaded
    cy.get("img").should("be.visible");
    cy.get("img").should(($images) => {
      $images.each((index, img) => {
        expect(img.naturalWidth).to.be.greaterThan(0);
      });
    });

    // Check lazy image components
    cy.get(".lazy-image").should("be.visible");
    cy.get(".lazy-image__img--loaded").should("exist");
  });
});
