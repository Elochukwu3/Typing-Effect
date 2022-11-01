
class typeEffect{
    constructor(displayArea, words, ){
        this.displayArea = displayArea
        this.words = words;
        this.text ='';
        this.index = 0;
        this.type();
        this.isDeleting = false;
    }
    type(){
        const current = this.index % this.words.length;
        console.log(this.words);
        let eachText = this.words[current];
        console.log(eachText);
        if (this.isDeleting) {
            this.text = eachText.substring(0, this.text.length -1)

        }else{
            this.text = eachText.substring(0, this.text.length + 1)
            console.log(this.text);
        }
        this.displayArea.innerHTML = `<span class="txt">${this.text}</span>`;
        if (this.isDeleting  && this.text === eachText) {
            this.isDeleting = true
            
        }
      
    }
}
function intialize() {
    const data = ["Software Developer", "Frontend Developer", "Blockchain Developer"];
    const displayArea = document.querySelector('.text-container');

    const kk = new typeEffect(displayArea, data)
    kk.type()
}
document.addEventListener("DOMContentLoaded", intialize)
