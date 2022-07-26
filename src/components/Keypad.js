// Code Keypad Component Here

function Keypad (){
    function keypadEvent (){
        console.log("Entering password...")
    }
    return (
        <div>
           <input type = "password"  onChange={keypadEvent} placeholder = "Type Password" />
        </div>
    )
}

export default Keypad;