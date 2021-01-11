// Get element by ID

const heading1 = document.getElementById("heading");
heading1.style.backgroundColor = "red";
heading1.style.color = "white";
heading1.textContent = "DOM Navigation through JS";

// Get element by Class

// getElementsByClassName --> return nodelist
const heading2 = document.getElementsByClassName("heading");
// console.log('heading2', heading2)
heading2[0].style.backgroundColor = "blue";
heading2[0].style.color = "white";

// Get element by TagName

const headings = document.getElementsByTagName("h1");
console.log(headings);

// Query Selector

const div1 = document.querySelector("#div");
console.log("div1", div1);
div1.style.backgroundColor = "pink";
div1.style.border = "2px solid black";

// Query Selector All
const list = document.querySelectorAll(".list");
console.log("list", list);

list.forEach(function (items) {
  items.style.color = "red";
});

// TextContent

// const paragarph = document.querySelector('#para')
// paragarph.textContent = "My name is Khan"

// get attribute
// const paragraph = document.querySelector("#para");
// const class_name = paragraph.getAttribute("href");
// console.log(class_name);

// set attribute

// paragraph.setAttribute("class", "intro2");

// Changing classNames

// paragraph.className = "intro2";

// Events in Javascript

// OLD way of writing events
// function submit() {
//     const paragarph = document.querySelector('#para')
//     paragarph.textContent = "My name is Khan"

// }

// New way of writing events
// 1. Select the element
// 2. Function addEeventListener
// 3. logic

const btn = document.querySelector("#btn");
const paragraph = document.querySelector("#para");

btn.addEventListener("mouseenter", function (e) {
  console.log(e.type);
  paragraph.textContent = "My name is Khan";
  paragraph.style.backgroundColor = "blue";
});

btn.addEventListener("mouseleave", function (e) {
  console.log(e.type);
  paragraph.textContent = "My name is Saad";
  paragraph.style.backgroundColor = "red";
});

// Create Elements
