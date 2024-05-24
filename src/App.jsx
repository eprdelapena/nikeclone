import React from 'react'
import CustomerReviews from './components/CustomerReviews.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import PopularProducts from './components/PopularProducts.jsx'
import Services from './components/Services.jsx'
import SpecialOffers from './components/SpecialOffers.jsx'
import Subscribe from './components/Subscribe.jsx'
import SuperQuality from './components/SuperQuality.jsx'

const App = () => {
  return (
    <main className="relative"> 
      <Navbar> </Navbar>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero> </Hero>
      </section>

      <section>
        <PopularProducts> </PopularProducts>
      </section>

      <section className="padding">
        <SuperQuality> </SuperQuality>
      </section>

      <section className="padding">
        <Services> </Services>
      </section>

      <section className="padding">
        <SpecialOffers></SpecialOffers>
      </section>

      <section className="bg-pale-blue padding">
        <CustomerReviews> </CustomerReviews>
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe> </Subscribe>
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer> </Footer>
      </section>

    </main>
  )
}

export default App