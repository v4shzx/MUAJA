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
                contentBody.innerHTML = `
                    <div class="dashboard-container">
                        <!-- Carousel Section -->
                        <div class="recent-events-section mb-4">
                            <h3 class="section-title">Eventos Recientes</h3>
                            <div id="eventsCarousel" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#eventsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#eventsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#eventsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="img/event1.png" class="d-block w-100 carousel-img" alt="Conferencia">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Conferencia Internacional</h5>
                                            <p>Innovación y tecnología en la educación superior.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="img/event2.png" class="d-block w-100 carousel-img" alt="Taller">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Taller de Robótica</h5>
                                            <p>Alumnos colaborando en el nuevo laboratorio.</p>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="img/event3.png" class="d-block w-100 carousel-img" alt="Graduación">
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5>Graduación 2024</h5>
                                            <p>Felicidades a nuestros nuevos egresados.</p>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#eventsCarousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Anterior</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#eventsCarousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Siguiente</span>
                                </button>
                            </div>
                        </div>
                        
                        <div class="row">
                            <!-- Calendar Section -->
                            <div class="col-lg-7 mb-4">
                                <h3 class="section-title">Calendario Académico</h3>
                                <div class="calendar-container">
                                    <div class="calendar-header">
                                        <button class="btn btn-sm btn-light"><i class="bi bi-chevron-left"></i></button>
                                        <span class="calendar-month">Diciembre 2025</span>
                                        <button class="btn btn-sm btn-light"><i class="bi bi-chevron-right"></i></button>
                                    </div>
                                    <div class="calendar-grid">
                                        <div class="day-name">Dom</div><div class="day-name">Lun</div><div class="day-name">Mar</div><div class="day-name">Mie</div><div class="day-name">Jue</div><div class="day-name">Vie</div><div class="day-name">Sab</div>
                                        
                                        <!-- Placeholder Days - Dec 2025 starts on Monday -->
                                        <div class="day empty"></div>
                                        <div class="day">1</div><div class="day">2</div><div class="day">3</div><div class="day">4</div><div class="day">5</div><div class="day">6</div>
                                        <div class="day">7</div><div class="day">8</div><div class="day today">9</div><div class="day">10</div><div class="day">11</div><div class="day">12</div><div class="day">13</div>
                                        <div class="day">14</div><div class="day event-day">15</div><div class="day">16</div><div class="day">17</div><div class="day">18</div><div class="day">19</div><div class="day">20</div>
                                        <div class="day">21</div><div class="day">22</div><div class="day">23</div><div class="day holiday">24</div><div class="day holiday">25</div><div class="day">26</div><div class="day">27</div>
                                        <div class="day">28</div><div class="day">29</div><div class="day">30</div><div class="day">31</div><div class="day empty"></div><div class="day empty"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Upcoming Events Section -->
                            <div class="col-lg-5">
                                <h3 class="section-title">Próximos Eventos</h3>
                                <div class="upcoming-events-list">
                                    <div class="event-card">
                                        <div class="event-date">
                                            <span class="day">15</span>
                                            <span class="month">DIC</span>
                                        </div>
                                        <div class="event-info">
                                            <h4>Entrega de Proyectos</h4>
                                            <p>Aula Magna • 10:00 AM</p>
                                        </div>
                                    </div>
                                    <div class="event-card">
                                        <div class="event-date">
                                            <span class="day">24</span>
                                            <span class="month">DIC</span>
                                        </div>
                                        <div class="event-info">
                                            <h4>Vacaciones de Invierno</h4>
                                            <p>Inicio de periodo vacacional</p>
                                        </div>
                                    </div>
                                    <div class="event-card">
                                        <div class="event-date">
                                            <span class="day">06</span>
                                            <span class="month">ENE</span>
                                        </div>
                                        <div class="event-info">
                                            <h4>Regreso a Clases</h4>
                                            <p>Inicio de cuatrimestre</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                // Initialize carousel manually if needed, though data-bs-ride usually handles it.
                // Since this content is dynamic, Bootstrap might need a nudge if included via module, 
                // but standard CDN script often watches DOM. We'll rely on attributes for now.
                break;
            case 'eventos':
                contentHeader.textContent = 'Gestión de Eventos';
                contentBody.innerHTML = `
                    <div class="events-management">
                        <!-- Create Event Button -->
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="section-title mb-0">Lista de Eventos</h3>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#eventModal" onclick="openEventModal()">
                                <i class="bi bi-plus-circle"></i> Crear Evento
                            </button>
                        </div>

                        <!-- Events Table -->
                        <div class="table-responsive">
                            <table class="table table-hover events-table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Fecha</th>
                                        <th>Hora</th>
                                        <th>Ubicación</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="eventsTableBody">
                                    <tr>
                                        <td>Conferencia Internacional</td>
                                        <td>15 Dic 2025</td>
                                        <td>10:00 AM</td>
                                        <td>Aula Magna</td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-primary me-1" onclick="editEvent(0)">
                                                <i class="bi bi-pencil"></i>
                                            </button>
                                            <button class="btn btn-sm btn-outline-danger" onclick="deleteEvent(0)">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Taller de Robótica</td>
                                        <td>18 Dic 2025</td>
                                        <td>2:00 PM</td>
                                        <td>Laboratorio 3</td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-primary me-1" onclick="editEvent(1)">
                                                <i class="bi bi-pencil"></i>
                                            </button>
                                            <button class="btn btn-sm btn-outline-danger" onclick="deleteEvent(1)">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Graduación 2024</td>
                                        <td>20 Dic 2025</td>
                                        <td>5:00 PM</td>
                                        <td>Auditorio Principal</td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-primary me-1" onclick="editEvent(2)">
                                                <i class="bi bi-pencil"></i>
                                            </button>
                                            <button class="btn btn-sm btn-outline-danger" onclick="deleteEvent(2)">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Event Modal -->
                        <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="eventModalLabel">Crear Evento</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="eventForm">
                                            <div class="mb-3">
                                                <label for="eventName" class="form-label">Nombre del Evento</label>
                                                <input type="text" class="form-control" id="eventName" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="eventDate" class="form-label">Fecha</label>
                                                <input type="date" class="form-control" id="eventDate" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="eventTime" class="form-label">Hora</label>
                                                <input type="time" class="form-control" id="eventTime" required>
                                            </div>
                                            <div class="mb-3">
                                                <label for="eventLocation" class="form-label">Ubicación</label>
                                                <input type="text" class="form-control" id="eventLocation" required>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-primary" onclick="saveEvent()">Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
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
                                <input type="text" class="form-control" value="MIGUEL CRUZ SAMANO" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Matricula</label>
                                <input type="text" class="form-control" value="UTOM20253456" readonly>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" value="miguelcruzsamano@utom.edu.mx">
                            </div>
        
                            <div class="mb-3">
                                <label class="form-label">Contraseña</label>
                                <input type="password" class="form-control" value="********">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Confirmar Contraseña</label>
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

    // Icon button handlers
    const btnMoon = document.getElementById('btnMoon');
    const btnAccessibility = document.getElementById('btnAccessibility');

    if (btnMoon) {
        btnMoon.addEventListener('click', () => {
            // Placeholder for dark mode toggle functionality
            console.log('Moon button clicked - Dark mode toggle');
        });
    }

    if (btnAccessibility) {
        btnAccessibility.addEventListener('click', () => {
            // Placeholder for accessibility features
            console.log('Accessibility button clicked');
        });
    }
});

// Event Management Functions
function openEventModal(eventId = null) {
    const modal = document.getElementById('eventModal');
    const modalTitle = document.getElementById('eventModalLabel');
    
    if (eventId !== null) {
        modalTitle.textContent = 'Editar Evento';
        // In a real app, load event data here
    } else {
        modalTitle.textContent = 'Crear Evento';
        document.getElementById('eventForm').reset();
    }
}

function saveEvent() {
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const time = document.getElementById('eventTime').value;
    const location = document.getElementById('eventLocation').value;
    
    if (name && date && time && location) {
        // In a real app, save to database
        console.log('Saving event:', { name, date, time, location });
        alert('Evento guardado exitosamente');
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('eventModal'));
        modal.hide();
        
        // Reset form
        document.getElementById('eventForm').reset();
    } else {
        alert('Por favor completa todos los campos');
    }
}

function editEvent(eventId) {
    console.log('Editing event:', eventId);
    openEventModal(eventId);
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    modal.show();
}

function deleteEvent(eventId) {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
        console.log('Deleting event:', eventId);
        // In a real app, delete from database
        alert('Evento eliminado');
    }
}
