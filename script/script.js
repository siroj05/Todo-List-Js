const btnAdd = document.querySelector('.btn');
const contentBody = document.querySelector('.body-content')

btnAdd.addEventListener('click', function(e){
  e.preventDefault();
  const inputVal = document.querySelector('.form-control')
  if(inputVal.value == ''){
    alert('tidak boleh kosong')
  }
  else{
    
    addTodo(inputVal.value)
    inputVal.value = ''
  }
})

const listItem = (listTodo) => {
  contentBody.innerHTML += listTodo
  const todoSpan = document.querySelectorAll('.form-check-input');
  const deleteBtn = document.querySelectorAll('.btn-delete');

  todoSpan.forEach(e => {
    e.addEventListener('change', function(){
      let eSpan = e.nextElementSibling;
      eSpan.classList.toggle('text-decoration-line-through')
    })
  })

  deleteBtn.forEach(e=> {
    e.addEventListener('click', function(){
      deleteList(e)
    })
  })

}

const addTodo = (newTodo)=> {
  
  const content = `
    <li class="list-group-item d-flex justify-content-between" >
      <div>
        <input class="form-check-input me-2" type="checkbox" value="" aria-label="...">
        <span>${newTodo}</span>    
      </div>  
      <button class="btn-delete badge bg-danger border-0">X</button>
    </li>`
  return listItem(content)
  
}

const deleteList = (listTodo)=>{
  listTodo.parentNode.remove()
}

