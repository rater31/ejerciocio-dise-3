const bt1 =document.querySelector('.color1');
const bt2 =document.querySelector('.color2');
const bt3 =document.querySelector('.color3');
const bt4 =document.querySelector('.color4');
const bt5 =document.querySelector('.color5');

function prueba(){
            bt1.addEventListener('click', ()=>{
                bt1.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
            })
            bt2.addEventListener('click', ()=>{
                bt2.classList.toggle("CambioColor")
                bt1.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
            })
            bt3.addEventListener('click', ()=>{
                bt3.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt1.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
            })
            bt4.addEventListener('click', ()=>{
                bt4.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt1.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
            })
            bt5.addEventListener('click', ()=>{
                bt5.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt1.classList.remove("CambioColor")
            })
}
 prueba()


