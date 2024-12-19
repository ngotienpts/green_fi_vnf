document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    var bodyEle = document.querySelector("body");
    var navbar = document.querySelector(".js__navbar");
    var navbarMb = document.querySelector(".js__navbarMb");


    // sub menu
    const subMenus = document.querySelectorAll(".js__subMenuContainer");
    var showSearchMb = document.querySelector(".js__showSearchMb");
    var searchMbForm = document.querySelector(".js__searchMbSecondary");


    // slide

    var autoSlides = document.querySelectorAll(".js__swiperAutoContainer");
    const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // submenu
            if (subMenus) {
                subMenus.forEach((subMenu) => {
                    var menu = subMenu.querySelector(".js__subMenu");
                    var showSubMenu = subMenu.querySelector(".js__showSubMenu");
                    var closeSubMenu =
                        subMenu.querySelector(".js__closeSubMenu");

                    showSubMenu.onclick = function () {
                        menu.classList.add("active");
                        bodyEle.classList.add("overflow-hidden");
                    };
                    closeSubMenu.onclick = function () {
                        menu.classList.remove("active");
                        bodyEle.classList.remove("overflow-hidden");
                    };
                });
            }

            // searchMbContainers
            if (showSearchMb && searchMbForm) {
                showSearchMb.onclick = function () {
                    searchMbForm.classList.toggle("active");
                };
            }

            // hide cac element khi click ra ngoai
            // document.addEventListener("click", function (e) {

            // });
        },
  
        // slider auto
        sliderAutoItems: function () {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        },

        // slider three items
        sliderThreeItems: function () {
            if (threeSlides) {
                threeSlides.forEach((item) => {
                    var slider = item.querySelector(".js__threeSlide");
                    var next = item.querySelector(".swiper-button-next");
                    var prev = item.querySelector(".swiper-button-prev");
                    var pagi = item.querySelector(".swiper-pagination");
                    new Swiper(slider, {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        slidesPerGroup: 1,
                        navigation: {
                            nextEl: next || null,
                            prevEl: prev || null,
                        },
                        pagination: {
                            el: pagi || null,
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            }
                        },
                    });
                });
            }
        },

        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;

            if (navbar) {
                const isSticky = scrollY > 500;
                if (isSticky !== this.isSticky) {
                    navbar.classList.toggle("sticky", isSticky);
                    this.isSticky = isSticky;
                }
            }
            if (navbarMb) {
                const isStickyMb = scrollY > 500;
                if (isStickyMb !== this.isStickyMb) {
                    navbarMb.classList.toggle("sticky", isStickyMb);
                    this.isStickyMb = isStickyMb;
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // slider auto
            this.sliderAutoItems();
            // slider three items
            this.sliderThreeItems();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
