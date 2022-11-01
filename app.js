
class typeEffect{
    constructor(words, displayArea){
        this.words = words;
        this.text ='';
        this.index = 0;
        this.type();
        this.isDeleting = false;
        this.displayArea = displayArea
    }
    type(){
        const current = this.index % this.words.length;
        let eachText = this.words[current];
        if (this.isDeleting) {
            this.text = eachText.substring(0, this.text.length -1)

        }else{
            this.text = eachText.substring(0, this.text.length + 1)
        }
        this.displayArea.innerHTML = `<span class="txt">${this.text}</span>`;
        this.type()
    }
}
function intialize() {
    const data = ["Software Developer", "Frontend Developer", "Blockchain Developer"];
    const displayArea = document.querySelector('.text-container');

    new typeEffect(displayArea, data)
}
document.addEventListener("DOMContentLoaded", intialize)
