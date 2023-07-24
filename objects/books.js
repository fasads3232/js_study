class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount ; 
        this.state = state;
        this.type = type;
    }
    fix() {
       this.state = this.state * 1.5;
       this.currState = this.state;
    }
    set currState(state){
        if (state < 0){
            this.state = 0;
        }
        else if (state > 100){
            this.state = 100;
        }
        else {
            this.state=state
        }
        
    }
  get currState(){
    return this.state;
  } 
}

  

class Book extends PrintEditionItem {
    constructor(author){
        super(author);
        this.author = author;
        this.type = "book";
    }
}
class NovelBook extends Book {
    constructor(){
        super(author);
        this.type = "novel" 
    }
}


class FantasticBook  extends Book {
    constructor(){
        super(author);
        this.type = "fantastic" 
    }
}
class DetectiveBook  extends Book {
    constructor(){
        super(author);
        this.type = "detective" 
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); 
  picknick.state = 10;
  console.log(picknick.state); 
  picknick.fix();
  console.log(picknick.state); 