const imgaes = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const todaysImage = imgaes[Math.floor(Math.random() * imgaes.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;

document.body.appendChild(bgImage);
