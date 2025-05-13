// Evento para manejar el botón de entrada
document.getElementById('password-button').addEventListener('click', () => {
  const password = document.getElementById('password').value;
  if (password === '12345') {
    // Elimina el contenedor de contraseña del DOM
    const passwordContainer = document.getElementById('password-container');
    passwordContainer.parentNode.removeChild(passwordContainer);

    // Muestra el contenido principal
    document.getElementById('main-content').classList.remove('hidden');

    // Reproduce la música de fondo
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play().catch((error) => {
      console.error('Error al reproducir el audio:', error);
    });

    // Inicia la animación de globos y corazones
    startFloatingAnimation();
  } else {
    alert('Contraseña incorrecta');
  }
});

// Función para iniciar la animación de globos y corazones
function startFloatingAnimation() {
  const container = document.getElementById('hearts-and-balloons');
  for (let i = 0; i < 15; i++) {
    createFloatingElement('🎈', container); // Globos
    createFloatingElement('💗', container); // Corazones
  }
}

// Función para crear elementos flotantes
function createFloatingElement(symbol, container) {
  const element = document.createElement('div');
  element.textContent = symbol;
  element.style.position = 'absolute';
  element.style.fontSize = `${Math.random() * 30 + 20}px`; // Tamaño aleatorio
  element.style.color = '#e91e63'; // Color rosa
  element.style.top = '100%'; // Empieza desde abajo
  element.style.left = `${Math.random() * 100}%`; // Posición horizontal aleatoria
  container.appendChild(element);

  // Configuración de la animación
  const duration = Math.random() * 5 + 5; // Duración aleatoria entre 5 y 10 segundos
  element.animate(
    [
      { transform: 'translateY(0)', opacity: 1 },
      { transform: 'translateY(-200vh)', opacity: 0 }
    ],
    {
      duration: duration * 1000, // Duración en milisegundos
      iterations: Infinity // Animación infinita
    }
  );
}

// Evento para abrir ventanas al hacer clic
document.querySelectorAll('.window').forEach((window) => {
  window.addEventListener('click', () => {
    const content = window.querySelector('.window-content');
    if (content.style.display === 'none' || !content.style.display) {
      content.style.display = 'block'; // Mostrar contenido
    } else {
      content.style.display = 'none'; // Ocultar contenido
    }
  });
});