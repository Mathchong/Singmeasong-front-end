
describe("Delete by Downvote", () => {
    it("Delete by Downvote", async () => {
        cy.request("DELETE", "localhost:5000/test/reset-database")
        cy.request("POST", "http://localhost:5000/test/createOneRecommendation", {
            name: "My Recommendation",
            youtubeLink: "https://www.youtube.com/watch?v=eU_ynHlLY0s"
        })
        cy.visit("http://localhost:3000")

        for (let i = 0; i < 6; i++) {
            cy.get("#My_RecommendationDownvote").click()
        }

        cy.contains("My Recomendation").should('not.be.visible')
    })
})
