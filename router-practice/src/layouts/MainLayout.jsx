import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar"
import style from './MainLayout.module.scss'

export function MainLayout() {
    return (
        <>
            <Navbar />
            <main className={style.mainStyle}>
                <Outlet />
            </main>
        </>
    )
}