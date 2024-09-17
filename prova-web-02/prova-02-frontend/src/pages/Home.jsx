import { Outlet } from "react-router-dom"
import MyNavbar from "../components/MyNavbar"

export const Home = () => {
    return (
        <>
        <div>
            <MyNavbar />
            <Outlet />
        </div>
        </>
    )
}