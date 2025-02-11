const container = document.querySelector('.container');




    

    let input = 256;

    for (let i = 0; i < input; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', ()=>{
            square.style.backgroundColor = 'black'
        })
        container.appendChild(square)
    }

    const btn1 = document.createElement('button');
    btn1.classList.add('btn1')
    btn1.textContent = '16 X 16'
    container.appendChild(btn1)

    const btn2 = document.createElement('button');
    btn2.classList.add('btn2')
    btn2.textContent = '32 X 32'
    container.appendChild(btn2)

    const btn3 = document.createElement('button');
    btn3.classList.add('btn3')
    btn3.textContent = '64 X 64'
    container.appendChild(btn3)

    const btn4 = document.createElement('button');
    btn4.classList.add('btn4')
    btn4.textContent = '128 X 128'
    container.appendChild(btn4)

   

