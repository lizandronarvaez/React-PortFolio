import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home"
import Skills from "./pages/Skills/Skills"
import Footer from "./pages/Footer/Footer"
import Proyectos from "./pages/Proyectos/Proyectos"
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="contacto" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
