// document.body.children[1].children[0].href = "https://google.com";

// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("a"); // a {color:red}
// anchorElement.href = "https://academind.com";

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice

let h1Element = document.body.firstElementChild;
console.dir(h1Element.parentElement);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)

console.dir(h1Element.parentElement);

//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)

console.dir(h1Element.nextElementSibling);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

h1Element = document.getElementById("first-title");

console.dir(h1Element);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice

let paragraphElement = document.querySelector(".bananas");

console.dir(paragraphElement);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

paragraphElement = textContent = "This is the end of the world as we know it.";

// Add an element
//1. Create the new element.

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to google.";

//2. Get access to the parent element that should hold the new element.

let firstParagraph = document.querySelector("p");

//3. Insert the new element into the parent element content.

firstParagraph.append(newAnchorElement);
