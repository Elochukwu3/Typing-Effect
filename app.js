
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
        let eachText = this.words[current];
        if (this.isDeleting) {
            this.text = eachText.substring(0, this.text.length - 1)
            console.log(this.text);

        }else{
            this.text = eachText.substring(0, this.text.length + 1)
            
        }
        this.displayArea.innerHTML = `<span class="txt">${this.text}</span>`;
        let textSpeed = 300;

        if(this.isDeleting) {
          textSpeed /= 2;
        }
    
        if (!this.isDeleting  && this.text === eachText) {
            textSpeed = 2000
            this.isDeleting = true
            
        }else{
            if(this.isDeleting && this.text === ''){
                this.isDeleting = false
                this.index ++
                textSpeed = 400
            }
        } 
        setTimeout(()=>this.type(), textSpeed)
    }
}
function intialize() {
    const data = ["Software Developer", "Frontend Developer", "Blockchain Developer"];
    const displayArea = document.querySelector('.text-container');

  new typeEffect(displayArea, data)
    
}
document.addEventListener("DOMContentLoaded", intialize)
