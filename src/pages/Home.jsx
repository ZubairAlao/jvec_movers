import Header from "../components/Header"
import Hero from "../components/Hero"
import Benefits from "../components/Benefits"
import OurTeam from "../components/OurTeam"
import Represent from "../components/Represent"
import GeographicCoverage from "../components/GeographicCoverage"
import Blog from "../components/Blog"
import FreeQuote from "../components/FreeQuote"
import DownloadApp from "../components/DownloadApp"
import CleaningServices from "../components/CleaningServices"

const Home = () => {
  return (
    <div className="">
     <Hero />
     <Benefits />
     <OurTeam />
     <Represent />
     <GeographicCoverage />
     <Blog />
     <FreeQuote />
     <DownloadApp />
     <CleaningServices />
    </div>
  )
}

export default Home