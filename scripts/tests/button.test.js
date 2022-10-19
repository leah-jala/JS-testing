/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button"); //imports the button function from the source file. 

beforeEach(() => {
    // This was the first example - an html page is not loaded, jsdome creates a mock DOM which is this p element.
    // document.body.innerHTML = "<p id='par'></p>"; 

    // Second example - load the entire html page and attach it to the Mock dom
    // The node fs module allows us to open, read and write files.
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8"); // by default node runs from the root directory, where index.html is, so you need need the path. 
    document.open();
    document.write(fileContents);
    document.close();
});

// This is the test

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});