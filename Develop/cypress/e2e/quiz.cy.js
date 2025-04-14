describe('Tech Quiz E2E', () => {
    it('should complete the quiz and show the score', () => {
      cy.visit('http://localhost:5173'); 
  
      cy.contains('Loading...').should('exist');
      cy.contains('What does HTML stand for?').should('exist');
  
      cy.contains('Hyper Text Markup Language').click();
      cy.contains('Which company developed React?').should('exist');
      cy.contains('Facebook').click();
  
      cy.contains('Quiz Over!').should('exist');
      cy.contains('Your score: 2/2').should('exist');
      cy.contains('Start New Quiz').click();
      cy.contains('What does HTML stand for?').should('exist');
    });
  });
  