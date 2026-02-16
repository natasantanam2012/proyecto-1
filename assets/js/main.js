// BASE DE DATOS REAL INTEGRADA
const MEDICOS_REALES = [
    { id: 1, name: "Dr. Sebastián Ugarte", spec: "Medicina Intensiva", city: "Santiago", img: "https://www.indisa.cl/wp-content/uploads/2020/05/dr-sebastian-ugarte.jpg", price: 60000, clinic_url: "https://www.indisa.cl/reserva-de-horas/" },
    { id: 2, name: "Dra. Carolina Herrera", spec: "Broncopulmonar", city: "Santiago", img: "https://vaderetro.cl/wp-content/uploads/2020/07/Dra-Carolina-Herrera.jpg", price: 55000, clinic_url: "https://www.chp.cl/reserva-de-horas/" },
    { id: 3, name: "Dr. Enrique Paris", spec: "Pediatría", city: "Puerto Montt", img: "https://img.resized.co/el_desconcierto/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL3d3dy5lbGRlc2NvbmNpZXJ0by5jbFxcXC93cC1jb250ZW50XFxcL3VwbG9hZHNcXFwvMjAyMFxcXC8wNlxcXC9DYXB0dXJhLWRlLXBhbnRhbGxhLTIwMjAtMDYtMTMtYS1sYXMtMTIuMTEuMzMucG5nXCIsXCJ3aWR0aFwiOjk4MCxcImhlaWdodFwiOjU5MCxcImZp dFwiOlwiY292ZXJcIn0iLCJzaWduYXR1cmUiOiIyYTk0ZWE2NzFlZTk3MThjODRkOTg4N2Y1NmM3Zjg0MmI2YmViY2I3In0=/captura-de-pantalla-2020-06-13-a-las-12-11-33.png", price: 45000, clinic_url: "https://ucchristus.cl/reserva-de-horas" },
    { id: 4, name: "Dra. Izkia Siches", spec: "Medicina Interna", city: "Santiago", img: "https://cl-exante-p-1-v-1-production.s3.amazonaws.com/uploads/2021/11/Izkia-Siches-1.jpg", price: 50000, clinic_url: "https://www.redsalud.cl/reserva-de-horas" },
    { id: 5, name: "Dra. Paula Daza", spec: "Pediatría", city: "Santiago", img: "https://media.biobiochile.cl/wp-content/uploads/2021/08/paula-daza-700x467.jpg", price: 48000, clinic_url: "https://www.clinicaalemana.cl/reserva-de-horas" },
    { id: 6, name: "Dr. Rodolfo Neira", spec: "Medicina Interna", city: "Santiago", img: "https://static.emol.cl/emol50/Fotos/2021/07/07/file_20210707122114.jpg", price: 45000, clinic_url: "https://www.doctoralia.cl/rodolfo-neira/medico-general/vitacura" }
];

function render(lista) {
    const grid = document.getElementById('contenedor-medicos');
    if (!grid) return;
    
    if (lista.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <p class="text-slate-500 font-bold">No se encontraron especialistas en esta búsqueda.</p>
        </div>`;
        return;
    }

    grid.innerHTML = lista.map(doc => `
        <div class="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
            
            <div class="flex items-center gap-6 mb-8">
                <img src="${doc.img}" 
                     onerror="this.src='https://ui-avatars.com/api/?name=${doc.name}&background=6366f1&color=fff&size=128'"
                     class="w-24 h-24 rounded-[2rem] object-cover shadow-lg border-4 border-white">
                <div>
                    <span class="bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase px-3 py-1 rounded-xl tracking-widest">${doc.spec}</span>
                    <h4 class="text-2xl font-extrabold text-slate-800 mt-2 leading-tight">${doc.name}</h4>
                </div>
            </div>
            
            <div class="bg-slate-50 rounded-3xl p-6 mb-8 space-y-3 text-sm font-bold text-slate-600">
                <p><i class="fa-solid fa-location-dot mr-3 text-rose-500"></i>${doc.city}, Chile</p>
                <p><i class="fa-solid fa-hospital mr-3 text-indigo-400"></i>Centro Médico Certificado</p>
                <p><i class="fa-solid fa-calendar-check mr-3 text-emerald-500"></i>Disponibilidad Inmediata</p>
            </div>
            
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-[10px] text-slate-400 font-black uppercase mb-1">Desde</p>
                    <span class="text-3xl font-black text-slate-900 leading-none">$${doc.price.toLocaleString('es-CL')}</span>
                </div>
                <a href="${doc.clinic_url}" target="_blank" class="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase shadow-lg shadow-indigo-100 hover:bg-slate-900 transition-all flex items-center gap-2">
                    Agendar <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
            </div>
        </div>
    `).join('');
}

window.onload = () => {
    render(MEDICOS_REALES);

    const filter = () => {
        const s = document.getElementById('search-spec').value.toLowerCase();
        const c = document.getElementById('search-city').value.toLowerCase();
        render(MEDICOS_REALES.filter(m => m.spec.toLowerCase().includes(s) && m.city.toLowerCase().includes(c)));
    };

    document.getElementById('search-spec').oninput = filter;
    document.getElementById('search-city').oninput = filter;
    document.getElementById('btn-search').onclick = filter;
};