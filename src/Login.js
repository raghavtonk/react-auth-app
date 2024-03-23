import { useRef, useState,useEffect } from "react";
import { Link,useNavigate} from "react-router-dom";
import { login } from "./api";


export default function Login(){
    const userNameRef = useRef();
    const passwordRef = useRef();
    const [islogin,setlogin] = useState(undefined)
    const navigate = useNavigate();
    async function handleLogin(event){
        event.preventDefault()
        const userName = userNameRef.current.value;
        const password= passwordRef.current.value
        login(userName,password ,setlogin);
       userNameRef.current.value = ''
       passwordRef.current.value=''
           
    } 
    useEffect(()=>{
        if(islogin && islogin.message){
            setTimeout(()=>{
                setlogin(undefined)
            },3000)
        }
        if(islogin && !islogin.message){
            const token = islogin.token;
            const id = islogin.id;
            localStorage.setItem('token',token);
            localStorage.setItem('id',id);
            navigate("/profilePage")
        }
    },[islogin])
    return(
        <main className="loginContainer">
            <h1 >
            Login Page
            </h1>
            <form onSubmit={handleLogin} >
                
                <label htmlFor="username">UserName:</label>
                <input id="username" ref={userNameRef} type='text'/>
                
                <label htmlFor="password">Password:</label>
                <input id="password" ref={passwordRef}  type="text"/>
            
                <div>
                <button >Login</button>
                </div>
            </form>
            {(islogin && islogin.message) && <p className="error">{islogin.message}</p>}
        </main>
        
    )
}