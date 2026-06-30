import { useEffect, useState } from "react";

function Effect()
{ 
    let [count,setcount]=useState(0);
    useEffect(()=>{
        console.log("inside useeffect hook");
    },[count]);
   function update()
   {
    console.log("inside usestate")
    setcount(count+1);
   }
    return(
        <>
            <h1>count:{count}</h1>
            <button type="submit" onClick={update}>increm</button>
        </>
    );
}
export default Effect;