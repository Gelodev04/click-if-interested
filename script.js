// Array of image paths from the images folder
const images = [
  "images/pls.gif",
  "images/download.jpg",
  "images/download (1).jpg",
  "images/download (2).jpg",
  "images/download (3).jpg",
  "images/download (4).jpg",
];

let currentImageIndex = 0;

// Function to change the image
function changeImage() {
  const gif = document.getElementById("gif");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  gif.src = images[currentImageIndex];
}

// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a mouseover event listener to move the "No" button randomly and change image
noButton.addEventListener("mouseover", () => {
  // Change the image
  changeImage();

  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});

// Add a click event listener to the "No" button to also change the image
noButton.addEventListener("click", () => {
  changeImage();
});

// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Add a click event listener to create confetti
yesButton.addEventListener("click", () => {
  var confettiElement = document.getElementById("confetti-canvas");
  var confettiSettings = {
    target: confettiElement,
    max: 729,
    size: 1,
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: 25,
    rotate: true,
    start_from_edge: true,
    respawn: true,
  };

  yesButton.style.display = "none";
  noButton.style.display = "none";

  var gif = document.getElementById("gif");
  var header = document.getElementById("main");
  header.style.display = "none";
  gif.style.display = "none";

  // Add the Hanannah Happie GIF to the center
  let centerGif = document.createElement("img");
  centerGif.src = "hanannah-happie.gif";
  centerGif.style.width = "300px";
  centerGif.style.height = "300px";
  centerGif.style.objectFit = "cover";
  centerGif.style.borderRadius = "10px";
  centerGif.style.position = "absolute";
  centerGif.style.top = "50%";
  centerGif.style.left = "50%";
  centerGif.style.transform = "translate(-50%, -50%)";
  centerGif.style.zIndex = "1001";
  document.body.appendChild(centerGif);

  //change the style of the confetti canvas
  confettiElement.style.position = "absolute";
  confettiElement.style.top = "0";
  confettiElement.style.left = "0";
  confettiElement.style.width = "100%";
  confettiElement.style.height = "100%";
  confettiElement.style.zIndex = "1000";

  var confetti = new ConfettiGenerator(confettiSettings);

  confetti.render();

  let p = document.createElement("p");
  p.innerText = "yey";
  p.style.fontSize = "2rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  p.style.position = "absolute";
  p.style.top = "75%";
  p.style.left = "50%";
  p.style.transform = "translate(-50%, -50%)";
  p.style.zIndex = "1001";
  document.body.appendChild(p);
});
