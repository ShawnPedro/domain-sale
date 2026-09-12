import 'react'
import HomeSection from '../components/HomeSection'


function DisneyRentals() {
       
  return (
    <HomeSection 
            domainName="DisneyRentals.com"
            price={150}
            checkoutUrl="/checkout"
        />
  )
}

export default DisneyRentals
