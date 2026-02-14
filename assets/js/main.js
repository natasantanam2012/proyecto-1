// Simulación de Base de Datos JSON (MOCK)
const MOCK_DATA = [
    { id: 1, name: "Dra. Claudia Ortiz", spec: "Ginecología", city: "Santiago", sector: "Providencia", date: "2026-02-15", time: "10:00 AM", rating: 4.9, img: "https://i.pravatar.cc/150?u=1", price: 45000 },
    { id: 2, name: "Dr. Javier Soto", spec: "Cardiología", city: "Santiago", sector: "Las Condes", date: "2026-02-15", time: "15:30 PM", rating: 4.7, img: "https://i.pravatar.cc/150?u=2", price: 55000 },
    { id: 3, name: "Dra. Beatriz Luna", spec: "Dermatología", city: "Concepción", sector: "Centro", date: "2026-02-16", time: "09:00 AM", rating: 5.0, img: "https://i.pravatar.cc/150?u=3", price: 35000 },
    { id: 4, name: "Dr. Samuel Kross", spec: "Pediatría", city: "Viña del Mar", sector: "Reñaca", date: "2026-02-17", time: "11:15 AM", rating: 4.8, img: "https://i.pravatar.cc/150?u=4", price: 30000 },
    { id: 5, name: "Dra. Carla Méndez", spec: "Cardiología", city: "Antofagasta", sector: "Norte", date: "2026-02-15", time: "17:00 PM", rating: 4.6, img: "https://i.pravatar.cc/150?u=5", price: 42000 },
    { id: 6, name: "Dr. Andrés Paz", spec: "Psicología", city: "Santiago", sector: "Ñuñoa", date: "2026-02-18", time: "12:00 PM", rating: 4.9, img: "https://i.pravatar.cc/150?u=6", price: 40000 }
];

// Inicializar Calendario
flatpickr("#search-date", {
    minDate: "today",
    dateFormat: "Y-m-d",
    locale: "es" // Requiere importar el locale si se desea en español completo
});

const container = document.getElementById('results-container');
const btnSearch = document.getElementById('btn-main-search');

// Función de renderizado
function renderAppointments(list) {
    container.innerHTML = '';
    
    if (list.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-20">
                <i class="fa-solid fa-calendar-xmark text-5xl text-slate-200 mb-4"></i>
                <p class="text-slate-500 font-medium">No hay horas disponibles para esos criterios.</p>
            </div>`;
        return;
    }

    list.forEach(doc => {
        container.innerHTML += `
            <div class="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm card-hover relative group">
                <div class="flex items-center gap-4 mb-5">
                    <img src="${doc.img}" class="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-50">
                    <div>
                        <span class="bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase px-2 py-1 rounded-md tracking-wider">${doc.spec}</span>
                        <h4 class="text-lg font-bold text-slate-800 leading-tight mt-1">${doc.name}</h4>
                        <div class="flex items-center text-amber-400 text-xs mt-1">
                            <i class="fa-solid fa-star"></i> <span class="text-slate-600 font-semibold ml-1">${doc.rating}</span>
                        </div>
                    </div>
                </div>

                <div class="bg-slate-50 rounded-2xl p-4 mb-5 space-y-3">
                    <div class="flex items-center text-sm text-slate-600">
                        <i class="fa-solid fa-location-dot w-6 text-indigo-400"></i>
                        <span>${doc.city}, ${doc.sector}</span>
                    </div>
                    <div class="flex items-center text-sm text-slate-600">
                        <i class="fa-solid fa-clock w-6 text-emerald-400"></i>
                        <span class="font-bold text-slate-800">${doc.date} | ${doc.time}</span>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[10px] text-slate-400 font-bold uppercase">Consulta</p>
                        <span class="text-xl font-black text-slate-900">$${doc.price.toLocaleString('es-CL')}</span>
                    </div>
                    <button class="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                        Agendar
                    </button>
                </div>
            </div>
        `;
    });
}

// Lógica de búsqueda con delay simulado
btnSearch.addEventListener('click', () => {
    const specVal = document.getElementById('search-spec').value.toLowerCase();
    const locVal = document.getElementById('search-loc').value.toLowerCase();
    const dateVal = document.getElementById('search-date').value;

    container.innerHTML = `<div class="col-span-full text-center py-20"><div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div></div>`;

    setTimeout(() => {
        const filtered = MOCK_DATA.filter(item => {
            const matchesSpec = item.spec.toLowerCase().includes(specVal);
            const matchesLoc = item.city.toLowerCase().includes(locVal) || item.sector.toLowerCase().includes(locVal);
            const matchesDate = dateVal === "" || item.date === dateVal;
            return matchesSpec && matchesLoc && matchesDate;
        });
        renderAppointments(filtered);
    }, 700);
});

// Carga inicial
window.onload = () => renderAppointments(MOCK_DATA);


