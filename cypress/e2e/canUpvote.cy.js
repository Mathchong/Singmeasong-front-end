

describe("Make a Upvote", () => {
    it("Upvote a recommendation", async () => {
        cy.request("DELETE", "localhost:5000/test/reset-database")
        cy.request("POST", "http://localhost:5000/test/createOneRecommendation", {
            name: "My Recommendation",
            youtubeLink: "https://www.youtube.com/watch?v=eU_ynHlLY0s"
        })
        cy.visit("http://localhost:3000")
        cy.get("#My_RecommendationUpvote").click()
        cy.contains("1").should("be.visible")
    })
})
