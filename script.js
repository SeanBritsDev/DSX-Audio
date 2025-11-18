// Correct image list
const imageList = [
  "our-work/image1.png",
  "our-work/image2.png",
  "our-work/image3.png",
  "our-work/image4.png",
  "our-work/image5.png",
  "our-work/image6.png",
  "our-work/image7.png",
  "our-work/image8.png",
];

let currentIndex = 0;

// Update displayed image
function updateCarousel() {
  const img = document.getElementById("carousel-image");
  img.src = imageList[currentIndex];
}

// Buttons
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  updateCarousel();
});

// Load first image
updateCarousel();
