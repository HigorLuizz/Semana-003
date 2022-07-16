// Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS)
// 5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).
// const txt1 = document.getElementsByClassName('txt1')[0]
// txt1.innerHTML = "Texto 01 de teste"

// const txt2 = document.getElementsByClassName('txt2')[0]
// txt2.innerHTML = "Texto 02 de teste"

// const txt3 = document.getElementsByClassName('txt3')[0]
// txt3.innerHTML = "Texto 03 de teste"

// const txt4 = document.getElementsByClassName('txt4')[0]
// txt4.innerHTML = "Texto 04 de teste"

// const txt5 = document.getElementsByClassName('txt5')[0]
// txt5.innerHTML = "Texto 05 de teste"
const divTextos = document.getElementById('textos')

const texto1 = document.createElement('div')
texto1.innerHTML = "Texto 01 de teste"
divTextos.append(texto1)

const texto2 = document.createElement('div')
texto2.innerHTML = "Texto 02 de teste"
divTextos.append(texto2)

const texto3 = document.createElement('div')
texto3.innerHTML = "Texto 03 de teste"
divTextos.append(texto3)

const texto4 = document.createElement('div')
texto4.innerHTML = "Texto 04 de teste"
divTextos.append(texto4)

const texto5 = document.createElement('div')
texto5.innerHTML = "Texto 05 de teste"
divTextos.append(texto5)



