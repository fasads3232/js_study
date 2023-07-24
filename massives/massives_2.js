let messages = [
[ "zloy-zloy", "Мы с Алешей сегодня на иксбоксе рубились, потом в маке поели, потом ему новый телефон купили, и два часа с горок в Нескучном саду катались."],
["zloy-zloy", "У Алеши завтра день рождения."],
["zloy-zloy", "Он мой дед. Ему будет 81 год."],
["Вы", "LOL"]
 ];
 let arr=[];
    
for (let i=0;i<messages.length;i++)
{
    let a= {};
    a.authtor=messages[i][0];
    a.text=messages[i][1];
    arr.push(a);
    console.log(a);
   
}
// ya sam ne smog(((