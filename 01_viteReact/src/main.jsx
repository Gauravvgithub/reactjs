import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      Custom App | Gaurav
    </div>
  )
}

const ReactElement = {
  type: "a",
  props:{
      href: "https://google.com",
      target: "_blank"
  },
  children:"Click me to visit google"
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit to google</a>
)

createRoot(document.getElementById('root')).render(
  
  anotherElement
  
)
