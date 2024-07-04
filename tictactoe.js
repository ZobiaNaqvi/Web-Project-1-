// const boxx = document.getElementById("box");

boxeslist = [0, 0, 0, 0, 0, 0, 0, 0, 0];
playerturn = 1;

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((eachbox) => {
  eachbox.addEventListener("click", function () {
    if (boxeslist[eachbox.id - 1] == 0) {
      const image = document.createElement("img");
      image.src = "tic.png";
      image.alt = "tictactoe";
      eachbox.appendChild(image);
      boxeslist[eachbox.id - 1] = playerturn;
      console.log(boxeslist);
    }
  });
});

// boxes.addEventListener("click", function() {

//   const image = document.createElement("img");

//   // Set the image source and other attributes (optional)
//   image.src = "tic.png"; // Replace with the actual path to your image
//   image.alt = "Tic Tac Toe Image"; // Add an alternative text for accessibility

//   // Append the image to the box
//   boxx.appendChild(image);
// });
