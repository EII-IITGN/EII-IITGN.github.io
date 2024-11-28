const d = document;
const slideshow = d.getElementById('slideshow87');
const goLeft = d.getElementById('goLeft');
const goRight = d.getElementById('goRight');
const currentSlideIndicatorsContainer = d.getElementById('currentSlideIndicatorsContainer');
let windowWidth = window.innerWidth;
let autoSlide = true;
let autoSlideInterval;

const fn_goLeft = () => {
    try {
        if (slideshow.scrollLeft) {
            slideshow.scrollLeft -= windowWidth;
        } else {
            slideshow.scrollLeft = windowWidth * (slideshow.children.length);
        }
    } catch {
        console.log('No more space to scroll left');
    }
};

const fn_goRight = () => {
    try {
        if (Math.round((slideshow.scrollLeft / windowWidth)) < slideshow.children.length - 1) {
            slideshow.scrollLeft += windowWidth;
        } else {
            slideshow.scrollLeft = 0;
        }
    } catch {
        console.log('No more space to scroll right');
    }
};

const fn_goLeftClicked = () => {
    autoSlide = false;
    fn_goLeft();
    clearInterval(autoSlideInterval); // Stop autoSlide when left button is clicked
};

const fn_goRightClicked = () => {
    autoSlide = false;
    fn_goRight();
    clearInterval(autoSlideInterval); // Stop autoSlide when right button is clicked
};

const fn_autoSlide = () => {
    fn_goRight(); // Directly call fn_goRight to move the slideshow
};

const fn_updateCurrentSlideIndicators = () => {
    for (let i = 0; i < slideshow.children.length; i++) {
        currentSlideIndicatorsContainer.children[i].style.background = "#000000";
    }

    currentSlideIndicatorsContainer.children[Math.floor(slideshow.scrollLeft / windowWidth)].style.background = "#ffffff";
};

// Start the auto-sliding
autoSlideInterval = setInterval(fn_autoSlide, 2000);

// Function to stop autoSlide on vertical scroll (wheel or touch)


// Track the starting touch position for swipe detection
const fn_touchStart = (e) => {
    const touchStart = e.touches[0];
    this.startTouchX = touchStart.clientX;
    this.startTouchY = touchStart.clientY;
};
currentSlideIndicatorsContainer.innerHTML += `<div class="currentSlideIndicators" id="currentSlideIndicator0" style="background: #ffffff    ;"></div>`;

// Attach event listeners
for (let i = 1; i < slideshow.children.length; i++) {
    currentSlideIndicatorsContainer.innerHTML += `<div class="currentSlideIndicators" id="currentSlideIndicator${i}"></div>`;
}

slideshow.addEventListener('scroll', fn_updateCurrentSlideIndicators);


goLeft.addEventListener('click', fn_goLeftClicked); // Use fn_goLeftClicked to stop auto slide
goRight.addEventListener('click', fn_goRightClicked); // Use fn_goRightClicked to stop auto slide

fn_updateCurrentSlideIndicators();
document.onload = fn_updateCurrentSlideIndicators();