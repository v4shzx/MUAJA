document.addEventListener('DOMContentLoaded', () => {
    const btnEstudiante = document.getElementById('btnEstudiante');
    const btnMaestro = document.getElementById('btnMaestro');
    const switchBg = document.getElementById('switchBg');

    function setActive(role) {
        if (role === 'estudiante') {
            btnEstudiante.classList.add('active');
            btnMaestro.classList.remove('active');
            
            // Mover el fondo a la izquierda
            switchBg.style.left = '4px';
            switchBg.style.transform = 'translateX(0)';
            
            // Change theme to default (Guinda)
            document.body.classList.remove('teacher-theme');

        } else if (role === 'maestro') {
            btnMaestro.classList.add('active');
            btnEstudiante.classList.remove('active');
            
            // Mover el fondo a la derecha
            switchBg.style.transform = 'translateX(100%)'; 
            
            // Change theme to Teacher (Green)
            document.body.classList.add('teacher-theme');
        }
    }

    // Inicializar estado
    setActive('estudiante');

    btnEstudiante.addEventListener('click', () => {
        setActive('estudiante');
    });

    btnMaestro.addEventListener('click', () => {
        setActive('maestro');
    });
});
