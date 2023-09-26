const bars = document.getElementById('bars');
const xmark = document.getElementById('xmark');
const nav = document.getElementById('naviTab')

bars.addEventListener('click', function (){
    bars.classList.toggle('hidden');
    nav.classList.toggle('hidden');
})

xmark.addEventListener('click', function(){
    bars.classList.remove('hidden');
    nav.classList.add('hidden');
})