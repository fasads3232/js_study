let thread = {
    title: "Поделитесь книжкой",
    author: "RuBrick",
    total: 23,
    messages: [
        {
            id: 13201,
            date: "2018-01-09",
            text: "Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо",
            author: {
              name: "RuBrick",
              login: "ru_brick",
              reputation: 3,
              role: "user"
            }
        },
        {
            id: 13208,
            date: "2018-01-12",
            text: "Неужели нет хорошей литературы?",
            author: {
              name: "RuBrick",
              login: "ru_brick",
              reputation: 3,
              role: "user"
            }
        },
        {
            id: 13209,
            date: "2018-01-12",
            text: "в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.",
            author: {
              name: "Popov",
              login: "popov_ma",
              reputation: 2310,
              role: "user"
            }
        },
        {
            id: 13219,
            date: "2018-01-14",
            text: "В сети много сайтов с хорошими объяснениями + есть курсы.",
            author: {
              name: "Void",
              login: "void",
              reputation: 5005,
              role: "user"
            }
        },
        {
            id: 13220,
            date: "2018-01-14",
            text: "Есть большая книга «JavaScript.Подробное руководство», потом смотришь документацию.",
            author: {
              name: "noname",
              login: "noname",
              reputation: 100,
              role: "user"
            }
        },
        {
            id: 13250,
            date: "2018-01-19",
            text: "Или можно посмотреть видео-курсы на youtube! А самое главное - практика! И этот форум - лучшая тренировочная площадка!",
            author: {
              name: "noname",
              login: "noname",
              reputation: 110,
              role: "user"
            }
        },
        {
            id: 13259,
            date: "2018-01-20",
            text: "Понял, спасибо!",
            author: {
              name: "RuBrick",
              login: "ru_brick",
              reputation: 13,
              role: "user"
            }
        }
    ]
};


function printMessages(msg) {
  if (thread.messages.length > 0) {
    for (let i = 0; i < thread.messages.length; i++) {
      if (i >= thread.messages.length - msg) {
        console.log(`${thread.messages[i].author.name} (репутация: ${thread.messages[i].author.reputation}) : ${thread.messages[i].text}`);
      }
    }
  } else {
    console.log("Ошибка формата! В теме нет сообщений");
  }
}

printMessages(6);


//Весь этот код не работал, ибо В функции printMessages происходит удаление элементов из массива thread.messages с помощью метода splice. При этом индексы всех элементов смещаются на 1 влево, а последний элемент массива удаляется. В результате при обращении к элементу массива с помощью индекса i на следующей итерации цикла, индекс уже может указывать на другой элемент массива, а не на тот, который нужен.
//В данном случае в строке console.log(${thread.messages[i].author.name} (репутация : ${thread.messages[i].author.reputation}) : ${thread.messages[i].text} ) переменная i указывает на индекс элемента массива, который уже был удален. Поэтому обращение к свойству author для этого элемента вызывает ошибку, потому что элемент не существует.
//Чтобы исправить эту ошибку, необходимо изменить код таким образом, чтобы он работал с массивом без изменения его структуры. Например, можно использовать цикл for..of, который позволяет итерироваться по массиву без изменения его структуры:
//function printMessages(msg)
//{
//for (let i=0;i<thread.messages.length;i++) {
  //if (0<msg)
  //{   
   //thread.messages.splice(0,i)
    //console.log(`${thread.messages[i].author.name} (репутация : ${thread.messages[i].author.reputation}) : ${thread.messages[i].text} `)
//
//  }
//  else
//  {
  //  console.log(`Ошибка формата! В теме нет сообщений`)
  //}
//}
//}