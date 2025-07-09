const lights = document.querySelectorAll(".light");
let current = 0;

function changeLight() {
  lights.forEach((light) => light.classList.remove("active"));
  lights[current].classList.add("active");
  current = current + 1;
  if (current >= lights.length) {
    current = 0;
  }
}

changeLight();
setInterval(changeLight, 3000);
