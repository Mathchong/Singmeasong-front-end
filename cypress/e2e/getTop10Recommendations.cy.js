

describe("Get top 10 recomendations", () => {
    it("should return a random recommendation", async () => {
        cy.request("DELETE", "http://localhost:5000/test/reset-database")
        cy.request("POST", "http://localhost:5000/test/createOneRecommendation", {
            name: "My Recommendation",
            youtubeLink: "https://www.youtube.com/watch?v=eU_ynHlLY0s"
        })
        cy.visit('http://localhost:3000')
        cy.contains("Top").click()
        cy.contains("My Recommendation").should("be.visible")
    })

})