export function copyClipBoard(textInput){
    return navigator.clipboard.writeText(textInput.value)
}