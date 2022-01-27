const painting = document.querySelector('.painting')
let choice = 'blue'
painting.addEventListener('click',function(e){
    e.target.style.backgroundColor = choice
})
const colors = document.querySelectorAll('.color-choice')
console.log(colors)
for (let index = 0; index < colors.length; index++) {
    colors[index].addEventListener('click',function(e)
    {
        console.log('over')
        choice = e.target.id
    })
}