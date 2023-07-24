function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
  }
  
  Student.prototype.setSubject = function(subjectName) {
    if (this.subject === undefined) {
      this.subject = subjectName;
    }
  };
  
  Student.prototype.addMark = function(mark) {
    if (typeof mark === 'number') {
      this.marks.push(mark);
    }
  };
  
  Student.prototype.addMarks = function(...marks) {
    this.marks = this.marks.concat(marks.filter(mark => typeof mark === 'number'));
  };
  
  Student.prototype.getAverage = function() {
    let sum = 0;
    this.marks.forEach(mark => {
      sum += mark;
    });
    
    return sum / this.marks.length;
  };
  Student.prototype.exclude = function(reason){
    if (this.getAverage() <= 3 && reason === 'low grades'){
       delete this.marks;
       delete this.subject;
       this.excluded = reason;
    }
  }
  
  let andrew = new Student('Andrew', 'male', 25);
  let antony = new Student('Antony', 'male', 30);
  antony.setSubject('алгебра');
  antony.addMark(5);
  antony.addMarks(3, 2, 2);
  antony.addMarks(3, 2, 2);
  antony.addMark(4);
  antony.exclude('low grades');
  console.log(antony);
  
  

  /*Метод getAverage сам по себе является правильным. 
  Однако, в логике ваших методов addMark и addMarks есть проблема, из-за которой this.marks становится массивом смешанных типов данных (числа и массивы),
   а не только числами.

Чтобы исправить эту проблему, вам нужно обеспечить, чтобы this.marks всегда оставался массивом чисел. */