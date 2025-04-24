document.addEventListener('DOMContentLoaded', () => {
  const orb = document.getElementById('cursor-orb');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let orbX = mouseX;
  let orbY = mouseY;
  let isVisible = false;

  const colors = [
    'rgba(0,197,142,0.6)', // teal green
    'rgba(108,92,231,0.6)', // violet
    'rgba(10,43,60,0.6)',   // deep navy
    'rgba(27,31,36,0.6)',   // dark gray-blue
  ];

  let colorIndex = 0;

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  function updateOrb() {
    orbX = lerp(orbX, mouseX, 0.15);
    orbY = lerp(orbY, mouseY, 0.15);
    orb.style.transform = `translate3d(${orbX - orb.offsetWidth / 2}px, ${orbY - orb.offsetHeight / 2}px, 0)`;
    requestAnimationFrame(updateOrb);
  }

  function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    orb.style.background = `radial-gradient(circle at center, ${colors[colorIndex]}, transparent 70%)`;
  }

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      orb.style.opacity = '1';
      isVisible = true;
    }
  });

  document.addEventListener('scroll', () => {
    if (!isVisible) {
      orb.style.opacity = '1';
      isVisible = true;
    }
  });

  setInterval(changeColor, 4000);

  updateOrb();
});
