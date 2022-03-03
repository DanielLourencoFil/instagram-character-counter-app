export function createAboutBtn(rootElement, cb){
    const btnAboutModal = document.createElement('btn')
    btnAboutModal.innerHTML = `<i class="fas fa-question about-btn about-modal-open-btn"></i>`
    rootElement.append(btnAboutModal)
    
    const modalTest = new ToggleModal('about-modal', 'about-modal-open-btn', 'about-modal-close-btn')
    modalTest.open();
    modalTest.close()
}



/////////////******************** */
export class ToggleModal{
    constructor(modal, openBtn, closeBtn){
        this.modal = document.querySelector(`.${modal}`);
        this.modalOpenBtn = document.querySelector(`.${openBtn}`);
        this.modalCloseBtn = document.querySelector(`.${closeBtn}`);
        
        //default values
        this.direction = "left";
        this.displayOn = "block"; 
        this.displayOff = "none";
        this.showOn = '0';
        this.showOff = '100vw';

    }
    open = ()=>{
        this.modalOpenBtn.addEventListener('click', ()=>{
            this.modal.style.display = this.displayOn
            setTimeout(()=>{
                if(this.direction === "left") this.modal.style.left = this.showOn;
                if(this.direction === "right") this.modal.style.right = this.showOn;
                if(this.direction === "top") this.modal.style.top = this.showOn;
                if(this.direction === "bottom") this.modal.style.bottom = this.showOn;
            },50)
        })
    }
    close = ()=>{
        let modalTransition = window.getComputedStyle(this.modal).transition;
        modalTransition = parseInt(modalTransition.split(' ')[1].split('s')[0]);
        
        this.modalCloseBtn.addEventListener('click',()=>{
            if(this.direction === "left") this.modal.style.left = this.showOff;
            if(this.direction === "right") this.modal.style.right = this.showOff;
            if(this.direction === "top") this.modal.style.top = this.showOff;
                if(this.direction === "bottom") this.modal.style.bottom = this.showOff;
            
            setTimeout(()=>{
             this.modal.style.display = this.displayOff
            },modalTransition*1000)
        })
    }
}


// export class ToggleModal{
//     constructor(modal, openBtn, closeBtn){
//         this.modal = document.querySelector(`.${modal}`);
//         this.modalOpenBtn = document.querySelector(`.${openBtn}`);
//         this.modalCloseBtn = document.querySelector(`.${closeBtn}`);
//         this.displayOn = "block";
//         this.displayOff = "none";
//         this.showOn = '0';
//         this.showOff = '100vw';

//     }
//     open = ()=>{
//         this.modalOpenBtn.addEventListener('click', ()=>{
//             this.modal.style.display = this.displayOn
//             setTimeout(()=>{
//                 this.modal.style.left = this.showOn;
//             },50)
//         })
//     }
//     close = ()=>{
//         let modalTransition = window.getComputedStyle(this.modal).transition;
//         modalTransition = parseInt(modalTransition.split(' ')[1].split('s')[0]);
        
//         this.modalCloseBtn.addEventListener('click',()=>{
//             this.modal.style.left = this.showOff
//             setTimeout(function(){
//              this.modal.style.display = this.displayOff
//             },modalTransition*1000)
//         })
//     }
// }