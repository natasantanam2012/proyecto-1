// LISTA DE ESPECIALISTAS CORREGIDA
const ESPECIALISTAS = [
    { id: 1, name: "Dr. Mario Cimango", spec: "Cardiología", city: "Santiago", img: "https://randomuser.me/api/portraits/men/32.jpg", price: 45000, rating: 5 },
    { id: 2, name: "Dr. Javier Soto", spec: "Podología", city: "Valdivia", img: "https://randomuser.me/api/portraits/men/46.jpg", price: 35000, rating: 4 },
    { id: 3, name: "Dra. Ana Valenzuela", spec: "Pediatría", city: "Concepción", img: "https://randomuser.me/api/portraits/women/44.jpg", price: 40000, rating: 5 },
    { id: 4, name: "Dr. Roberto Paz", spec: "Dermatología", city: "Viña del Mar", img: "https://randomuser.me/api/portraits/men/86.jpg", price: 50000, rating: 5 },
    { id: 5, name: "Dra. Claudia Ortiz", spec: "Ginecología", city: "Santiago", img: "https://randomuser.me/api/portraits/women/68.jpg", price: 48000, rating: 4 },
    { id: 6, name: "Dr. Sergio Lagos", spec: "Oftalmología", city: "Puerto Montt", img: "https://randomuser.me/api/portraits/men/12.jpg", price: 42000, rating: 5 },
    { id: 7, name: "Dra. Elena Muñoz", spec: "Psicología", city: "La Serena", img: "https://randomuser.me/api/portraits/women/22.jpg", price: 38000, rating: 4 },
    { id: 8, name: "Dr. Andrés Bello", spec: "Cardiología", city: "Punta Arenas", img: "https://randomuser.me/api/portraits/men/55.jpg", price: 55000, rating: 5 },
    { id: 9, name: "Dra. Paula Jara", spec: "Pediatría", city: "Iquique", img: "https://randomuser.me/api/portraits/women/15.jpg", price: 39000, rating: 5 }
];

function render(list) {
    const container = document.getElementById('results-container');
    if (!container) return;
    container.innerHTML = list.map(doc => `
        <div class="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm doctor-card relative overflow-hidden group">
            <div class="flex items-center gap-6 mb-8">
                <img src="${doc.img}" class="w-24 h-24 rounded-[2rem] object-cover shadow-xl border-4 border-white">
                <div>
                    <span class="bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase px-3 py-1 rounded-xl">${doc.spec}</span>
                    <h4 class="text-2xl font-extrabold text-slate-800 mt-2">${doc.name}</h4>
                    <div class="flex text-amber-400 text-[10px] mt-2">${'<i class="fa-solid fa-star"></i>'.repeat(doc.rating)}</div>
                </div>
            </div>
            <div class="bg-slate-50 rounded-3xl p-6 mb-8 space-y-3 text-sm font-bold text-slate-600">
                <p><i class="fa-solid fa-location-dot mr-3 text-rose-500"></i>${doc.city}, Chile</p>
                <p><i class="fa-solid fa-calendar-check mr-3 text-emerald-500"></i>Disponible hoy</p>
            </div>
            <div class="flex items-center justify-between pt-2">
                <div>
                    <p class="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Consulta</p>
                    <span class="text-3xl font-black text-slate-900 leading-none">$${doc.price.toLocaleString('es-CL')}</span>
                </div>
                <button class="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-slate-900 transition-all shadow-lg text-xs uppercase active:scale-95">Reservar</button>
            </div>
        </div>
    `).join('');
}

// FUNCIONES DE MODAL Y BÚSQUEDA
function toggleModal(id) { document.getElementById(id).classList.toggle('active'); }

document.getElementById('btn-search').addEventListener('click', () => {
    const s = document.getElementById('search-spec').value.toLowerCase();
    const l = document.getElementById('search-loc').value.toLowerCase();
    const filtered = ESPECIALISTAS.filter(d => 
        d.spec.toLowerCase().includes(s) && d.city.toLowerCase().includes(l)
    );
    render(filtered);
});

// INICIALIZACIÓN
window.onload = () => {
    render(ESPECIALISTAS);
    flatpickr("#search-date", { locale: "es", minDate: "today", dateFormat: "d/m/Y" });
};
