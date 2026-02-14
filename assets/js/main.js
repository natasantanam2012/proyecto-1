// LISTA DE ESPECIALISTAS RESTAURADA
const ESPECIALISTAS = [
    { id: 1, name: "Dr. Mario Cimango", spec: "Cardiología", city: "Santiago", sector: "Providencia", date: "15 Feb", img: "https://i.pravatar.cc/150?u=mario", price: 45000, rating: 5 },
    { id: 2, name: "Dr. Javier Soto", spec: "Podología", city: "Valdivia", sector: "Centro", date: "16 Feb", img: "https://i.pravatar.cc/150?u=javier", price: 35000, rating: 4 },
    { id: 3, name: "Dra. Ana Valenzuela", spec: "Pediatría", city: "Concepción", sector: "Lomas", date: "17 Feb", img: "https://i.pravatar.cc/150?u=ana", price: 40000, rating: 5 },
    { id: 4, name: "Dr. Roberto Paz", spec: "Dermatología", city: "Viña del Mar", sector: "Reñaca", date: "15 Feb", img: "https://i.pravatar.cc/150?u=roberto", price: 50000, rating: 5 },
    { id: 5, name: "Dra. Claudia Ortiz", spec: "Ginecología", city: "Santiago", sector: "Las Condes", date: "18 Feb", img: "https://i.pravatar.cc/150?u=claudia", price: 48000, rating: 4 }
];

function render(list) {
    const container = document.getElementById('results-container');
    if (list.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <i class="fa-solid fa-user-doctor text-4xl text-slate-200 mb-4"></i>
            <p class="text-slate-400 font-bold">No encontramos especialistas con esos filtros</p>
        </div>`;
        return;
    }

    container.innerHTML = list.map(doc => `
        <div class="bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm card-shadow relative overflow-hidden group">
            <div class="flex items-center gap-6 mb-8">
                <div class="relative">
                    <img src="${doc.img}" class="w-24 h-24 rounded-[2rem] object-cover shadow-xl border-4 border-white transition-transform group-hover:scale-105">
                    <div class="absolute -bottom-2 -right-2 bg-emerald-500 w-7 h-7 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                        <i class="fa-solid fa-check text-[10px] text-white"></i>
                    </div>
                </div>
                <div>
                    <span class="bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase px-3 py-1.5 rounded-xl tracking-widest">${doc.spec}</span>
                    <h4 class="text-2xl font-extrabold text-slate-800 mt-2">${doc.name}</h4>
                    <div class="flex text-amber-400 text-xs mt-2">
                        ${Array(doc.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
                        <span class="text-slate-400 ml-2 font-bold">(+20 citas)</span>
                    </div>
                </div>
            </div>

            <div class="bg-slate-50 rounded-[2rem] p-6 mb-8 space-y-4">
                <div class="flex items-center text-slate-600 font-bold text-sm">
                    <i class="fa-solid fa-location-dot mr-4 text-rose-500 text-lg"></i>
                    ${doc.city}, ${doc.sector}
                </div>
                <div class="flex items-center text-slate-600 font-bold text-sm">
                    <i class="fa-solid fa-calendar-check mr-4 text-emerald-500 text-lg"></i>
                    Disponible: ${doc.date}
                </div>
            </div>

            <div class="flex items-center justify-between pt-2">
                <div>
                    <p class="text-[10px] text-slate-400 font-black uppercase tracking-tighter">Valor consulta</p>
                    <span class="text-3xl font-black text-slate-900 leading-none">$${doc.price.toLocaleString('es-CL')}</span>
                </div>
                <button class="bg-slate-900 text-white px-8 py-5 rounded-[1.5rem] font-black hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-95 uppercase text-xs tracking-widest">
                    Agendar
                </button>
            </div>
        </div>
    `).join('');
}

// BUSQUEDA EN TIEMPO REAL + BOTÓN
const inpS = document.getElementById('search-spec');
const inpL = document.getElementById('search-loc');
const btnS = document.getElementById('btn-search');

const search = () => {
    const s = inpS.value.toLowerCase();
    const l = inpL.value.toLowerCase();
    const filtered = ESPECIALISTAS.filter(d => 
        d.spec.toLowerCase().includes(s) && d.city.toLowerCase().includes(l)
    );
    render(filtered);
};

// Listeners
inpS.addEventListener('input', search);
inpL.addEventListener('input', search);
btnS.addEventListener('click', () => {
    btnS.innerHTML = '<i class="fa-solid fa-circle-notch animate-spin"></i>';
    setTimeout(() => { search(); btnS.innerText = 'BUSCAR'; }, 400);
});

// Inicializar Calendario y Carga
flatpickr("#search-date", { minDate: "today", onChange: search });
window.onload = () => render(ESPECIALISTAS);

