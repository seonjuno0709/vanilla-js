const imgaes = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const todaysImage = imgaes[Math.floor(Math.random() * imgaes.length)];

document.body.style.height = "100vh";
document.body.style.backgroundImage = `url("img/${todaysImage}")`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
console.log(document.body.style);
