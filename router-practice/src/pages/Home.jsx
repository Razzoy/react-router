import { useEffect } from "react"
import { HomePage } from "../components/HomePage/HomePage";

export function Home() {

    useEffect(() => {
        console.log("Home page has been mounted");
        return () => {
            console.log("Home page has been un-mounted");
        }

    }, [])

    return (
        <>
            <HomePage/>
        </>
    )
}