let lastScrollTop = 0;
const navbar = document.querySelector(".header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll === 0) {
        // At the top of the page -> Show Navbar
        navbar.style.top = "0";
    } else {
        // Scrolling Down or Up -> Hide Navbar
        navbar.style.top = "-190px"; /* Move it up */
    }

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});





const items = document.querySelectorAll('.product');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

items.forEach(item => {
    observer.observe(item);
});