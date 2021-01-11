let count = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;
    console.log("classes", classes);
    if (classes.contains("increase")) {
      count++;
    } else if (classes.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "blue";
    }
    value.textContent = count;
  });
});
