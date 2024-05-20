
import Chai from "./chai"
function App() {
   const usernmae="|| chai or code"
  return (
  
  //fragment  , return one element
  //we can write in epmty fragment as div , div is also a single ele
  <> 
   <Chai />
   {/* evaluate expression */}
   <h1>Chai or react {usernmae}</h1> 
   <p>test para</p>
  </>
  )
}

export default App
