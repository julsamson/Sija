var currentUrl = window.location.href;
var navLink = document.querySelectorAll('div li');

navLink.forEach(function(link){
    if(link.href === currentUrl){
        link.parentElement.classList.add('active');
    }
})