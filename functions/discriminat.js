function solve(a,b,c)
{
    let d=Math.pow(b,2)-4*a*c;
   let result=[];
    if(d<0)
    {
       console.log(`Корней нет!`) 
    }
    else if (d==0)
    {
        let x1=-b/(2*a);
        result.push(x1);
        console.log(result);
    }
   else 
   {
    let x2=(-b + Math.sqrt(d) )/(2*a) ;
    let x3=(-b - Math.sqrt(d) )/(2*a);
    result.push(x2,x3);
    console.log(result);
   }
  
} 



solve(41,21,2) 

/**
 * Если при использовании метода .push для массива ты хочешь вывести массив с добавленными элементами, то нжуно выводить исходный массив, пример с dev.mozilla.org :
 * Следующий код создаёт массив sports, содержащий два элемента, а затем добавляет к нему ещё два элемента. Переменная total будет содержать новую длину массива.

var sports = ['футбол', 'бейсбол'];
var total = sports.push('американский футбол', 'плавание');

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total);  // 4
 */
