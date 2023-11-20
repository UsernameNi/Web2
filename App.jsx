import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import About from './Pages/About'
import './App.css'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const Protected = ({isLoggedIn, children}) => {
    if(isLoggedIn==true){
      return(
        {children}
        )
  }
  else{
    return(
      <>
      <h1>Not Allowed</h1>
      </>
    )
    }
  }

  return (
    <>
      <h1>Hello World</h1>
     <BrowserRouter>
      <button onClick = {()=>setLoggedIn(!loggedIn)}>{loggedIn==false ? "Sign In" : "Sign Out"}</button>
      <header>
        <nav>
          <Link to = "/">Home</Link>
          <br></br>
          <Link to = "/about">About</Link>
        </nav>
      </header>
        <Routes>
          <Route path = "/" element = {<FirstPage/>}/>
          <Route path = "/about" element = {<Protected isLoggedIn={loggedIn}>
            <About/>
          </Protected>}/>
          
        </Routes>
     
     </BrowserRouter> 
    </>
  )
}

export default App