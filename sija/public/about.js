const mission = document.getElementById('mission');
const vision = document.getElementById('vision');
const mission_p = document.getElementById('mission-p');
const vision_p = document.getElementById('vision-p');


mission.addEventListener('click', ()=>{
    mission_p.style.display = 'block';
    vision_p.style.display = 'none';
    mission.style.backgroundColor = 'gray';
    mission.style.color = 'rgb(124 45 18 / var(--tw-text-opacity))';
    vision.style.backgroundColor = '';
});

vision.addEventListener('click', ()=>{
    mission_p.style.display = 'none';
    vision_p.style.display = 'block';
    mission.style.backgroundColor = '';
    vision.style.color = 'rgb(124 45 18 / var(--tw-text-opacity))';
    vision.style.backgroundColor = 'gray';
});