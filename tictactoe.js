const boxx = document.getElementById("boxx");

boxx.addEventListener("click", function() {
  
  const image = document.createElement("img");

  // Set the image source and other attributes (optional)
  image.src = "tic.png"; // Replace with the actual path to your image
  image.alt = "Tic Tac Toe Image"; // Add an alternative text for accessibility
  image.classList.add("tic-image"); // Add a CSS class for styling (optional)

  // Append the image to the box
  boxx.appendChild(image);
});

