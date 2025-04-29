import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LayoutPage from "./pages/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
      </Route>

    </Routes>
    
    </>
  )
}

export default App
