//Task 3
class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      // метод должен создать тег img
      // вложить в него src картинки (this.imgUrl)
      // и записать в this.html
      // + дергаем render
      // + странице должен залится фон черным
        this.html = document.body;
        const div = document.createElement("div");
        div.className = "image-block";
        this.html.appendChild(div);
        const img = document.createElement("img");
        img.src = this.imgUrl;
        div.appendChild(img);
        this.render();
        this.html.style.background = "black";
    }
    
    render() {
      // метод должен отрисовать изображение (this.html) на странице
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины
        const image = document.querySelector("img");
        image.style.position = "fixed";
        image.style.top = `${this.top}px`;
        image.style.left = `${this.left}px`;
        image.style.width = `${this.width}px`;
        image.style.objectFit = "cover";
    }
  
    moveUp() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      // + дергаем render
        this.top += -20;
        this.render();
    }
    moveDown() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      // + дергаем render
        this.top += 20;
        this.render();
    }
    moveLeft() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      // + дергаем render
        this.left += -20;
        this.render();
    }
    moveRight() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      // + дергаем render
        this.left += 20;
        this.render();
    }
}
  

//Task 4
class Circle extends Logo{
  constructor(size, color, top, left) {
    super(top,left);
    this.top = top;
    this.left = left;
    this.size = size;
    this.color = color;
    this.border = "50%";
    this.zIndex = "-1";
  }
  
  render() {
    const circle = document.createElement("div");
    const divImg = document.querySelector(".image-block");
    circle.style.position = "absolute";
    divImg.style.position = "relative";
    circle.style.top = `${this.top-90}px`;
    circle.style.left = `${this.left-90}px`;
    circle.style.background = this.color;
    let {width, height} = this.size;
    circle.style.width = `${this.size.width}px`;
    circle.style.height = `${this.size.height}px`;
    circle.style.borderRadius = this.border;
    circle.style.zIndex = this.zIndex;
    divImg.appendChild(circle);
  }
}

const imgUrl = 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
const mfLogotip = new Logo(imgUrl);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveLeft();
mfLogotip.moveUp();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveRight();
mfLogotip.moveRight();
console.log(mfLogotip);


const circle = new Circle({width: 150, height: 150}, "yellow", mfLogotip.top, mfLogotip.left);
console.log(mfLogotip.top);
circle.render();
console.log(circle);