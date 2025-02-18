
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import { Layout } from './Component/Layout/Layout'
import { Portfolio } from './Component/Portfolio/Portfolio'
import { Home } from './Component/Home/Home'
import { Contact } from './Component/Contact/Contact'
import { About } from './Component/About/About'
import { Error } from './Component/Error/Error'

function App() {
  
  let router = createBrowserRouter([
    {
      
         path:"" , element:<Layout/> , children:[
        {index:true, element: <Home/>},
        {path:"About" , element:<About/>},
        {path:"Portfolio" , element:<Portfolio/>},
        {path:"Contact" , element:<Contact/>},
        { path:'*', element:<Error/>}
      ] 
    }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App
