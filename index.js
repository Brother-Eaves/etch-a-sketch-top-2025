const container = document.querySelector('.container');
const btn = document.querySelector('.btns')

function createGrid (size) {
    container.textContent='';
    const grid = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        square.style.width = `${grid}px`;
        square.style.height= `${grid}px`;
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black'
        })
        container.appendChild(square);
    }
}


createGrid(16)

const resize = document.createElement('button');
resize.classList.add('resize')
resize.textContent = 'Resize';
resize.addEventListener('click', ()=>{
       let newSize = prompt('enter a number from 16 to 100')
       newSize = parseInt(newSize)
       
    if (newSize <= 100) {
        createGrid(newSize)
    } else {
        alert('Your grid must be 1 to 100')
    }
})
resize.style.backgroundColor = 'green';
resize.style.color = 'white';
btn.appendChild(resize)

const reset = document.createElement('button');
reset.classList.add('reset');
reset.textContent = 'Reset';
reset.style.color = 'white';
reset.style.backgroundColor = 'orange';
reset.style.color = 'black'
reset.addEventListener('click', ()=>{
    location.reload()
})
btn.appendChild(reset);












































/*const btns = document.querySelector('.btns')


function populate16() {
    let input = 256

    for (let i = 0; i < input; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black'
        })
        container.appendChild(square)
    }

}
    

    let input = 256;

    for (let i = 0; i < input; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black'
        })
        container.appendChild(square)
    }

    function populate32() {
        let input = 1024

        for (let i = 0; i < input; i++) {
            const square = document.createElement('div');
            square.classList.add('squareA');
            square.addEventListener('mouseover', ()=>{
                square.style.backgroundColor = 'black'
            })
            container.appendChild(square)
        }
    }

    function populate64() {
        let input = 4096

        for (let i = 0; i < input; i++) {
            const square = document.createElement('div');
            square.classList.add('squareB');
            square.addEventListener('mouseover', ()=>{
                square.style.backgroundColor = 'black'
            })
            container.appendChild(square)
        }

    }


*/