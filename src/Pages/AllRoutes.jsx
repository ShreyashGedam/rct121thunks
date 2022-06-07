import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Posts } from "./Posts"

export const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/posts" element={<Posts></Posts>}></Route>
            </Routes>
        </div>
    )
}