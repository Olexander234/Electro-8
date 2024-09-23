let img = document.querySelector('.main__security-img')

window.addEventListener('mousemove', function (event){
    let x = event.offsetX
    let y = event.offsetY

    img.style.transform = 'translate(${-x/20}px, ${-y/20}px'
    img2.style.transform = 'translate(${-x/10}px, ${-y10}px'
    img3.style.transform = 'translate(${-x/40}px, ${-y/80}px'
    img4.style.transform = 'translate(${-x/20}px, ${-y/20}px'
})