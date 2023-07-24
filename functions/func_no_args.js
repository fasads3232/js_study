function js()
{
  let ver = '2.0';
  console.log(`Forum Megafon,  ${ver}`)
}

let user = {
  name: "Иван Иванов",
  login: "killer504",
  reputation: 97,
  messages: [
    {from: "administrator", text: "Вы получили предупреждение за публикацию рекламы на форуме"},
    {from: "Петр", text: "Собираем встречу в субботу в 19:00. Придёшь?"},
    {from: "administrator", text: "Ваш рейтинг был повышен пользователем DonkeyKong"},
    {from: "administrator", text: "Ваш рейтинг был повышен пользователем Netologist"},
    {from: "Brian Kerninghan", text: "hello, world"}
  ]
};
function msg() 
{ 
  console.log(`Messages in chat : ${user.messages.length}`);
 for (let i=0;i<user.messages.length;i++)
  {
  console.log(user.messages[i].from,'|', user.messages[i].text);
  }
}
msg();