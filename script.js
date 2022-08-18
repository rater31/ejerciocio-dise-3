const bt1 =document.querySelector('.color1');
const bt2 =document.querySelector('.color2');
const bt3 =document.querySelector('.color3');
const bt4 =document.querySelector('.color4');
const bt5 =document.querySelector('.color5');
const sub =document.querySelector('.submit');
const cont =document.querySelector('.contenedor-fp');
const cont2=document.querySelector('.contenedor-tk');
const tk=document.querySelector('.txt-tk');

function prueba(){
            bt1.addEventListener('click', ()=>{
                bt1.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
                tk.textContent="You selected 1 out of 5";
            })
            bt2.addEventListener('click', ()=>{
                bt2.classList.toggle("CambioColor")
                bt1.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
                tk.textContent="You selected 2 out of 5";
            })
            bt3.addEventListener('click', ()=>{
                bt3.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt1.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
                tk.textContent="You selected 3 out of 5";
            })
            bt4.addEventListener('click', ()=>{
                bt4.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt1.classList.remove("CambioColor")
                bt5.classList.remove("CambioColor")
                tk.textContent="You selected 4 out of 5";
            })
            bt5.addEventListener('click', ()=>{
                bt5.classList.toggle("CambioColor")
                bt2.classList.remove("CambioColor")
                bt3.classList.remove("CambioColor")
                bt4.classList.remove("CambioColor")
                bt1.classList.remove("CambioColor")
                tk.textContent="You selected 5 out of 5";
            })
}

function submit(){

    sub.addEventListener('click',()=>{
    
        if(cont.querySelector(".CambioColor")){
        cont.classList.toggle("hiden");
        cont2.classList.toggle("hiden");

        }else{alert("por favor, elija una puntuación");}

    })

}
 prueba()

 submit()
