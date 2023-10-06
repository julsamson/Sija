function scrollUp() {
    const scrollUpButton = document.getElementById('scroll-up');
    const scrollDuration = 200;
    const scrollSteps = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(()=>{
         if(window.scrollY !== 0){
            window.scrollBy(0, scrollSteps);
         }else {
            clearInterval(scrollInterval);
         }
    }, 15);
}

window.addEventListener('scroll', ()=>{
    const scrollUpButton = document.getElementById('scroll-up');
    if(window.scrollY > 100) {
        scrollUpButton.style.display = 'block';
    }else {
        scrollUpButton.style.display = 'none';
    }
})