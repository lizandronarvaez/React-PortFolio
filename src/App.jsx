import { Route, Routes } from "react-router-dom"
import {Nav,Footer} from "./components/index"
import { Home, Projects, Skills, Contact } from "./pages/index"

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
