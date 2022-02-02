

export function renderRemainingTextCalc(textLength, displayer, textType){
        displayer.textContent = `${textLength} / ${textType.calcRemainingText(textLength)}`;
}

export function alertRemainingTextMaxLimit(textLength, displayer, textType){
    textType.maxLengthReached(textLength)? displayer.classList.add('alert-max-length'): displayer.classList.remove('alert-max-length');
}