class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      if (this.state < 100) {
        this.state *= 1.5;
      }
    }
    set state(value){
        if (value <0){
            return this._state = 0;
        }
        else if (value > 100){
            return this._state = 100;
        }
        else return this._state = value;
    }
    get state(){
        return this._state
    }
  
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(author,name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author,name, releaseDate, pagesCount){
        super(author,name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author,name, releaseDate, pagesCount){
        super(author,name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author,name, releaseDate, pagesCount){
        super(author,name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(key, value) {
      for (const book of this.books) {
        if (book[key] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        const book = this.books[i];
        if (book.name === bookName) {
          this.books.splice(i, 1);
          return book;
        }
      }
      return null;
    }
  }

  const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); 
console.log(library.findBookBy("releaseDate", 1924).name); 

console.log("Количество книг до выдачи: " + library.books.length); 
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); 