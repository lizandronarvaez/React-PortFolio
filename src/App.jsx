import { Route, Routes } from "react-router-dom"
import Nav from "./interface/Nav/Nav"
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import Contact from "./pages/Contact/Contact"
import Proyectos from "./pages/Proyectos/Proyectos"
import Footer from "./interface/Footer/Footer"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
