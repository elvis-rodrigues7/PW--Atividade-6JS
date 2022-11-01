let im1 = document.querySelector('.img1')
let im2 = document.querySelector('.img2')
let im3 = document.querySelector('.img3')
let im4 = document.querySelector('.img4')
let travel = document.querySelector('.travel')
let master = document.querySelector('.master')

let joa = document.querySelector('.joaquina')
let sui = document.querySelector('.suiça')
let muro = document.querySelector('.muro__alto')
let auro = document.querySelector('.aurora')

let but = document.querySelector('botao')


im1.addEventListener('click', troca);
im2.addEventListener('click', troca1);


function troca(){
    im1.classList.add('inv')
    im2.classList.add('inv')
    im3.classList.remove('inv')
    im4.classList.remove('inv')
    im3.addEventListener('click', troca2)
    function troca2(){
        im3.classList.add('inv')
        im4.classList.add('inv')
        travel.classList.add('inv')
        master.classList.add('inv')
        muro.classList.remove('inv')
    }

    im4.addEventListener('click', troca3)
    function troca3(){
        im3.classList.add('inv')
        im4.classList.add('inv')
        travel.classList.add('inv')
        master.classList.add('inv')
        joa.classList.remove('inv')
    }
}

function troca1 (){
    im1.classList.add('inv')
    im2.classList.add('inv')
    im3.classList.remove('inv')
    im4.classList.remove('inv')
    im3.addEventListener('click', troca2)
    function troca2(){
        im3.classList.add('inv')
        im4.classList.add('inv')
        travel.classList.add('inv')
        master.classList.add('inv')
        auro.classList.remove('inv')
    }

    im4.addEventListener('click', troca3)
    function troca3(){
        im3.classList.add('inv')
        im4.classList.add('inv')
        travel.classList.add('inv')
        master.classList.add('inv')
        sui.classList.remove('inv')
    }
}