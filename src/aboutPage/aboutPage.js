export function createAboutBtn(rootElement, cb){
    const btnAboutModal = document.createElement('btn')
    btnAboutModal.innerHTML = `<i class="fas fa-question about-btn about-modal-open-btn"></i>`
    rootElement.append(btnAboutModal)
    
    btnAboutModal.addEventListener('click', (e)=>{
        cb()
    })
}

export function toggleAboutModal(){
    const aboutModal = document.querySelector('.about-modal')
    const aboutModalCloseBtn = document.querySelector('.about-modal-close-btn')
    
    aboutModal.classList.add('show-modal')

    aboutModalCloseBtn.addEventListener('click', () => {
        aboutModal.classList.remove('show-modal')})
}