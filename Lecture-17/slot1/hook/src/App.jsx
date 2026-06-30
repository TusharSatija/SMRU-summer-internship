function App()
{
  let count=0;
  function incr()
  {
    count++;
    console.log(count);
  }
  return(
    <>
      <h1>count : {count}</h1>
      <button type="submit" onClick={incr}>incr</button>
    </>
  )
}
export default App;