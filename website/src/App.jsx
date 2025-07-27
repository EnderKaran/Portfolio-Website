import { About } from "./pages/About"
import { Footer } from "./components/Footer"
import { Hero } from "./pages/Hero"
import { Portfolio } from "./pages/Portfolio"
import { Stack } from "./pages/Stack"
import { Navbar } from "./components/Navbar"

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer/>
    </>
  )
}

export default App
