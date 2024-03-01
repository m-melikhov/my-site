import NavBar from './component/NavBar'
import Carousel from './component/Carousel'
import ContainerMarketing from './component/ContainerMarketing'
import Price from './component/Price'
import Contacts from './component/Contacts'
import Footer from './component/Footer'
import './App.css'
import Header from './component/Header'

export default function App() {

  return (
    <>
      <NavBar />
      <Header />
      <main>
        <Carousel />
        <ContainerMarketing />
        <Price />
        <Contacts />
        <Footer />
      </main>

    </>
  )
}


