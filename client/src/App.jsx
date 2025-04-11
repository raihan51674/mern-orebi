
import Banner from "./components/Banner"
import BestSellers from "./components/BestSellers"
import Container from "./components/Container"
import NewArrival from "./components/NewArrival"
import ProductOfYear from "./components/ProductOfYear"
import Sales from "./components/Sales"
import SpecialOffer from "./components/SpecialOffer"




function App() {


  return (

    <>
      <Banner />
      <Container className='py-4 md:py-10'>
        {/* sales */}
        <Sales />

        {/* new arraival */}
        <NewArrival/>

        {/* Best Sellers */}
        <BestSellers/>

        {/* product of the year */}
        <ProductOfYear/>

        {/* special offer */}
        <SpecialOffer/>
      </Container>

    </>
  )
}

export default App
