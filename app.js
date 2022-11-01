
//making use and practice of javaScript classee
class typeEffect {
  constructor(displayArea, words) {
    this.displayArea = displayArea;
    this.words = words;
    this.text = "";
    this.index = 0;
    this.type();
    this.isDeleting = false;
  }
  type() {
    //setting the current word not to exceed the word arrray length
    const current = this.index % this.words.length;
    let eachText = this.words[current];//assigning a variable to the current word

    if (this.isDeleting) {
      this.text = eachText.substring(0, this.text.length - 1);//if isDeleting is true(remove each of the word from back)
    } else {
      this.text = eachText.substring(0, this.text.length + 1); // if it is not deleting (add each of the word by adding the length)
    }
    this.displayArea.innerHTML = `<span class="txt">${this.text}</span>`;
    let textSpeed = 400;

    if (this.isDeleting) {
      textSpeed /= 2;
    }

    if (!this.isDeleting && this.text === eachText) {
      textSpeed = 2000;
      this.isDeleting = true;
    } else {
      if (this.isDeleting && this.text === "") {
        this.isDeleting = false;
        this.index++;
        textSpeed = 400;
      }
    }
    setTimeout(() => this.type(), textSpeed);//setTimeout to call the type method/function at each text speed
  }
}
function intialize() {
  const data = [
    "Software Developer",
    "Frontend Developer",
    "Blockchain Developer",
  ];
  const displayArea = document.querySelector(".text-container");

  new typeEffect(displayArea, data);
}
document.addEventListener("DOMContentLoaded", intialize);
