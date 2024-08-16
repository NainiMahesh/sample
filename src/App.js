import logo from './logo.svg';
import './App.css';

// function login(){
//   alert("login clicked")
// }

function App() {

  function login(){
    alert("login clicked")
  }
  function signUp(){
    console.log("signUp")

   return (
    <>
    
      <div>
       <h1>Coding is eassy and fun</h1>
       <h1>Coding is eassy and fun</h1>
      </div>
    </>
   )
  }
  return (
    <div >
   <h>React js tutorial</h>
   <button onClick={()=>login()}>login</button>
   <button onClick={()=>signUp()}>signUp</button>

   {/* <button onClick={login}>login</button> */}

    </div>
  );
}

export default App;
