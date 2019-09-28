

export const isAuthenticated =(user) =>
{
fetch("/users/"+user.login).then(res => res.json()).then(m=>{console.log(m);console.log("2");
    if(m.password==user.password){
        return true;
    }
    else{
        return false;
    }
});
    
}
  