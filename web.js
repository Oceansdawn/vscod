
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