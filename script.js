function openMenu(){document.getElementById('fullMenu').classList.add('open');}
function closeMenu(){document.getElementById('fullMenu').classList.remove('open');}
function toggleSub(e,id){e.preventDefault();document.getElementById(id).classList.toggle('open');}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href')); if(t){e.preventDefault(); t.scrollIntoView({behavior:'smooth'});}});});
