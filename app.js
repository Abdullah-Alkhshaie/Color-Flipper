
let colors = ['Red', '#8f4d4d' , 'hsl(227deg 74% 35%)' , '#c7c198', 'Green','#800044', '#180a0a', 'Pink']

let spanColor = document.querySelector('span')
let btn = document.querySelector('button')
let cont = document.querySelector('.container')
let body = document
// console.log(cont)


// console.log(getRandomColor())


btn.addEventListener('click', ()=> {
let indexColor = Math.floor(Math.random() * colors.length) 
let randomColor = colors[indexColor]

cont.style.backgroundColor = randomColor
spanColor.textContent = randomColor
    
})

