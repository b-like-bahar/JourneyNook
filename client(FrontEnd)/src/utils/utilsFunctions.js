export const scrollToTop = () => {
    let scrollPosition = 300; 

    if (window.innerWidth <= 768) {
        scrollPosition = 100; 
    } else if (window.innerWidth <= 1280) {
        scrollPosition = 200;
    } else 
        scrollPosition = 400; 
    }

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });


