// selectors

const Todoinput = document.querySelector('.todo-input')
const Todobutton = document.querySelector('.todo-button')
const Todolist = document.querySelector('.todo-list')
const Todofilter = document.querySelector('#filter');

// event listeners

Todobutton.addEventListener('click',addtodo)
Todolist.addEventListener('click',removetodo)
Todofilter.addEventListener('click',filter)


// functions

function addtodo(e) {
    // natural behaviour
    e.preventDefault()
    // create new div element and adding style attribute
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo')
    // create new li element and adding style attribute
    const todoli = document.createElement('li');
    todoli.innerText=Todoinput.value;
    todoli.classList.add('todo-item')
    tododiv.appendChild(todoli);
    // console.log(tododiv);

    // create new mark element and adding style attribute
    const checkel = document.createElement('button')
    checkel.innerHTML=`<i class="fas fa-check"></i>`
    checkel.classList.add('complete-btn')
    tododiv.append(checkel)


     // create new trash element and adding style attribute
     const trashel = document.createElement('button')
     trashel.innerHTML=`<i class="fas fa-trash"></i>`
     trashel.classList.add('trash-btn')
     tododiv.append(trashel)

    //  append all element in todolist
    Todolist.appendChild(tododiv) 
    Todoinput.value='';
    // console.log(Todolist);   
}

function removetodo(e) {
    const item = e.target;
    // console.log(item.classList);
    if (item.classList=='trash-btn') {
        const todo = item.parentElement
        // console.log(todo);
        todo.classList.add('fall')
        todo.addEventListener('transitionend',()=>{
             todo.remove()
        })
    }
    if(item.classList=='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filter(e) {
 const todos = Todolist.childNodes;
    todos.forEach((todo)=>{
        switch (e.target.value) {
            case 'all':
                todo.style.display='flex'
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display='flex';
                }
                else{
                    todo.style.display='none';
                }
                break;
        
            default:
                break;
        }
    })
}



