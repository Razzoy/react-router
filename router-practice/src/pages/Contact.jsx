import { useEffect } from "react"

export function Contact() {

    useEffect(() => {
        console.log("Contact page has been mounted");
        return () => {console.log("Contact page has been un-mounted");
        }
        
    }, [])

    return(
        <div>
            <h1>Contact Us</h1>
        </div>
    )
}