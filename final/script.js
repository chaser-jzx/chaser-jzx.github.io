const images = [
    'assets/img/cat.png',
    'assets/img/cat2.png',
    'assets/img/cat3.png',
    'assets/img/cat4.png',
    'assets/img/cat5.png',
    'assets/img/cat6.png',
    'assets/img/cat7.png',
    'assets/img/cat8.png',
];
  
const imageContainer = document.getElementById('imageContainer');
const startButton = document.getElementById('button');

let currentIndex = 0;
let intervalId;
let totalTimeElapsed = 0;
let freezeTime = 1400;
  
function changeImage() {
    const imageUrl = images[currentIndex];
    imageContainer.style.backgroundImage = `url(${imageUrl})`;

    currentIndex++;
    if (currentIndex === images.length) {
        currentIndex = 0;
    }
}
  
changeImage();
  
function getRandomIndex() {
    return Math.floor(Math.random() * images.length);
}

function animateImages() {
    clearInterval(intervalId);
  
    intervalId = setInterval(() => {
        changeImage();
        totalTimeElapsed += 150;
  
        if (totalTimeElapsed >= freezeTime) {
            clearInterval(intervalId);
            totalTimeElapsed = 0; 
            currentIndex = getRandomIndex();
        }
    }, 150);
}
  
  startButton.addEventListener('click', animateImages);