export class TextCalc{
    constructor(maxLength){
        this.maxLength = maxLength;
    }
    calcRemainingText = function(amountTyped){
        return this.maxLength - amountTyped 
    }
    calcEspecialChar = function(char, text){
        let charCount = 0
        for(let letter of text){
            if(letter == char){
                charCount ++;
            }
        }
        return charCount
    }
    maxLengthReached = function(textLength){
        if(textLength > this.maxLength) return true
        return false

    }
}