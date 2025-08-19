function getFreqOfWords(sentence){
    if (typeof sentence !== 'string'){
        return undefined
    }
    else {
        let words = sentence.toLowerCase().split(" ")

        let count = {}
        for(let i = 0;i < words.length;i++){
            let word = words[i]
            if (count[word]){
                count[word] += 1
            }
            else count[word] = 1
        }
    return count
    }
    
}

console.log(getFreqOfWords("today is present and present is your gift"))
console.log(getFreqOfWords("do you best just do it"))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))