// const container = document.getElementById('cont');
const container = document.querySelector(".featureImage");
const slider = document.getElementById("slider");
document.querySelector(".slider").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);

  if (e.target.value < 20) {
    document.querySelector('.beforeText').style.display = "none";
  } else if(e.target.value > 80) {
    document.querySelector('.afterText').style.display = 'none';
  } else {
    document.querySelector('.beforeText').style.display = 'block';
    document.querySelector('.afterText').style.display = 'block';
  }
  console.log(e.target.value);
});

// for mouse try
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



// // image before after font
// const element = document.querySelector('.afterText');
// // featureImage class
// const image = document.querySelector('.featureImage');
// const beforeText = document.querySelector('.beforeText');
// const position = parseFloat(getComputedStyle(image).getPropertyValue('--position').trim());
// const position1 = parseFloat(getComputedStyle(beforeText).getPropertyValue('--position'));
// // const position = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--position'));
// console.log(position);
// console.log(position1);

// if (position < 20) {
//   element.style.display = "none";
// } else {
//   element.style.display = 'block';
// }


// // Initial check
// checkPosition();

// // Set up a MutationObserver to watch for changes in the :root element
// const observer = new MutationObserver(() => {
//   checkPosition();
// });

// // Start observing changes to the :root element's attributes
// observer.observe(image, { attributes: true });

// // If you change the value of --position dynamically, call checkPosition to update immediately
// // For example, updating the CSS variable:
// image.style.setProperty('--position', observer); // This will trigger the observer