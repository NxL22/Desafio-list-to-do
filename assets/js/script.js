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

//crearTarea: agrega una nueva tarea al arreglo tareas.
function crearTarea() {
    let nuevaTarea = inputAgregar.value;

    tareas.push({
        id: nuevoId,
        descripcion: nuevaTarea,
        completado: false
    });

    nuevoId++;
}

//renderTareas: genera elementos HTML para mostrar las tareas en el arreglo tareas y 
//actualiza el elemento divTareas en el HTML.
function renderTareas() {
    let html = "";

    tareas.forEach(function (tarea) {
        let checkBoxChequeado = "";

        if (tarea.completado) {
            checkBoxChequeado = "checked";
        }

        let template = ` 
        <div class="widthDe10">${tarea.id}</div>
        <div class="widthDe70">${tarea.descripcion}</div>
        <div class="widthDe10">
            <input type="checkbox" id="completado-${tarea.id}" ${checkBoxChequeado} 
            onchange="actualizarTarea(${tarea.id})">
        </div>
        <div class="widthDe10" class="mt-2">
            <button onclick = "eliminarTarea(${tarea.id})" class="btn btn-danger">X</button>
        </div>
        `;

        html += template;
    })

    divTareas.innerHTML = html;
}

//actualizarTarea: actualiza el estado de finalización de 
//una tarea en el arreglo tareas basado en la entrada de la casilla de verificación.
function actualizarTarea(id) {

    const indexTarea = tareas.findIndex(tarea => tarea.id == id);

    const completada = document.querySelector("#completado-" + id).checked;

    tareas[indexTarea].completado = completada;

    tareasRealizadas();
}

//eliminarTarea: elimina una tarea del arreglo tareas.
function eliminarTarea(id) {

    const indexTarea = tareas.findIndex(tarea => tarea.id === id)

    tareas.splice(indexTarea, 1);


    renderTareas();
    tareasTotales();
    tareasRealizadas();
}

//tareasTotales: actualiza el número total de tareas mostradas en el elemento spanTareasTotales.
function tareasTotales() {
    let total = tareas.length;

    spanTareasTotales.innerHTML = total;
}

//tareasRealizadas: actualiza el número de tareas completadas 
//mostradas en el elemento spanTareasRealizadas.
function tareasRealizadas() {
    let tareasCompletadas = tareas.filter(tarea => tarea.completado);
    let realizadas = tareasCompletadas.length;

    spanTareasRealizadas.innerHTML = realizadas;
}

//borrarInput: reinicia el campo de texto de entrada a una cadena vacía.
function borrarInput() {
    const resetinput = document.getElementById("inputAgregar");
    resetinput.value="";
}

//intento de cuando sea realizada, se cambie el estilo:
//PD no pude :(
