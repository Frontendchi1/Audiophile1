// react-router
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route  } from "react-router-dom"

// RootLoyout
import RootLoyout from "./layout/RootLoyout"

// Pages
import Home from "./pages/home/Home"
import Speakers from "./pages/speakers/Speakers"
import Earphone from "./pages/earphone/Earphone"
import Headphone from "./pages/headphone/Headphone"


function App (){
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLoyout/>}>
      <Route index element={<Home/>}/>
      <Route path="/speakers" element={<Speakers/>}/>
      <Route path="/headphone" element={<Headphone/>}/>
      <Route path="/earphone" element={<Earphone/>}/>
    </Route>
  )
)
  return (
    <>
     <RouterProvider router={routes}/>
   </>
  )
}

export default App
