let vk_logo = document.querySelector('.section_item vk_logo')
vk_logo.addEventListener('click', function(e){
    anime({
        targets: '.section_item vk_logo',
        opacity: 0,
        scale: 10,
        duration: 1000
    })
})