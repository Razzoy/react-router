import { useEffect } from "react"

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
        <h1>Concept</h1>
        </>
    )
}