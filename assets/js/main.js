const MEDICOS = [
    { id: 1, name: "Dr. Sebastián Ugarte", spec: "Medicina Intensiva", city: "Santiago", img: "https://www.indisa.cl/wp-content/uploads/2020/05/dr-sebastian-ugarte.jpg", price: 60000, clinic_url: "https://www.indisa.cl/" },
    { id: 2, name: "Dra. Carolina Herrera", spec: "Broncopulmonar", city: "Santiago", img: "https://vaderetro.cl/wp-content/uploads/2020/07/Dra-Carolina-Herrera.jpg", price: 55000, clinic_url: "https://www.chp.cl/" },
    { id: 3, name: "Dr. Enrique Paris", spec: "Pediatría", city: "Puerto Montt", img: "https://randomuser.me/api/portraits/men/65.jpg", price: 45000, clinic_url: "https://ucchristus.cl/" },
    { id: 4, name: "Dra. Paula Daza", spec: "Pediatría", city: "Santiago", img: "https://randomuser.me/api/portraits/women/62.jpg", price: 48000, clinic_url: "https://www.clinicaalemana.cl/" },
    { id: 5, name: "Dra. Izkia Siches", spec: "Medicina Interna", city: "Santiago", img: "https://randomuser.me/api/portraits/women/35.jpg", price: 50000, clinic_url: "https://www.redsalud.cl/" },
    { id: 6, name: "Dr. Rodolfo Neira", spec: "Medicina Interna", city: "Santiago", img: "https://static.emol.cl/emol50/Fotos/2021/07/07/file_20210707122114.jpg", price: 45000, clinic_url: "https://www.doctoralia.cl" }
];

function render(lista) {
    const grid = document.getElementById('contenedor-medicos');
    if (!grid) return;
    
    if (lista.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <i class="fa-solid fa-user-doctor text-4xl text-slate-300 mb-4"></i>
            <p class="text-slate-500 font-bold uppercase tracking-widest text-sm">No se encontraron especialistas en esa zona</p>
        </div>`;
        return;
    }

    grid.innerHTML = lista.map(doc => `
        <div class="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
            <div class="flex items-center gap-6 mb-8">
                <img src="${doc.img}" onerror="this.src='https://ui-avatars.com/api/?name=${doc.name}'" class="w-24 h-24 rounded-[2.5rem] object-cover border-4 border-white shadow-lg">
                <div>
                    <span class="bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase px-3 py-1 rounded-xl tracking-widest">${doc.spec}</span>
                    <h4 class="text-2xl font-extrabold text-slate-800 mt-2">${doc.name}</h4>
                </div>
            </div>
            <div class="bg-slate-50 rounded-[2.5rem] p-6 mb-8 space-y-2">
                <p class="font-bold text-slate-600 text-sm flex items-center">
                    <i class="fa-solid fa-location-dot mr-3 text-rose-500"></i>
                    Ciudad: <span class="text-slate-900 ml-1">${doc.city}</span>
                </p>
                <p class="font-bold text-slate-600 text-sm flex items-center">
                    <i class="fa-solid fa-hospital mr-3 text-indigo-400"></i>
                    Centro Certificado
                </p>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-black text-slate-900 leading-none">$${doc.price.toLocaleString('es-CL')}</span>
                <a href="${doc.clinic_url}" target="_blank" class="bg-indigo-600 text-white px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase shadow-lg hover:bg-slate-900 transition-all">Agendar</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    render(MEDICOS);

    const performFilter = () => {
        const specVal = document.getElementById('search-spec').value.toLowerCase();
        const cityVal = document.getElementById('search-city').value.toLowerCase();
        
        const filtered = MEDICOS.filter(m => 
            m.spec.toLowerCase().includes(specVal) && 
            m.city.toLowerCase().includes(cityVal)
        );
        render(filtered);
    };

    // Filtro instantáneo mientras se escribe
    document.getElementById('search-spec').addEventListener('input', performFilter);
    document.getElementById('search-city').addEventListener('input', performFilter);
    document.getElementById('btn-search').addEventListener('click', performFilter);
});