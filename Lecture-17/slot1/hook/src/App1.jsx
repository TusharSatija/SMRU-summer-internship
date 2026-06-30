import { useState } from "react";

function App1()
{ 
    let [count,setcount]=useState(0);
   function update()
   {
    setcount(count+1);
   }
    return(
        <>
            <h1>count:{count}</h1>
            <button type="submit" onClick={update}>increm</button>
        </>
    );
}
export default App1;