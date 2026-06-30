import { useRef, useState } from "react";

function App()
{
  let ref=useRef(null);
  console.log(ref);
  let [count,setcount]=useState(0);

  function update()
  {
    ref.current=count;
    setcount(count+1) 
  }

  return(
    <>
      <h1>previous count :{ref.current}</h1>
      <h1>count: {count}</h1>
      <button type="submit" onClick={update}>inc</button>
    </>
  )
}
export default App;