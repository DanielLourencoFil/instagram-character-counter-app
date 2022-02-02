import { currentYear } from "./currentYear.js";
import {copyClipBoard} from "./copyClipBoard.js";
import {TextCalc} from "./TextCalc.js"
import { renderRemainingTextCalc, alertRemainingTextMaxLimit } from "./renderRemainingTextCalc.js";
//-----About modal
import { createAboutBtn, toggleAboutModal } from "./aboutPage/aboutPage.js";
import { showMetricsTextInfo } from "./aboutPage/showMetricsTextInfo.js";
import { htmlDataText } from "./aboutPage/htmlDataText.js";
import { renderABoutMetricText } from "./aboutPage/renderAboutMetricText.js";


// ==== ////////////////// VARIABLES ////////////////// ==== //

//---- text area for user typing
const textArea = document.querySelector('#text-area')

//---- main text displayer
const postDisplayer = document.querySelector('#total')
const textRemaining = document.querySelector('#remaining')

//---- main text displayer btns
const copyBtn = document.querySelector('.copy-btn')
const clearBtn = document.querySelector('.clear-btn')

//----secondary text displayers
const directDisplayer = document.querySelector('#direct')
const captionTruncationDisplayer = document.querySelector('#caption-truncation')
const hashtagsDisplayer = document.querySelector('#hashtags')
const bioDisplayer = document.querySelector('#bio')
const usernameDisplayer = document.querySelector('#username')
const profileNameDisplayer = document.querySelector('#profile-name')

//---- text types and lengths : class TextCalc instantiations based on type text length, ie. "direct message" max length is 1000 char. 
const post = new TextCalc(2200)
const direct = new TextCalc(1000)
const captionTruncation = new TextCalc(125)
const hashtags = new TextCalc(30)
const bio = new TextCalc(150)
const username = new TextCalc(30)
const profileName = new TextCalc(30)



// ==== ////////////////// TYPING LENGTH CALCULATION ////////////////// ==== //
textArea.addEventListener('input', (e)=>{
    const textLength = e.currentTarget.value.length;
    const text = e.currentTarget.value;
    
    //== total text==//
    textRemaining.textContent = post.calcRemainingText(textLength)
    postDisplayer.textContent = textLength
    alertRemainingTextMaxLimit( textLength, postDisplayer, post)
    alertRemainingTextMaxLimit( textLength, textRemaining, post)


    //== hashtags==//
    const hashtagsCurrentAmount = hashtags.calcEspecialChar("#", text)
    hashtagsDisplayer.textContent = `${ hashtagsCurrentAmount} / ${hashtags.maxLength - hashtags.calcEspecialChar("#", text)}`
    alertRemainingTextMaxLimit( hashtagsCurrentAmount, hashtagsDisplayer, hashtags)

    //== other types of text ==//

    //---- object that contains variables of dom element for text calculation to be rendered, and the correspondent text type. 
    const renderTextBasedOnLength = [
        {
            displayer: directDisplayer, 
            textType: direct,
        },
        {
            displayer: captionTruncationDisplayer, 
            textType:captionTruncation,
        }, 
        {
            displayer: bioDisplayer, 
            textType:bio,
        },
        {
            displayer: usernameDisplayer, 
            textType:username,
        },
        {
            displayer: profileNameDisplayer, 
            textType:profileName,
        },
    ]

    renderTextBasedOnLength.forEach(item=>{
        renderRemainingTextCalc(textLength, item.displayer, item.textType)
        alertRemainingTextMaxLimit(textLength, item.displayer, item.textType)
    })
})

// ==== copy typed text button ====//
copyBtn.addEventListener('click', ()=>{
        copyClipBoard(textArea)
})

// ==== clear typed text button ====//
clearBtn.addEventListener('click', ()=>{
        textArea.value = ''
})

// ==== ////////////////// ABOUT MODAL ////////////////// ==== //

// ==== render metric info on about modal
renderABoutMetricText(htmlDataText)

// ==== create "?" info btn and add toggle function to it
const navbar = document.querySelector('.navbar')
    createAboutBtn(navbar, toggleAboutModal)

// ==== show metric info by clicking on plus icon
    showMetricsTextInfo()

// ==== ////////////////// OTHER MINOR FEATURES ////////////////// ==== //

// ========== update current year ==========//
const currentYearDisplayer = document.querySelector('#current-year')
currentYearDisplayer.textContent = currentYear();



