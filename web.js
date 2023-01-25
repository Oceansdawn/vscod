<<<<<<< HEAD

const getElement = (selector) =>{
    const element = document.querySelector(selector);
    if(element) return element
    throw Error ('please double check your class names, there is no {selector} class' )
}

const links = getElement('.nav-link')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', ()=>{
    links.classList.toggle('show-')
})

const date = getElement('#date');
const currentYear = new Date().getFullYear()
date.textContent = currentYear
=======

const getElement = (selector) =>{
    const element = document.querySelector(selector);
    if(element) return element
    throw Error ('please double check your class names, there is no {selector} class' )
}

const links = getElement('.nav-link')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', ()=>{
    links.classList.toggle('show-')
})
>>>>>>> 76a1b4fe31581741ffd3af3bf847e272edf44c4f
