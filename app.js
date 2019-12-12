const bannerBtn = document.querySelector('.banner button');
const  banner = document.querySelector('.banner');
const slideshowWrapper = document.querySelector('.slideshow-wrapper');
const slideshow = document.querySelector('.slideshow');

bannerBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    slideshowWrapper.style.cssText = 'opacity: 1; visibility: visible';
    slideshow.style.animation = 'slideshow 24s infinite';
});