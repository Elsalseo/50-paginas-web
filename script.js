let percentage = 0;
const percentageText = document.getElementById("percentage");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

// Simulamos carga
const interval = setInterval(() => {
  percentage++;
  percentageText.textContent = `Cargando... ${percentage}%`;

  if (percentage >= 100) {
    clearInterval(interval);
    loader.style.display = "none";
    content.style.display = "block";
  }
}, 30); // Aumenta cada 30 milisegundos (puedes ajustar)
