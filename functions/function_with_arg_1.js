
function users_reputation (likes, dislikes, messages,edited)
{
if (messages>0)
{
    let reputation= (likes - dislikes)*(edited*0.1);
   console.log(reputation);
}

else 
{
 console.log('no reputation no messages')
}

}

users_reputation (1003,123,1,6)