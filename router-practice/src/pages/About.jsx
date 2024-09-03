import { useEffect } from "react"
import { AboutPage } from "../components/AboutPage/AboutPage";

export function About() {

    useEffect(() => {
        console.log("About page has been mounted");
        return () => {console.log("About page has been un-mounted");
        }
        
    }, [])
    return(
        <>
            <AboutPage/>
        </>
    )
}