let tareas = [
    {
        id: 1,
        descripcion: "Hacer mercado",
        completado: true
    },
    {
        id: 2,
        descripcion: "Estudiar para la prueba",
        completado: false
    },
    {
        id: 3,
        descripcion: "Sacar a pasear a tobby",
        completado: false
    },
];

//variables para seleccionar los elementos:
const inputAgregar = document.querySelector("#inputAgregar")
const botonAgregar = document.querySelector("#btnAgregar")
const spanTareasTotales = document.querySelector("#tareasTotales")
const spanTareasRealizadas = document.querySelector("#tareasRealizadas")
const divTareas = document.querySelector("#divTareas")

let nuevoId = 4;
renderTareas();
tareasTotales();
tareasRealizadas();

botonAgregar.addEventListener("click", function () {

    crearTarea();
    tareasTotales();
    renderTareas();
    borrarInput();

});

function crearTarea() {
    let nuevaTarea = inputAgregar.value;

    tareas.push({
        id: nuevoId,
        descripcion: nuevaTarea,
        completado: false
    });

    nuevoId++;
}

function renderTareas() {
    let html = "";

    tareas.forEach(function (tarea) {
        let checkBoxChequeado = "";

        if (tarea.completado) {
            checkBoxChequeado = "checked";
        }

        let template = ` 
        <div style="width:10%">${tarea.id}</div>
        <div style="width:70%">${tarea.descripcion}</div>
        <div style="width:10%">
            <input type="checkbox" id="completado-${tarea.id}" ${checkBoxChequeado} 
            onchange="actualizarTarea(${tarea.id})">
        </div>
        <div style="width:10%" class="mt-2">
            <button onclick = "eliminarTarea(${tarea.id})" class="btn btn-danger">X</button>
        </div>
        `;

        html += template;
    })

    divTareas.innerHTML = html;
}

function actualizarTarea(id) {

    const indexTarea = tareas.findIndex(tarea => tarea.id == id);

    const completada = document.querySelector("#completado-" + id).checked;

    tareas[indexTarea].completado = completada;

    tareasRealizadas();
}

//aca intento el eliminar
function eliminarTarea(id) {

    const indexTarea = tareas.findIndex(tarea => tarea.id === id)

    tareas.splice(indexTarea, 1);


    renderTareas();
    tareasTotales();
    tareasRealizadas();
}

function tareasTotales() {
    let total = tareas.length;

    spanTareasTotales.innerHTML = total;
}

function tareasRealizadas() {
    let tareasCompletadas = tareas.filter(tarea => tarea.completado);
    let realizadas = tareasCompletadas.length;

    spanTareasRealizadas.innerHTML = realizadas;
}

function borrarInput() {
    const resetinput = document.getElementById("inputAgregar");
    resetinput.value="";
}
