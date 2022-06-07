import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Allroutes } from "./Pages/AllRoutes";
import "./styles.css";

export default function App() {

  const isAuth = useSelector( state => state.auth.isAuth)
  const email = useSelector( state => state.auth.data.email )
 
  const token = useSelector( state => state.auth.data)

  return <div className="App">
    <div>
      <div className="navbar">
         <div style={ {margin : "10px"} }>
            <Link style={ {margin : "10px"} } to='/'>Home</Link>
            <Link style={ {margin : "10px"} } to="/posts">Posts</Link>
            {isAuth && <div>Email : {email}</div>}
            {isAuth && <div>Token : {token.res.data.token }</div>}
         </div>
      </div>
      <Allroutes></Allroutes>
    </div>
  </div>;
}
