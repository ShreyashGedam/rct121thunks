import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { getData, getFailuer, getRequest, getSucess } from "../Redux/app/action"

export const Posts = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector( state => state.auth.isAuth)

    // const [data , setData] = useState([])

    const data = useSelector( state => state.posts.data)

    

    useEffect(() => {

        const dataRequest = getRequest()
        dispatch(dataRequest)

        

        axios( {
            url : "https://jsonplaceholder.typicode.com/posts",
            method : "GET"
        })
        .then( (res) => {
            const dataSucess = getSucess(res.data)  
            // console.log(res.data)
            
            dispatch(dataSucess)
        })
        .catch( (err) => {
            const dataError = getFailuer()
            dispatch(dataError)
        })

    },[])

    console.log(data)

    if(!isAuth){
        alert("Login first")
        return( 
        <Navigate to="/"></Navigate>)
    }

    return (
        <div>
            <h1>Posts Page</h1>
            {data.map( (e) => (
                <div key={e.id}>
                    <p>Title : {e.title}</p>
                    <p>Body : {e.body}</p>
                    <br></br>
                    <br></br>
                    <hr></hr>
                </div>
            ) )}
        </div>
        
        
    )
}