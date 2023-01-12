const submit = document.querySelector('#create-task-form')
submit.addEventListener('submit', (submitEvent) => {
  submitEvent.preventDefault()
  const tasks = document.querySelector('#tasks')
  const li = document.createElement('li')
  li.textContent = submitEvent.target['new-task-description'].value
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  li.append(deleteBtn)
  tasks.append(li)
  submit.reset()
  deleteBtn.addEventListener('click', (deleteEvent) => {
    deleteEvent.preventDefault()
    tasks.removeChild(li)
  })

})



// * A delete function that will remove tasks from your list
// * A priority value selected from a [dropdown][] that is used to determine the color
//   of the text in the list (e.g. red for high priority, yellow for medium, green
//   for low)
//   * As an additional challenge, implement a sorting functionality that displays
//     the tasks in ascending or descending order based on priority
// * An additional input field (e.g. user, duration, date due)
// * Ability to edit tasks
// * Something of your choice! The main objective is to add a feature that allows
//   the user's input to affect the DOM