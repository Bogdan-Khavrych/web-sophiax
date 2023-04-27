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
    } else {
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

        document.querySelector('.screen__text').style.transform = `translateY(-${scaleCalc2}%)`
        document.querySelector('.screen__text').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__scroll').style.transform = `translateY(${scaleCalc2}%)`
        document.querySelector('.screen__scroll').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__intro').style.scale = `${scaleCalc + 1}`
        document.querySelector('.screen__intro-wrap').style.scale = `1`
    } else {
        let scaleCalc4 = (scrollDemo.scrollTop - (endPoint / 3)) * (25 / (endPoint / 1))
        document.querySelector('.screen__intro-wrap').style.scale = `${scaleCalc4 + 1}`
    }

    if (scrollDemo.scrollTop >= endPoint) {
        let scaleCalc = scrollDemo.scrollTop * (3 / (endPoint / 3))
        let scaleCalc2 = scrollDemo.scrollTop * (300 / (endPoint / 5))
        let scaleCalc3 = (scrollDemo.scrollTop - scrollDemo.scrollTop - scrollDemo.scrollTop) * (1 / (endPoint / 5))
        document.querySelector('.screen__text').style.transform = `translateY(-${scaleCalc2}%)`
        document.querySelector('.screen__text').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__scroll').style.transform = `translateY(${scaleCalc2}%)`
        document.querySelector('.screen__scroll').style.opacity = `${scaleCalc3 + 1}`
        document.querySelector('.screen__intro').style.scale = `${scaleCalc + 1}`
        document.querySelector('.screen__intro-wrap').style.scale = `1`
        let scaleCalc4 = (scrollDemo.scrollTop - (endPoint / 3)) * (25 / (endPoint / 1))
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


document.addEventListener("click", function (event) {
    if (event.target.matches(".header__menu-top-lang") || !event.target.closest(".header__menu, .header__burger-btn")) {
        document.querySelector('.header__menu-top-lang').classList.remove("active");
        burgerClose();
    }
});

document.addEventListener("click", function (event) {
    if (event.target.matches(".header__lang-btn-wrap") || !event.target.closest(".header__lang-btn-wrap, .header__lang-menu-header")) {
        document.querySelector('.header__lang').classList.remove("active");
    }
});

document.querySelector('.header__lang-btn-wrap').addEventListener('click', function () {
    document.querySelector('.header__lang').classList.toggle("active");
})

document.addEventListener("click", function (event) {
    if (event.target.matches(".header__menu-top-lang-btn-wrap") || !event.target.closest(".header__menu-top-lang-btn-wrap, .header__menu-lang-menu")) {
        document.querySelector('.header__menu-top-lang').classList.remove("active");
    }
});

document.querySelector('.header__menu-top-lang-btn-wrap').addEventListener('click', function () {
    document.querySelector('.header__menu-top-lang').classList.toggle("active");
})

function burgerClose() {
    document.querySelector('.header__burger').classList.remove("active");
    document.querySelector('.header').classList.remove("burger-active");
    document.querySelector('.cover').classList.remove("active");
}

document.querySelector('.header__burger-btn').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.add("active");
    document.querySelector('.header').classList.add("burger-active");
    document.querySelector('.cover').classList.add("active");
})

document.querySelector('.header__burger-close').addEventListener('click', function () {
    burgerClose();
})

document.querySelector('.team .fp-overflow').addEventListener("scroll", () => {
    loadPortfolio();
});

