// Add click event to toggle open class for showing or hiding nav-links
const toggleMenu = document.querySelector('#toggleMenu');
const header = document.querySelector('.header');
toggleMenu.addEventListener('click', function(){
    header.classList.toggle('open');
});

// Create activeColor function for removing and adding active class
const link = document.querySelectorAll('.link');
function activeColor() {
    link.forEach(n => {
        n.classList.remove('active'); // loop through every link then remove active class
        this.classList.add('active'); // Add active class using 'this' to target the only link that is currently clicked on
        
        //close menu once link is clicked
        if(header.classList.contains('open')){
            header.classList.remove('open');
        }
    });
    
}

// Add click event for every links then call the activeColor function
link.forEach(n => {
    n.addEventListener('click', activeColor);
})

// Use this to improve performance
// for(let i = 0; i < link.length; i++){
//     console.log(i);
//     link[i].addEventListener('click', activeColor);
// }


/* Animate on Scroll */
const scrollOffset = 100;
const scrollElements = document.querySelectorAll('.js-scroll');

// detecting when an scrolling element is in view
const elementInView = (el, offset = 0) => {
    // getBoundingClientRect().top a method to get an element’s distance from the top of the page(ex: scrolling element div tag)
    // the value of the element will always change when scrolling
    const elementTop = el.getBoundingClientRect().top;

    // window.innerHeight or document.documentElement.clientHeight to get the height of the viewport(holds the browser height)
    // returns true if the scrolling element has scrolled by the scrollOffset amount into the page
    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop >= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
}

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollOffset)) {
            displayScrollElement(el);
        } else if(elementOutofView(el)){
            hideScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})

