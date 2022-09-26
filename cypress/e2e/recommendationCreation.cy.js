describe("Create a Recomendation", () => {

    it("Should create a recommendation", async () => {
        cy.request("DELETE", "http://localhost:5000/test/reset-database")
        
        cy.visit('http://localhost:3000')
        cy.get('#Name').type("My Recomendation")
        cy.get('#YoutubeLink').type("https://www.youtube.com/watch?v=AptURCsdfsdasdasdsafsdfds20VKg")

        cy.intercept("POST", "http://localhost:5000/recommendations").as("creation")
        cy.intercept("GET", "http://localhost:5000/recommendations").as("load")
        cy.get('#CreateRecommendation').click()
        cy.wait("@creation")
        cy.wait("@load")
        cy.contains("My Recomendation").should('be.visible')
    })
})