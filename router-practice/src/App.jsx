
import { Home } from "./pages/Home"
import { Concept } from "./pages/Concept"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={"/concept"} element={<Concept />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/*"} element={<div>Error 404!.. Page was not found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
