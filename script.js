let currentIndex = 0;

const imageList = [
  "our-work/image1.jpg",
  "our-work/image2.jpg",
  "our-work/image3.jpg",
  "our-work/image4.jpg",
  "our-work/image5.jpg",
  "our-work/image6.jpg",
  "our-work/image7.jpg",
  "our-work/image8.jpg",
];

function updateCarousel() {
  const img = document.getElementById("carousel-image");
  img.src = imageList[currentIndex] + "?v=" + new Date().getTime(); // prevents caching
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  updateCarousel();
});

updateCarousel();