function loadPortfolio() {
    let element = document.querySelector('.team .fp-overflow');
    let teamViewHeight = document.querySelector('.team__view').offsetHeight;
    let portfolioViewHeight = document.querySelector('.our').offsetHeight;

    let scrollStart = teamViewHeight;
    let scrollEnd = document.querySelector('.team .fp-overflow .team-scroll').offsetHeight - window.innerHeight;

    function calcHandler() {
        let formula = (element.scrollTop - scrollStart) * (380 / scrollEnd);
        if (formula <= 0) {
            return 0
        } else {
            return formula
        }
    }
    let calc = calcHandler();

    // Transform logic
    // if (element.scrollTop >= scrollStart) {
    //     let projects = document.querySelector('.our__projects');
    //     projects.style.transform = `translateX(-${calc}px)`;
    // } else {
    //     let projects = document.querySelector('.our__projects');
    //     projects.style.transform = `translateX(-${calc}px)`;
    // }

    // Navgiation logic
    if (element.scrollTop >= (teamViewHeight + portfolioViewHeight - 300)) {
        document.querySelector('.nav__current-count').innerHTML = '4'
        document.querySelector('.nav__items').classList.remove('--items-active-blue')

        document.querySelectorAll('.nav__link').forEach((element) => {
            element.classList.remove('current');
        });
        document.querySelector('.nav__link-contacts').classList.add('current')
    }
    else if (element.scrollTop >= teamViewHeight - 200) {
        document.querySelector('.nav__current-count').innerHTML = '3'
        document.querySelector('.nav__items').classList.add('--items-active-blue')

        document.querySelectorAll('.nav__link').forEach((element) => {
            element.classList.remove('current');
        });
        document.querySelector('.nav__link-portfolio').classList.add('current')
    }
    else if (element.scrollTop < teamViewHeight - 200) {
        document.querySelector('.nav__current-count').innerHTML = '2'
        document.querySelector('.nav__items').classList.add('--items-active-blue')

        document.querySelectorAll('.nav__link').forEach((element) => {
            element.classList.remove('current');
        });
        document.querySelector('.nav__link-team').classList.add('current')
    }



    // Navgiation logic

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
    
            let scrollElement = document.querySelector(".team .fp-overflow")
            scrollElement.scrollTop = 1;
            setTimeout(() => {
                scrollElement.scrollTop = 0;
            }, 100);
    
            loadPortfolio();
            burgerClose();
        } else {
            burgerClose();

            let screen = document.querySelector(".screen").offsetHeight;
            let about = document.querySelector(".about").offsetHeight;
            document.querySelector('.mobile-scroll').scrollTop = screen + about;
        }
    })
});

document.querySelectorAll('.--link-portfolio').forEach((element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.innerWidth >= 1025) {
            slideIndexS = 3;
            fullpage_api.moveTo('about', 2);
            fullpage_api.moveTo('our-team');
    
            let scrollElement = document.querySelector(".team .fp-overflow")
            let scrollEnd = document.querySelector('.team__view').offsetHeight;
            scrollElement.scrollTop = scrollEnd;
    
            loadPortfolio();
            burgerClose();
        } else {
            burgerClose();

            let screen = document.querySelector(".screen").offsetHeight;
            let about = document.querySelector(".about").offsetHeight;
            let team = document.querySelector(".team__view").offsetHeight;
            document.querySelector('.mobile-scroll').scrollTop = screen + about + team;
        }
    })
});

document.querySelectorAll('.--link-contacts').forEach((element) => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.innerWidth >= 1025) {
            slideIndexS = 3;
            fullpage_api.moveTo('about', 2);
            fullpage_api.moveTo('our-team');
    
            let scrollElement = document.querySelector(".team .fp-overflow")
            let scrollEnd = document.querySelector('.team-scroll').offsetHeight + document.querySelector('.our-scroll').offsetHeight;
            scrollElement.scrollTop = scrollEnd;
    
            loadPortfolio();
            burgerClose();
        } else {
            burgerClose();

            let screen = document.querySelector(".screen").offsetHeight;
            let about = document.querySelector(".about").offsetHeight;
            let team = document.querySelector(".team__view").offsetHeight;
            let portfolio = document.querySelector(".our__view").offsetHeight;
            document.querySelector('.mobile-scroll').scrollTop = screen + about + team + portfolio;
        }
    })
});

// Dragging for our porjects
const slider = document.querySelector('.our__projects');
let mouseDown = false;
let startX, scrollLeft;

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
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);