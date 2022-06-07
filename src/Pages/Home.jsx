import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getAuthRequest, getAuthSucess } from "../Redux/auth/action"

export const Home = () => {

    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const isAuth = useSelector( state => state.auth.isAuth)
    // console.log(isAuth)

    const error = useSelector( state => state.auth.error)
    console.log(error)

    const dispatch = useDispatch()

    const handleadd = () => {
        const authrequest = getAuthRequest()
        dispatch(authrequest)

        axios( {
            url : " https://reqres.in/api/login",
            method : "POST",
            data : {
                email : email,
                password : pass
            }
        }).then( (res) => {
            console.log(res)
            dispatch(getAuthSucess({res,email}))
        })
    }

    return (
        <>
        {isAuth && <Navigate to="/posts"></Navigate>}
        {error && <h2>Wroing credintails</h2>}
        <h1>Home Page</h1>
        <input placeholder="Enter Email" onChange={ e => setEmail(e.target.value) }></input>
        <br></br>
        <br></br>
        <input placeholder="Enter Password" onChange={ e => setPass(e.target.value) }></input>
        <br></br>
        <br></br>
        <button onClick={handleadd}>Login</button>
        </>    
        
    )
}