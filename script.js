const tareas = []
const ul = document.getElementById("listaTareas")

function renderizarTareas() {
  ul.innerHTML = ""
  tareas.forEach((tarea, index) => {
    const li = document.createElement("li")
    const divBtn = document.createElement("div")

    li.textContent = tarea.texto
    if (tarea.completada) li.classList.add("completada")

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "❌"
    btnEliminar.onclick = () => eliminarTarea(index)

    const btnCompletar = document.createElement("button")
    btnCompletar.textContent = tarea.completada ? "↩️" : "✅"
    btnCompletar.onclick = () => completarTarea(index)

    divBtn.append(btnCompletar, btnEliminar)
    li.append(divBtn)

    ul.appendChild(li)
  })
}

function agregarTarea(texto) {
  tareas.push({ texto, completada: false })
  renderizarTareas()
}

function eliminarTarea(index) {
  tareas.splice(index, 1)
  renderizarTareas()
}

function completarTarea(index) {
  tareas[index].completada = !tareas[index].completada
  renderizarTareas()
}

document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault()
  const input = document.getElementById("nuevaTarea")
  if (input.value.trim() && input.value.length < 33) {
    agregarTarea(input.value.trim())
    input.value = ""
  } else {
    alert("Oops! Your text is too long. Use 32 characters or fewer.")
  }
})
