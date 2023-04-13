import './_vendor';

const menuBtn = document.querySelector('.menu-btn')
const header = document.querySelector('.header')
const body = document.body

const handleClick = () => {
    menuBtn.classList.toggle('menu-btn--open')
    header.classList.toggle('header--open')

    if (body.classList.contains('no-scroll')) {
        body.classList.remove('no-scroll')
    } else {
        body.classList.add('no-scroll')
    }
}

menuBtn.addEventListener('click', () => handleClick())

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        scmooth: 1,
        effects: true
    })

    gsap.fromTo('.keeping-finding__top', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.keeping-finding__top',
            start: 'top',
            end: 'bottom',
            scrub: true
        }
    })
    gsap.fromTo('.keeping-finding__user-quote', { opacity: 0, y: 60 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.keeping-finding__bottom',
            start: '-450',
            end: "-100",
            scrub: true
        }
    })
    gsap.fromTo('.volunteer__top-info', { opacity: 0, y: 60 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.keeping-finding__user-quote',
            start: '-450',
            end: "-100",
            scrub: true
        }
    })
    gsap.fromTo('.volunteer__quotes', { opacity: 0, y: 60 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.volunteer__top-info',
            start: '-450',
            end: "-100",
            scrub: true
        }
    })
    gsap.fromTo('.volunteer__bottom', { opacity: 0, y: 60 }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: '.volunteer__quotes',
            start: '-450',
            end: "-100",
            scrub: true
        }
    })
}




