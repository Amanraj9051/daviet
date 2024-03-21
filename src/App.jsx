import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import NavbarAlt from './components/NavbarAlt'
import Test from './components/Test'
import NewsSection from './components/NewsSection'
import PrincipleMsg from './components/PrincipleMsg'
import Bgtest from './components/Bgtest'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Navbar />
      <NavbarAlt />
      {/* <Test /> */}
      {/* <Banner/> */}
      <NewsSection />
      <PrincipleMsg />

      <Bgtest />
      <PrincipleMsg />
   </>
  )
}

export default App
