import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const  anotherUser= "Sonali aur react"
const reactElement= React.createElement(
   'a', //tag
   {href: 'https://google.com', target:'_blank'},  //obj
   'click me to visit google',
   anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
    // ReactElement()
    // anotherElement
    reactElement
  // </React.StrictMode>,
)
