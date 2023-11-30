const input = document.getElementById('todo-input')
const btn = document.getElementById('todo-add')
const ul = document.getElementById('list')

btn.addEventListener('click', addTodo)

function addTodo(){
    if(input.value == ''){
        alert('boş bırakmayın. Lütfen bir todo girin.')
    }else{
        let li = document.createElement('li')
        li.classList.add('list-group-item','bg-secondary-subtle','d-flex','justify-content-between','align-items-center')


        let form_check = document.createElement('div')
        form_check.classList.add('form-check')


        let checkbox = document.createElement('input')
        checkbox.classList.add('form-check-input')
        checkbox.setAttribute('type','checkbox')

        let p = document.createElement('p')
        p.classList.add('m-0')
        p.textContent = input.value


        let icon_div = document.createElement('div')


        let i = document.createElement('i')
        i.classList.add('fa-solid','fa-trash','fa-xl')


        form_check.appendChild(checkbox)
        icon_div.appendChild(i)
        li.appendChild(form_check)
        li.appendChild(p)
        li.appendChild(icon_div)
        ul.appendChild(li)

        icon_div.addEventListener('click', function(){
            this.parentElement.remove()
        })

        checkbox.addEventListener('click', function(){
            if(!p.classList.contains('text-decoration-line-through','text-secondary')){
                this.parentElement.nextSibling.classList.add('text-decoration-line-through','text-secondary')
            }else{
                this.parentElement.nextSibling.classList.remove('text-decoration-line-through','text-secondary')
            }
        })
    }
    input.value = ''
}