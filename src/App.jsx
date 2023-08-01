import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import Contact from "./pages/Contact/Contact"
import Proyectos from "./pages/Proyectos/Proyectos"
import FooterInformation from "./components/FooterInformation/FooterInformation"
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<Contact />} />
        </Routes>
        <FooterInformation />
      </BrowserRouter>
    </>
  )
}

export default App
