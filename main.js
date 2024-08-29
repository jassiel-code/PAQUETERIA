let paquete = {
    descripcion: "",
    prioridad: "normal", 
    entregado: false,
};

let paquetes = [
    { descripcion: "Correspondencia ", prioridad: "urgente" },
    { descripcion: "Paquete de Mercado Libre", prioridad: "normal" },
    { descripcion: "Correspondencia ", prioridad: "muy urgente" },
    { descripcion: "Paquete de entrega ", prioridad: "poco urgente" },
    { descripcion: "Correspondencia ", prioridad: "normal" },
    { descripcion: "Paquete de Mercado Libre", prioridad: "muy urgente" },
    { descripcion: "Correspondencia ", prioridad: "urgente" },
    { descripcion: "Paquete de entrega ", prioridad: "poco urgente" },
    { descripcion: "Correspondencia ", prioridad: "normal" },
    { descripcion: "Paquete de Mercado Libre", prioridad: "urgente" }
];

function ordenarPaquetes() {
    const prioridades = ["muy urgente", "urgente", "poco urgente", "normal"];
    
    paquetes.sort((a, b) => {
        return prioridades.indexOf(a.prioridad) - prioridades.indexOf(b.prioridad);
    });
    
    mostrarPaquetes();
}
function agregarPaquete() {
    let descripcion = prompt("Ingrese la descripción del paquete:");
    let prioridad = prompt("Ingrese la prioridad del paquete (normal, poco urgente, urgente, muy urgente):").toLowerCase();

    let nuevoPaquete = Object.create(paquete);
    nuevoPaquete.descripcion = descripcion;
    nuevoPaquete.prioridad = prioridad;

    let insertado = false;
    for (let i = 0; i < paquetes.length; i++) {
        if (prioridad === paquetes[i].prioridad) {
            continue;
        } else if (["muy urgente", "urgente", "poco urgente", "normal"].indexOf(prioridad) < ["muy urgente", "urgente", "poco urgente", "normal"].indexOf(paquetes[i].prioridad)) {
            paquetes.splice(i, 0, nuevoPaquete);
            insertado = true;
            break;
        }
    }
    if (!insertado) paquetes.push(nuevoPaquete);

    mostrarPaquetes();
}

function entregarPaquete(index) {
    paquetes.splice(index, 1);
    mostrarPaquetes();
}

function mostrarPaquetes() {
    const contenedor = document.getElementById("paquetes-lista");
    contenedor.innerHTML = '';

    paquetes.forEach((paquete, index) => {
        let div = document.createElement("div");
        div.classList.add("paquete", paquete.prioridad.replace(" ", "-"));
        div.textContent = `Descripción: ${paquete.descripcion} | Prioridad: ${paquete.prioridad}`;

        let botonEntregar = document.createElement("button");
        botonEntregar.textContent = "Entregar";
        botonEntregar.onclick = () => entregarPaquete(index);
        div.appendChild(botonEntregar);

        contenedor.appendChild(div);
    });
}
window.onload = mostrarPaquetes;