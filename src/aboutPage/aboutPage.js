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
    
    aboutModal.classList.add('display-modal')
    setTimeout(function(){
        aboutModal.classList.add('show-modal')
    },50)

    aboutModalCloseBtn.addEventListener('click', () => {

       if(aboutModal.classList.contains('show-modal')){
           let modalTransition = window.getComputedStyle(aboutModal).transition;
           
           modalTransition = parseInt(modalTransition.split(' ')[1].split('s')[0]);
           aboutModal.classList.remove('show-modal')
           setTimeout(function(){
               console.log('timeout');
            aboutModal.classList.remove('display-modal')
           },modalTransition*1000)
    } 
           
    })
}