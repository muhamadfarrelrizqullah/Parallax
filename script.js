const title = document.querySelector('.title')
const leaf = document.querySelector('.leaf')
const sun = document.querySelector('.sun')
const hill4 = document.querySelector('.hill4')
const hill5 = document.querySelector('.hill5')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 2.5 + 'px'

    leaf.style.top = value * -1.5 + 'px'
    leaf.style.left = value * 1.5 + 'px'

    sun.style.top = value * -1 + 'px'
    
    hill5.style.left = value * 1.5 + 'px'

    hill4.style.left = value * -1.5 + 'px'

    
})