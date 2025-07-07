const lights = document.querySelectorAll('.light');
let current = 0;

function changeLight() {
  lights.forEach(light => light.classList.remove('active'));
  lights[current].classList.add('active');
  current = (current + 1) % lights.length;
}

changeLight(); // Start immediately
setInterval(changeLight, 3000); // Change every 3 seconds
