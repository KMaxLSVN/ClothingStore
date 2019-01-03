document.addEventListener("DOMContentLoaded", function(event){

    function triggerSubMenu() {
        let elemClick = document.getElementsByClassName('list')[0];
        elemClick.addEventListener('click', function (event) {
            console.log(event.target.childNodes[3].firstChild);
            let currentElem = event.target.nextElementSibling;
            let currentIcon = event.target.childNodes[3].firstChild;
            currentElem.classList.toggle('activeSubMenu');
            currentIcon.classList.toggle('fa-plus fa-minus');
        })

    }
    triggerSubMenu();

//--- Slider top ---
    new Swiper('.top-slider .swiper-container', {
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

//--- Slider product ---
    new Swiper('.product-slider .swiper-container', {
        speed: 700,
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            750: {
                slidesPerView: 4,
            },
            320: {
                slidesPerView: 1,
            },
        },
        freeMode: true,
    });



});

//---MENU---
function triggerMenu(trigger, element) {
    let elem = document.getElementsByClassName(element)[0];
    let backPopup = document.getElementsByClassName('b-popup')[0];
    trigger ? (elem.style.display = "block", backPopup.style.display = "block"
        ) : (
            elem.style.display = "none", backPopup.style.display = "none");
}

