// main.js for voiture 

// change the icon when bar clicked
const bar = document.querySelector('.bar');
bar.addEventListener('click', () => {
    bar.classList.contains('bar-clicked')? bar.classList.remove('bar-clicked') : bar.classList.add('bar-clicked');
});

// slide automatically 
const agenceItems = document.querySelectorAll('.agences-container .agence-item');
const bullets = document.querySelectorAll('.agences .bullets li');
setInterval(() => {
    if(agenceItems[0].classList.contains('trans')) {
        agenceItems.forEach(item => {
            item.classList.remove('trans');
        });
    }
    else {
        agenceItems.forEach(item => {
            item.classList.add('trans');
        });
    }
    bullets.forEach(list => {
        list.classList.remove('active');
    })
},3000);
