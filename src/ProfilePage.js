import { useEffect, useState } from "react"
import { UserInfo } from "./api"
export default function ProfilePage(){
    const [userInfo ,setUserInfo] =useState({})
    useEffect(()=>{
        const id = localStorage.getItem('id')
        if(id){
            UserInfo(id,setUserInfo)
        }
    },[])
    return(
        <>
            <h1>User Information</h1>
            <ul>
                <li><span className="bold">Id:</span> {userInfo.id}</li>
                <li><span className="bold">First Name:</span> {userInfo.firstName}</li>
                <li><span className="bold">Last Name:</span> {userInfo.lastName}</li>
                <li><span className="bold">Maiden Name:</span> {userInfo.maidenName}</li>
                <li><span className="bold">Age:</span> {userInfo.age}</li>
                <li><span className="bold">Gendet:</span> {userInfo.gender}</li>
                <li><span className="bold">Email:</span> {userInfo.email}</li>
                <li><span className="bold">Phone:</span> {userInfo.phone}</li>
                <li><span className="bold">User Name:</span> {userInfo.username}</li>
                <li><span className="bold">Birth Date:</span> {userInfo.birthDate}</li>
                <li><span className="bold">Height:</span> {userInfo.height}</li>
                <li><span className="bold">Weight:</span> {userInfo.weight}</li>
                <li><span className="bold">Eye Color:</span> {userInfo.eyeColor}</li>
            </ul>
        </>
    )
}