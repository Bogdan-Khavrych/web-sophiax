// document.querySelectorAll('.our__project-link').forEach((element) => {
//     element.addEventListener("mousemove", (element, event) => {
//         var relX = event.pageX - this.offsetLeft - 680;
//         var relY = event.pageY - this.offsetTop - 180;

//         element.getElementsByClassName("our__project-text")[0].style.left = `${relX}px`;
//         element.getElementsByClassName("our__project-text")[0].style.top = `${relY}px`;
//     });
// });

if (window.innerWidth >= 1025) {
    document.querySelector('#scrollDemo .fp-overflow').addEventListener("scroll", () => {
        loadScreen();
    });
} else {
    document.querySelector('.mobile-scroll').addEventListener("scroll", () => {
        loadScreen();
        headerMobile();
    });
}

let lastScrollTop = 0;
function headerMobile() {
    if (document.querySelector('.mobile-scroll').scrollTop < lastScrollTop) {
        document.querySelector("header").classList.add('active');
    } else if(document.querySelector('.mobile-scroll').scrollTop > 0) {
        document.querySelector("header").classList.remove('active');
        document.querySelector("header").classList.remove('transparent');
    }
    lastScrollTop = document.querySelector('.mobile-scroll').scrollTop;
}

function loadScreen() {
    let scrollDemo;
    if (window.innerWidth >= 1025) {
        scrollDemo = document.querySelector("#scrollDemo .fp-overflow")
    } else {
        scrollDemo = document.querySelector(".mobile-scroll")
    }


    let endPoint = document.querySelector(".screen").offsetHeight - window.innerHeight;

    if (scrollDemo.scrollTop <= 500) {
        document.querySelector("header").classList.add('transparent')
    }

    if (scrollDemo.scrollTop <= (endPoint / 3)) {
        let scaleCalc = scrollDemo.scrollTop * (3 / (endPoint / 3))
        let scaleCalc2 = scrollDemo.scrollTop * (300 / (endPoint / 5))
        let scaleCalc3 = (scrollDemo.scrollTop - scrollDemo.scrollTop - scrollDemo.scrollTop) * (1 / (endPoint / 5))

        if (scaleCalc < 0){
            scaleCalc = 0;
        }

        document.querySelector('.screen__text').style.transform = `translateY(-${scaleCalc2}%)`
        document.querySelector('.screen__text').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__scroll').style.transform = `translateY(${scaleCalc2}%)`
        document.querySelector('.screen__scroll').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__intro').style.scale = `${scaleCalc + 1}`
        document.querySelector('.screen__intro-wrap').style.scale = `1`
    } else {
        let scaleCalc4 = (scrollDemo.scrollTop - (endPoint / 3)) * (25 / (endPoint / 1))
        if (scaleCalc4 < 0){
            scaleCalc4 = 0;
        }
        document.querySelector('.screen__intro-wrap').style.scale = `${scaleCalc4 + 1}`
    }

    if (scrollDemo.scrollTop >= endPoint) {
        let scaleCalc = scrollDemo.scrollTop * (3 / (endPoint / 3))
        let scaleCalc2 = scrollDemo.scrollTop * (300 / (endPoint / 5))
        let scaleCalc3 = (scrollDemo.scrollTop - scrollDemo.scrollTop - scrollDemo.scrollTop) * (1 / (endPoint / 5))

        if (scaleCalc < 0){
            scaleCalc = 0;
        }

        document.querySelector('.screen__text').style.transform = `translateY(-${scaleCalc2}%)`
        document.querySelector('.screen__text').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__scroll').style.transform = `translateY(${scaleCalc2}%)`
        document.querySelector('.screen__scroll').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__intro').style.scale = `${scaleCalc + 1}`
        document.querySelector('.screen__intro-wrap').style.scale = `1`
        let scaleCalc4 = (scrollDemo.scrollTop - (endPoint / 3)) * (25 / (endPoint / 1))
        if (scaleCalc4 < 0){
            scaleCalc4 = 0;
        }
        document.querySelector('.screen__intro-wrap').style.scale = `${scaleCalc4 + 1}`
    }

    if (scrollDemo.scrollTop >= endPoint + 300) {
        document.querySelector('.nav').style.opacity = 1;
        document.querySelector('.nav').style.zIndex = 1110;
        document.querySelector('.nav').style.visibility = 'visible';
    } else {
        document.querySelector('.nav').style.opacity = 0;
        document.querySelector('.nav').style.zIndex = 0;
        document.querySelector('.nav').style.visibility = 'hidden';
    }
}



document.querySelectorAll('.--link-about').forEach((element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.innerWidth >= 1025) {
            fullpage_api.moveTo('about', 0);
            burgerClose();
        } else {
            fullpage_api.moveTo('about', 0);
            burgerClose();

            let screen = document.querySelector(".screen").offsetHeight;
            document.querySelector('.mobile-scroll').scrollTop = screen;
        }
    })
});

document.querySelectorAll('.--link-team').forEach((element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        if (window.innerWidth >= 1025) {
            slideIndexS = 3;
            fullpage_api.moveTo('about', 2);
            fullpage_api.moveTo('our-team');
        } else {
            // Scroll to section
            let scrollElement = document.querySelector(".mobile-scroll")
            let scrollEnd = document.querySelector('.first-screen').offsetHeight + document.querySelector('.about').offsetHeight;
            scrollElement.scrollTop = scrollEnd;
        }
        burgerClose();
    })
});

document.querySelectorAll('.--link-portfolio').forEach((element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        if (window.innerWidth >= 1025) {
            slideIndexS = 3;
            fullpage_api.moveTo('about', 2);
            fullpage_api.moveTo('portfolio');
        } else {
            // Scroll to section
            let scrollElement = document.querySelector(".mobile-scroll")
            let scrollEnd = document.querySelector('.first-screen').offsetHeight + document.querySelector('.about').offsetHeight + document.querySelector('.team').offsetHeight;
            scrollElement.scrollTop = scrollEnd;
        }

        burgerClose();
    })
});

document.querySelectorAll('.--link-contacts').forEach((element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        if (window.innerWidth >= 1025) {
            slideIndexS = 3;
            fullpage_api.moveTo('about', 2);
            fullpage_api.moveTo('contacts');
        } else {
            // Scroll to section
            let scrollElement = document.querySelector(".mobile-scroll")
            let scrollEnd = document.querySelector('.first-screen').offsetHeight + document.querySelector('.about').offsetHeight + document.querySelector('.team').offsetHeight + document.querySelector('.projects').offsetHeight;
            scrollElement.scrollTop = scrollEnd;
        }
        burgerClose();
    })
});

// Dragging for our porjects
const slider = document.querySelector('.our__projects');
let mouseDown = false;
let startX, scrollLeft;
let sliderIsActive = false;

let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
    mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) {
        sliderIsActive = false;
        return;
    }
    sliderIsActive = true;
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

document.querySelectorAll('.our__pict').forEach((element) => {
    element.addEventListener('click', function (e) {
        if (sliderIsActive){
            e.preventDefault();
        } 
    })
});