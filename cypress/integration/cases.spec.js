/// <reference types="cypress"/>

const Information = [
    "City: SK München",
    "Code: 09162"

];
context("Cases Page", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/cases/cases");
    });
    it("Check the infection data city", ()=>{
        cy.get(".city>h5").each((item,index)=> 
        {
            cy.wrap(item).should("contain.text",Information[index]);
        });
    });
});
