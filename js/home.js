document.addEventListener('DOMContentLoaded', () => {
    // Navigation items
    const navItems = document.querySelectorAll('.nav-item:not(.logout-btn)');
    
    // Handle navigation item clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get the page name
            const page = item.getAttribute('data-page');
            console.log(`Navigating to: ${page}`);
            
            // Update content based on selection (placeholder)
            updateContent(page);
        });
    });
    
    // Logout button handler
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Redirect to login page
        window.location.href = 'login.html';
    });
    
    // Function to update content area (placeholder)
    function updateContent(page) {
        const contentBody = document.querySelector('.content-body');
        const contentHeader = document.querySelector('.content-header h1');
        
        switch(page) {
            case 'inicio':
                contentHeader.textContent = 'Inicio';
                contentBody.innerHTML = '<p>Bienvenido a la página de inicio.</p>';
                break;
            case 'eventos':
                contentHeader.textContent = 'Eventos';
                contentBody.innerHTML = '<p>Aquí podrás ver todos los eventos programados.</p>';
                break;
            case 'ajustes':
                contentHeader.textContent = 'Ajustes de Perfil';
                contentBody.innerHTML = `
                    <div class="settings-container">
                        <div class="profile-header-edit">
                            <i class="bi bi-person-circle profile-img-large"></i>
                            <button class="btn btn-sm btn-outline-primary mt-2">Cambiar Foto</button>
                        </div>
                        <form class="settings-form">
                            <div class="mb-3">
                                <label class="form-label">Nombre Completo</label>
                                <input type="text" class="form-control" value="Usuario de MUAJA">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" value="usuario@muaja.edu.mx">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Contraseña</label>
                                <input type="password" class="form-control" value="********">
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3">Guardar Cambios</button>
                        </form>
                    </div>
                `;
                break;
            default:
                contentHeader.textContent = 'Bienvenido a MUAJA';
                contentBody.innerHTML = '<p>Selecciona una opción del menú lateral para comenzar.</p>';
        }
    }
});
