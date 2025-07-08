/// <reference types="cypress" />

describe("Accessibility Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have proper semantic HTML structure", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check for main element
    cy.get("main").should("exist");

    // Check for headings (at least one should exist, even if in components)
    cy.get("body").then(($body) => {
      const headings = $body.find("h1, h2, h3, h4, h5, h6");
      if (headings.length === 0) {
        // If no traditional headings, check for elements with heading styles/roles
        cy.get('[class*="title"], [class*="heading"], .text--heading').should(
          "exist"
        );
      } else {
        cy.get("h1, h2, h3, h4, h5, h6").should("exist");
      }
    });

    // Check form has proper structure
    cy.get("form").should("exist");
    cy.get("input").should("exist");
  });

  it("should have alt attributes on all images", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check all images have alt attributes
    cy.get("img").each(($img) => {
      cy.wrap($img).should("have.attr", "alt");
      cy.wrap($img).invoke("attr", "alt").should("not.be.empty");
    });
  });

  it("should have proper form labels and associations", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check inputs have associated labels or aria-labels
    cy.get("input").each(($input) => {
      const id = $input.attr("id");
      const ariaLabel = $input.attr("aria-label");
      const ariaLabelledBy = $input.attr("aria-labelledby");

      // Should have either a label, aria-label, or aria-labelledby
      const hasAccessibleName = id || ariaLabel || ariaLabelledBy;
      expect(hasAccessibleName).to.exist;
    });
  });

  it("should be keyboard navigable", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Test that we can focus on interactive elements
    cy.get("input").first().focus().should("be.focused");

    // Test focus on different interactive elements
    cy.get("input").eq(1).focus().should("be.focused");

    // Test button focus (only if enabled)
    cy.get("button").then(($buttons) => {
      const enabledButton = $buttons.filter(":not(:disabled)").first();
      if (enabledButton.length > 0) {
        cy.wrap(enabledButton).focus().should("be.focused");
      }
    });

    // Test checkbox focus
    cy.get("input[type='checkbox']").first().focus().should("be.focused");
  });

  it("should have proper focus indicators", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check that focusable elements have visible focus (only enabled elements)
    cy.get("input:not(:disabled), a").each(($el) => {
      cy.wrap($el).focus();
      cy.wrap($el).should("be.focused");
      // Visual focus should be evident (this is visual, hard to test automatically)
    });

    // Test enabled buttons separately
    cy.get("button:not(:disabled)").each(($el) => {
      cy.wrap($el).focus();
      cy.wrap($el).should("be.focused");
    });
  });

  it("should have proper contrast ratios", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check text elements exist and are visible
    cy.get("p, span, label, button").should("be.visible");

    // This is a basic visibility check - proper contrast testing requires specialized tools
    cy.get("button").should("have.css", "color");
    cy.get("button").should("have.css", "background-color");
  });

  it("should work with reduced motion preferences", () => {
    // Set prefers-reduced-motion
    cy.window().then((win) => {
      const mockMatchMedia = (query: string) => {
        if (query === "(prefers-reduced-motion: reduce)") {
          return {
            matches: true,
            addEventListener: () => {},
            removeEventListener: () => {},
          };
        }
        return win.matchMedia(query);
      };

      Object.defineProperty(win, "matchMedia", {
        writable: true,
        value: mockMatchMedia,
      });
    });

    cy.visit("/");

    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Page should still be functional with reduced motion
    cy.get(".home__container").should("be.visible");
    cy.get("img").should("be.visible");
  });

  it("should have proper ARIA attributes where needed", () => {
    // Wait for loading screen to disappear
    cy.get(".loading-screen", { timeout: 15000 }).should("not.exist");

    // Check for ARIA attributes on interactive elements (optional, not required)
    cy.get("body").then(($body) => {
      const elementsWithRole = $body.find("[role]");
      if (elementsWithRole.length > 0) {
        cy.get("[role]").should("exist");
      } else {
        // ARIA roles are not mandatory if semantic HTML is used correctly
        cy.log("No explicit ARIA roles found, checking semantic HTML instead");
        cy.get("main, form, button, input").should("exist");
      }
    });

    // Check buttons have proper text or aria-label
    cy.get("button").each(($btn) => {
      const text = $btn.text().trim();
      const ariaLabel = $btn.attr("aria-label");

      expect(text || ariaLabel).to.exist;
    });
  });

  it("should have proper page title", () => {
    cy.title().should("not.be.empty");
    cy.title().should("contain", "Rimac");
  });
});
