export function login(usernameState, passwordState ,setlogin) {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${usernameState}`,
      password: `${passwordState}`,
    }),
  })
    .then(res => res.json())
    .then(res =>{setlogin(res)})
    .catch((error)=>console.log(error));
}

export function UserInfo(id,setUserInfo){
    fetch(`https://dummyjson.com/users/${id} `)
    .then(res => res.json())
    .then(res=>{setUserInfo(res)})
    .catch(error=>console.log(error));
}