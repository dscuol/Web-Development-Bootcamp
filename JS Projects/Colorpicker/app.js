const colors = [
  "green",
  "blue",
  "red",
  "brown",
  "#16a085",
  "#2c3e50",
  "#e74c3c",
  "rgb(211, 84, 0)",
  "rgb(68, 189, 50)",
  "rgba(25, 42, 86,1.0)",
];

const button = document.querySelector("#btn");
const color = document.querySelector(".color");

button.addEventListener("click", function (e) {
  const randomnum = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomnum];
  color.textContent = colors[randomnum];
});
