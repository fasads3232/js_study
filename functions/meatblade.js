const makeWork = function (arrOfArr,func) {
      let max= -Infinity;
      let min = Infinity;
     for (let i = 0; i<arrOfArr.length; i++)
     {
      arrOfArr[i]=func(arrOfArr[i]);
    
      if (arrOfArr[i]>max)
      {
        max=arrOfArr[i]
      }  
      
     }
    return max
    
    }

const worker1 = function (arr) {
    let sum=0;
    for (let i=0; i< arr.length; i++)
    {
        sum+=arr[i];
    }
    return sum
    }
    

    
    console.log(makeWork( [[3,43,6,98],[4,4],[32,54,53,56],[2,6,7,7],[0,-1]]  ,worker1))

    const worker2= function (arr) {
        let min = arr[0];
        let max = arr[0];
        for (let i=0; i< arr.length; i++)
    {
        if (arr[i]>max)
        {
            max=arr[i] 
        }
        else if (arr[i]<min)
        {
            min=arr[i]
        }
    }
    let result = max - min;
    return result
    }
    console.log(makeWork( [[33,443,6,98],[4,4],[33,54,57,56],[23,66,7,7],[-100,-1]] ,worker2))
    
    /* НЕХУЙ БЫЛО БЛЯТЬ ИСПОЛЬЗОВАТЬ ...REST НИ В ПЕРВОЙ, НИ ВО ВТОРОЙ ФУНКЦИИ, ТОГДА БЫ СРАЗУ РАБОТАЛО БЛЯТЬ */    
    