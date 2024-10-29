const container = document.querySelector(".featureImage");
const slider = document.getElementById("slider");
document.querySelector(".slider").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);

  if (e.target.value < 10) {
    document.querySelector('.beforeText').style.display = "none";
  } else if(e.target.value > 90) {
    document.querySelector('.afterText').style.display = 'none';
  } else {
    document.querySelector('.beforeText').style.display = 'block';
    document.querySelector('.afterText').style.display = 'block';
  }
});

// for mouse move
let startX;
let isDragging = false;

const carousel = document.getElementById("carouselExampleCaptions");

carousel.addEventListener("mousedown", (event) => {
  startX = event.pageX; // Get starting position
  isDragging = true; // Start dragging
//   document.getElementsByClassName("carousel-item").style.cursor = "grabbing";
});

carousel.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const endX = event.pageX; // Get current position
    if (startX > endX + 50) {
      // Swipe left
      $("#carouselExampleCaptions").carousel("next");
      isDragging = false; // Stop dragging
    } else if (startX < endX - 50) {
      // Swipe right
      $("#carouselExampleCaptions").carousel("prev");
      isDragging = false; // Stop dragging
    }
  }
});

carousel.addEventListener("mouseup", () => {
  isDragging = false; // Stop dragging on mouse up
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false; // Stop dragging if the mouse leaves the carousel
});

// Touch events for mobile devices
carousel.addEventListener("touchstart", (event) => {
  startX = event.touches[0].pageX; // For touch devices
  isDragging = true;
});

carousel.addEventListener("touchmove", (event) => {
  if (isDragging) {
    const endX = event.touches[0].pageX; // Get current position
    if (startX > endX + 50) {
      // Swipe left
      $("#myCarousel").carousel("next");
      isDragging = false; // Stop dragging
    } else if (startX < endX - 50) {
      // Swipe right
      $("#myCarousel").carousel("prev");
      isDragging = false; // Stop dragging
    }
  }
});

carousel.addEventListener("touchend", () => {
  isDragging = false; // Stop dragging on touch end
});