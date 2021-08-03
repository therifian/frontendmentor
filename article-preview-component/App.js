const open = document.getElementById('open')
const close = document.getElementById('close')
const box = document.getElementById('share')

open.addEventListener('click', () => {
    box.classList.add('active')
})

close.addEventListener('click', () => {
    box.classList.remove('active')
})