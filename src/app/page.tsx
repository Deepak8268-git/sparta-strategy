import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import ClientsAndPartners from './components/ClientsAndPartners'
import Approach from './components/Approach'
import Services from './components/Services'
import Sectors from './components/Sectors'
import GlobalNetwork from './components/GlobalNetwork'
import Cta from './components/Cta'
import Footer from './components/Footer'
import StrategicAlliances from './components/StrategicAlliances'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <StrategicAlliances />
        <About />
        <ClientsAndPartners />
        <Approach />
        <Services />
        <Sectors />
        <GlobalNetwork />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
