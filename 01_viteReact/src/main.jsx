import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       Custom App | Gaurav
//     </div>
//   )
// }

// const ReactElement = {
//   type: "a",
//   props:{
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children:"Click me to visit google"
// }

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit to google</a>
)

const AnotherUser = " Raj"

const ReactElement = React.createElement(
  "a",
  {href:"https://google.com", target: "_blank"},
  "click me to visit google",
  AnotherUser
)

createRoot(document.getElementById('root')).render(
  
  ReactElement
  
)
