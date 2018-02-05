(function () {

    Inputmask().mask(document.querySelectorAll("input"));

    function formIsEmpty(tag) {
        let index;
        let inputs = document.getElementsByTagName(tag);
        for (index = 0; index < inputs.length; ++index) {
            if (inputs[index].value == '') {
                inputs[index].classList.add("is-empty");
            } else {
                inputs[index].classList.remove("is-empty");
            }
            inputs[index].addEventListener("change", function (event) {
                if (event.target.value == '') {
                    event.target.classList.add("is-empty");
                } else {
                    event.target.classList.remove("is-empty");
                }
            });
        }
    }

    formIsEmpty('input');
    formIsEmpty('select');

    function formValid() {
        const inputs = document.querySelectorAll('input, select, textarea');

        for(let input of inputs) {
            input.addEventListener('invalid', () => {
                input.classList.add('is-error');
            }, false);

            input.addEventListener('blur', () => {
                if(input.value.length > 0) {
                    input.checkValidity();
                } else {
                    input.classList.remove('is-error');
                }
            })
        }
    }

    formValid();

    const swiperArticlesCourse = new Swiper('.swiper-articles-course', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.layout-about-gallery-course .swiper-button-next',
            prevEl: '.layout-about-gallery-course .swiper-button-prev'
        },
    });
    const swiperArticlesCoworking = new Swiper('.swiper-articles-coworking', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.swiper-buttons-articles-coworking .swiper-button-next',
            prevEl: '.swiper-buttons-articles-coworking .swiper-button-prev'
        }
    });

    let barBullets = [];

    const swiperCourseTeachers = new Swiper('.swiper-course-teachers', {
        slidesPerView: 'auto',
        lazy: true,
        effect: 'fade',
        crossFade: true,
        barBullets: [],
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.swiper-course-teachers .swiper-button-next',
            prevEl: '.swiper-course-teachers .swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet-icon',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<img src="' + this.slides[index].dataset.swiperPaginationIcon + '"><span class="swiper-pagination-icon"></span>' + '</span>';
            }
        },
        on: {
            init: function () {
                let self = this;


                // self.passedParams.barBullets = [];
                setTimeout(function () {
                    const barBulletsSelectors = self.el.querySelectorAll('.swiper-pagination-icon');

                    let barBulletsOptions = {
                        strokeWidth: 6,
                        // easing: 'easeInOut',
                        duration: 'autoplay' in self.passedParams ? self.passedParams.autoplay.delay : 500,
                        color: '#38ad9e',
                        trailColor: 'transparent',
                        trailWidth: 1,
                        svgStyle: null
                    };

                    for (let i = 0; i < barBulletsSelectors.length; i++) {
                        self.passedParams.barBullets.push(new ProgressBar.Circle(barBulletsSelectors[i], barBulletsOptions));
                    }

                    console.log(self.passedParams.barBullets);

                    console.log(self.pagination.bullets);

                    self.passedParams.barBullets[self.activeIndex].animate(1);
                }, 300)
            },
            slideChange: function () {
                let self = this;
                self.passedParams.barBullets.forEach(bar => bar.animate(0, {
                    duration: 500,
                }));
                self.passedParams.barBullets[this.activeIndex].animate(1)
            }
        }
    });



    // if(document.querySelector('.swiper-course-teachers') != null) {
    //     document.querySelector('.swiper-course-teachers').addEventListener('mouseenter', function () {
    //         swiperCourseTeachers.autoplay.stop();
    //         barBullets.forEach(bar => bar.stop());
    //     });
    //     document.querySelector('.swiper-course-teachers').addEventListener('mouseleave', function () {
    //         swiperCourseTeachers.autoplay.start();
    //         console.log(barBullets[swiperCourseTeachers.activeIndex]);
    //         barBullets[swiperCourseTeachers.activeIndex].animate(1);
    //     });
    // }


    const swiperWorkStudentsCourse = new Swiper('.swiper-work-students-course', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.swiper-work-students-course .swiper-button-next',
            prevEl: '.swiper-work-students-course .swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
            }

        }
    });
    const swiperPhotosCourse = new Swiper('.swiper-photos-course', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.swiper-photos-course .swiper-button-next',
            prevEl: '.swiper-photos-course .swiper-button-prev'
        }
    });
    const swiperPhotosCoworking = new Swiper('.swiper-photos-coworking', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.swiper-photos-coworking .swiper-button-next',
            prevEl: '.swiper-photos-coworking .swiper-button-prev'
        }
    });
    const swiperPhotosSecondary = new Swiper('.swiper-photos-secondary', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.swiper-photos-secondary .swiper-button-next',
            prevEl: '.swiper-photos-secondary .swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
            }

        }
    });
    const swiperPhotosSchool = new Swiper('.swiper-photos-school', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.swiper-photos-school .swiper-button-next',
            prevEl: '.swiper-photos-school .swiper-button-prev'
        }
    });
    const swipersReviews = new Swiper('.swiper-reviews', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.swiper-reviews .swiper-button-next',
            prevEl: '.swiper-reviews .swiper-button-prev'
        }
    });
    const swipersBoxBlog = new Swiper('.swiper-box-blog', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
        },
        lazy: true,
        navigation: {
            nextEl: '.swiper-box-blog .swiper-button-next',
            prevEl: '.swiper-box-blog .swiper-button-prev'
        }
    });
    const swipersEvents = new Swiper('.swiper-events', {
        slidesPerView: 'auto',
        lazy: true,
        navigation: {
            nextEl: '.layout-events .swiper-button-next',
            prevEl: '.layout-events .swiper-button-prev'
        }
    });

    // UIkit.util.on('#content-filter', 'show', function () {
    //     UIkit.update(event = 'update');
    // });


    if (document.querySelectorAll('.toggle').length !== 0) {
        UIkit.util.on('.toggle-course', 'shown', function () {
            console.log(swiperCourseTeachers);

            if(swiperCourseTeachers.length >= 0) {
                for(let i = 0; i < swiperCourseTeachers.length; i++) {
                    swiperCourseTeachers[i].swiper.update();
                    console.log('sliders', i);
                }
            } else {
                console.log('one');
                swiperCourseTeachers.update();
            }

            window.dispatchEvent(new Event('resize'));

        });

        UIkit.util.on('#course-sets', 'shown', function (event) {
            event.detail[0].$el.classList.add('is-disabled');
            window.dispatchEvent(new Event('resize'));
        });
        UIkit.util.on('#course-sets', 'hidden', function (event) {
            let buttons = document.querySelectorAll('[data-uk-toggle]');
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('is-disabled');
            }
            console.log('hidden', event);
            window.dispatchEvent(new Event('resize'));
        });
    }

    // let toggles = document.querySelectorAll('[data-uk-toggle]');
    //
    // for(let i = 0; i < toggles.length; i++) {
    //     toggles[i].addEventListener("click", function(event) {
    //         let buttonData = JSON.parse(event.target.dataset.ukToggleButton);
    //         console.log(event.target.classList.toggle(buttonData.cls));
    //     });
    // }


    window.addEventListener("click", function() {
        UIkit.update(event = 'update');
    });
    //

    // data-scroll-state='{"cls": "is-tester", "target": ["#hero"]}'
    // window.addEventListener("scroll", function(event) {
    //     let toggler = document.querySelectorAll('.navbar-toggler')[0];
    //     let data = JSON.parse(toggler.dataset.scrollState);
    //     toggler.classList.add(data.cls);
    //     console.log(data.target, event.scrollY);
    // });


})();