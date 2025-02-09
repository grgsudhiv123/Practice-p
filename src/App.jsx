import Navbar from "./components/navbar"
import Hero from "./sections/Hero"
import Artists from "./sections/Artists"
import PopularSongs from "./sections/PopularSongs"
import Albums from "./sections/Albums"
import Services from "./sections/Services"
import Footer from "./sections/Footer"


const App = ()=> {
  return (
    <>
      <main className="relative">
        <Navbar/>
        <section className="bg-black xl:px-16 px-8 xl:py-24 py-16">
          <Hero />
        </section >
        <section className="bg-black xl:px-16 px-8 xl:py-24 py-16">
          <Artists />
        </section>
        <section className="bg-black xl:px-16 px-8 xl:py-24 py-16">
          <PopularSongs />
        </section>
        <section className="bg-black xl:px-16 px-8 xl:py-24 py-16">
          <Albums />
        </section>
        <section className="bg-black xl:px-16 px-8 xl:py-24 py-16">
          <Services />
        </section>
        <section className="bg-black xl:px-16 px-8 xl:py-24 py-16">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
