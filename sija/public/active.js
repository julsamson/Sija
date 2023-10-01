

const navLink = document.querySelectorAll('div ul li a');

function setActiveLink(event) {
    navLink.forEach(link => {
        link.style.backgroundColor = '';
        link.style.color = '';
    })

    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'red';
}

navLink.forEach(link => {
    link.addEventListener('click', setActiveLink)
})

const currentURL = window.location.href;
navLink.forEach(link => {
    if (link.href === currentURL) {
        link.style.backgroundColor = 'yellow';
        link.style.color = 'red';
    }
});



console.log(navLink);