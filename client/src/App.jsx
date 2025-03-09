
import Banner from "./components/Banner"
import Container from "./components/Container"
import NewArrival from "./components/NewArrival"
import Sales from "./components/Sales"




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

        {/* product of the year */}

        {/* special offer */}
      </Container>

    </>
  )
}

export default App
