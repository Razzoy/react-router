import { useEffect } from "react"
import { ConceptPage } from "../components/ConceptPage/ConceptPage";

export function Concept() {

    useEffect(() => {
        console.log("Concept page has been mounted");

        //Det eneste 'Timer' eksempel
        let t = 0;
        let timer = setInterval(()=>{
            console.log("Timer", (t += 1));
            
        }, 1000);


        return () => {
            console.log("Concept page has been un-mounted");
            clearInterval(timer);
        }
        
    }, [])
    return(
        <>
            <ConceptPage/>
        </>
    )
}