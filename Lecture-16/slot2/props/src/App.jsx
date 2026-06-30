import Child1 from "./Child1";
function App()
{
  console.log("this is an app component ..");
  return(
    <> 
      <Child1 name="abc"  age="21" gender="M"/>
      <br />
      <Child1  name="pqr" age="20"  gender="F"/> 
    </>
  )
}

export default App;