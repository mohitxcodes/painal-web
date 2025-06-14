import { Outlet } from 'react-router-dom'
import Header from './components/header/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

    </ >
  )
}

export default App
