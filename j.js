let next = document.querySelector('.r')
let prev = document.querySelector('.n')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.it')
    document.querySelector('.s').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.it')
    document.querySelector('.s').prepend(items[items.length - 1]) 
})