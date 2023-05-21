// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange(event) {
        //console.log(`${event.target.name}: ${event.target.value}`)
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" name="keypad" onChange={handleChange}></input>
        </div>
    )
}

export default Keypad;