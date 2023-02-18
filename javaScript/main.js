// chamando a variavel que é o container das imagens 
let contimg = document.querySelector('.contimg')
// criando um array pra armazenar as informações das imagens presentes no carrosel
const imagens = [
    {'id': '1', 'url':'./images/001.jpg'},
    {'id': '2', 'url':'./images/002.jpg'},
    {'id': '4', 'url':'./images/003.png'},
    {'id': '5', 'url':'./images/004.jpg'},
    {'id': '6', 'url':'./images/005.jpg'}
]
//criando uma função pra carregar as imagens na pagina
const carregaImagens = (imagens, container) => {
    imagens.forEach(image => { //varrendo o array para chamar todas as imagems uma por vez
        //mostrando para o usuario na tela o resultado das imagens
        container.innerHTML += ` //
        <div class="item">
            <img src="${image.url}" alt="">
        </div>
        `        
   })
}
//chamanado a função e passando os parametros de funcionamento que a função exige 
carregaImagens(imagens, contimg)
//chamando o container que segura as imagens
let items = document.querySelectorAll('.item');
//criando a função dos botões de esquerda 
const right = () => {
    contimg.appendChild(items[0]); //
    items = document.querySelectorAll('.item'); //
}
//criando a função dos botões de  direita
const left = () => {
    const lastItem = items[items.length - 1];   //
    contimg.insertBefore( lastItem, items[0] ); //
    items = document.querySelectorAll('.item'); //
}

document.querySelector('#left').addEventListener('click', left)   //
document.querySelector('#right').addEventListener('click', right) //

let tema = document.querySelector('.tema') 
let header = document.querySelector('header')
let sobre = document.querySelector(".sobre")
let txt1 = document.querySelector(".texto01")
let txt2 = document.querySelector(".texto02")
let bar = document.querySelector(".navegation")
const changeColor = () => {
    tema.addEventListener("click", (e) => {

        if(sobre.classList.contains('light')){
            header.style.backgroundImage= 'url(https://wallpapercave.com/uwp/uwp2284758.gif)'
            sobre.classList.remove('light')
            txt1.style.color = '#fff'
            txt2.style.color = '#fff'
        }
        else{
            sobre.classList.add('light')
            header.style.backgroundImage= 'url(./images/dia.gif)'
            header.style.backgroundImage= 'url(./images/dia.gif)'
            txt1.style.color = '#000'
            txt2.style.color = '#000'
        }
        e.preventDefault()
    })
}

changeColor()