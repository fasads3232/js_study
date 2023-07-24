let allMessages = [
    {author: "zloy-zloy", text: "А у кого какой мобильный??", edited: true},
    {author: "zloy-zloy", text: "Я с андроидом. Уже 3 года живет, он самым крепким оказался, пережил 2 утопления.", edited: false},
    {author: "МамаЗузу", text: "Айфон в свое время успешно сдох при первом же падении на кафельную плитку.", edited: false},
    {author: "void", text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.", edited: false},
    {author: "mama", text: "Айфон.", edited: false},
    {author: "mama", text: "Почему не отвечаешь?", edited: false},
    {author: "void", text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».", edited: true},
    {author: "void", text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».", edited: false},
    {author: "void", text: "Ленюсь.", edited: false},
    {author: "void", text: "Пока оценивать нечего.", edited: false},
    {author: "void", text: "Не по-русски как-то получается, хоть и на русском.", edited: false},
    {author: "ivanov", text: "Чип и Дейл прикольно, играл в детстве.", edited: false},
    {author: "ivanov", text: "hello, world", edited: true},
    {author: "void", text: "Сейчас напишу книгу по JS.", edited: false},
    {author: "ivanov", text: "Спасибо.", edited: false},
    {author: "ivanov", text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код - объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.", edited: true},
    {author: "void", text: "Поделитесь видео-каналами по js.", edited: false},
    {author: "void", text: "Ничего не понравилось.", edited: false}
];

let allMessages1 = [
    {author: "zloy-zloy", text: "А у кого какой мобильный??", edited: false},
    {author: "zloy-zloy", text: "Я с андроидом. Уже 3 года живет, он самым крепким оказался, пережил 2 утопления.", edited: false},
    {author: "МамаЗузу", text: "Айфон в свое время успешно сдох при первом же падении на кафельную плитку.", edited: false},
    {author: "void", text: "У меня андроид. Особенно нравится, что никаких заморочек с айтюнс.", edited: false},
    {author: "mama", text: "Айфон.", edited: false},
    {author: "mama", text: "Почему не отвечаешь?", edited: false},
    {author: "void", text: "Дэвид Хэрман «Сила JavaScript. 68 способов эффективного использования JS».", edited: false},
    {author: "void", text: "Marijn Haverbeke, Вячеслав Голованов «Выразительный javascript: Введение».", edited: false},
    {author: "void", text: "Ленюсь.", edited: false},
    {author: "void", text: "Пока оценивать нечего.", edited: false},
    {author: "void", text: "Не по-русски как-то получается, хоть и на русском.", edited: false},
    {author: "ivanov", text: "Чип и Дейл прикольно, играл в детстве.", edited: false},
    {author: "ivanov", text: "hello, world", edited: true},
    {author: "void", text: "Сейчас напишу книгу по JS.", edited: false},
    {author: "ivanov", text: "Спасибо.", edited: false},
    {author: "ivanov", text: "Смысл такого видео? Все непонятные функции приходится самому смотреть. Надо не так делать. Пишете код - объясняете сразу, что к чему, голосом, ну, или там, текстом хотя бы, хотя лучше голосом.", edited: true},
    {author: "void", text: "Поделитесь видео-каналами по js.", edited: false},
    {author: "void", text: "Ничего не понравилось.", edited: false}];


function editedMessages(messages)
{
    let emsg = 0;
    let nemsg = 0;
 for (let i=0;i<messages.length;i++){
    if (messages[i].edited===true){
        emsg++;
    }
    else{
        nemsg++;
    }
 }
 console.log(`Отредактированных сообщений : ${emsg}. Неотредактированных сообщений : ${nemsg}, Всего сообщений : ${allMessages.length}`)
}
editedMessages(allMessages);

 /** так же есть еще замечетальнийший метод для массива .filter(), который создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
  * например как показать чатГПТ :
  * function getMessageStats(messages) {
  const editedMessages = messages.filter((message) => message.edited === true);
  const uneditedMessages = messages.filter((message) => message.edited === false);
  const totalMessages = messages.length;

  return {
    editedMessages: editedMessages.length,
    uneditedMessages: uneditedMessages.length,
    totalMessages: totalMessages
  };
}
const messageStats = getMessageStats(allMessages);

console.log(messageStats);
// Выведет: { editedMessages: 3, uneditedMessages: 13, totalMessages: 16 }
Так что на будущее надо будет использовать этот метод, а не каждый раз писать циклы которые будут пробегаться по массиву.
  */