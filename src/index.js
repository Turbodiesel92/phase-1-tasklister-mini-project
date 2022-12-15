document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector ("#create-task-form")

  form.addEventListener("submit", (e) => createNewTask(e))

  const createNewTask = (e) => {
    e.preventDefault()
    const tasksDesc = document.querySelector("#new-task-description").value
    const newLi = document.createElement("li")
    newLi.innerHTML = tasksDesc
    const tasks = document.querySelector("#tasks")
    tasks.appendChild(newLi)
    const delteBtn = document.createElement('button')
    delteBtn.innerText = 'Completed'
    newLi.append(delteBtn)

    delteBtn.addEventListener("click", (e) => {
      const removingLi = e.target.parentNode
      console.log(removingLi)
      removingLi.remove()
    })

    e.target.reset()
  }
})









