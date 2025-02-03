import React from "react";
 
// importing the custom hook
import useCustomHook from "./useCustomHook";
 
function SecontComponent(props){
 
    // ClickedButton = resetCounter;
    const clickedButton = useCustomHook(0 , "SecondComponent"); 
     
    return (
        <div>
            <h1> This is the Second Component</h1>
            <button onClick={clickedButton}> 
                  Click here!
            </button>
        </div>
    );
}
 
export default SecontComponent;