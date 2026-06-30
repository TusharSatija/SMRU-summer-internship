import { useRef } from "react";
function App1()
{
    let inputRef=useRef(null)
    function upd()
    {
        inputRef.current.focus();
    }
    return(
        <>
        <br />
        <label htmlFor="">foucus input</label>
        <input type="text" ref={inputRef} />
        <br />
        <label htmlFor="">Normal input </label>
        <input type="text" name="" id="" />
        <br />
        <button onClick={upd}> focus the input</button>
        </>
    )
}
export default App1;