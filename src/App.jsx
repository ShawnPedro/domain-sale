import './index.css'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Houstonrealestate from './pages/Houstonrealestate'
import ColumbusRealEstate from './pages/ColumbusRealEstate'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'
import OrderHistory from './components/columbus/OrderHistory'
import Home from './pages/Home'
import LasVegasPhotography from './pages/LasVegasPhotography'
import NyPhotography from './pages/NyPhotography'
import AnnaMariaIslandVacationHomes from './pages/AnnaMariaIslandVacationHomes'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/sale/domain-name=annamariaislandvacationhomes.com" replace />} />
        
        {/* <Route path='forsale/houstonrealestate.com' element={<Houstonrealestate />} /> */}
        <Route path='sale/domain-name=columbusrealestate.com' element={<ColumbusRealEstate />} />
        <Route path='sale/domain-name=vegasphotographer.com' element={<LasVegasPhotography />} />
        <Route path='sale/domain-name=nyphotography.com' element={<NyPhotography />} />
        <Route path='sale/domain-name=annamariaislandvacationhomes.com' element={<AnnaMariaIslandVacationHomes />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='order-history' element={<OrderHistory/>} />
        <Route path='home' element={<Home />} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
