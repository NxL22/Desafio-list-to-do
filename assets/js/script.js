let tareas = [
    {
        id: 1,
        descripcion: "Hacer mercado",
        completado: true
    },
    {
        id: 2,
        descripcion: "estudiar para la prueba",
        completado: false
    },
    {
        id: 3,
        descripcion: "sacar a pasear a tobby",
        completado: false    
    },
];

//variables para seleccionar los elementos:
const inputAgregar = document.querySelector("#inputAgregar")
const botonAgregar = document.querySelector("#btnAgregar")
const spanTareasTotales = document.querySelector("#tareasTotales")
const spanTareasRealizadas = document.querySelector("#tareasRealizadas")
const divTareas = document.querySelector("#tareas")

let nuevoId = 4;
    renderTareas(); 
    tareasTotales();
    TareasRealizadas();

botonAgregar.addEventListener("click", function(){
    let nuevaTarea = inputAgregar.value;


    tareas.push({
        id: nuevoId,
        descripcion: nuevaTarea, 
        completado: false
    });

    nuevoId++;

    let html = "";

    tareas.forEach(function(tarea){
        let checkBoxChequeado = "";
        
        if (tarea.completado){
            checkBoxChequeado = "checked";
        } 

        let template = ` 
        <div style="width:10%">${tarea.id}/div>
        <div style="width:70%">${tarea.descripcion}</div>
        <div style="width:10%">
            <input type="checkbox" id="completado-${tarea.id}" ${checkBoxChequeado} 
            onchange="actualizarTarea${tarea.id}">
        </div>
        <div style="width:10%" class="mt-2">
            <button class="btn btn-danger">X</button>
        </div>
        `
    })

    divTareas.innerHTML = html;

})

function actualizarTarea(id) {
    const indexTarea = tareas.findIndex(tarea => tarea.id === id)
    
    const completada = document.querySelector("completado-" + id).checked;

    tareas[indexTarea].completado;

    // renderTareas(); sirven estas para borrar tarea
    //tareasTotales();
    TareasRealizadas();
}

function tareasCompletadas(parans) {
    let tareasCompletadas = tarea.filter(tarea => tarea.completado)
    let realizadas = tareasCompletadas.length;

    spanTareasRealizadas.innerHTML = realizadas;
}