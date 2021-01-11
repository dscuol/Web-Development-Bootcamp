// let count = 2123344;

// let name = "Saad";

// numbers are integers literals
// let count = new Number(2123344)
// let name = new String("Saad")

// public class Apple{
//     Apple(boolean tasty)
// }

// int obj = new Apple(false);

// 1st Way of writing Object (Object Literal)

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw1");
//   },
// };

// const circle2 = {
//   radius: 3,
//   location: {
//     x: 2,
//     y: 2,
//   },
//   draw: function () {
//     console.log("draw2");
//   },
// };

// console.log(circle2.draw);

// 2nd Way of writing Object (Factory Function)

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(1);
// const circle2 = createCircle(2);
// const circle3 = createCircle(3);
// const circle4 = createCircle(4);

// console.log("circle", circle3);

// 3rd Way of writing Object (Constructor Function)

// function createCircle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle1 = new createCircle(1);
// console.log(circle1);
