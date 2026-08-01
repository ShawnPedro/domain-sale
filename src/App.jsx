import './index.css'
import { Navigate, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
import ColumbusRealEstate from './pages/ColumbusRealEstate'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'
import OrderHistory from './components/columbus/OrderHistory'
import Home from './pages/Home'
import LasVegasPhotography from './pages/LasVegasPhotography'
import NyPhotography from './pages/NyPhotography'
import PigeonForgeRealtor from './pages/PigeonForgeRealtor'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/sale/domain-name=pigeonforgerealtor.com" replace />} />
        
        <Route path='sale/domain-name=columbusrealestate.com' element={<ColumbusRealEstate />} />
        <Route path='sale/domain-name=vegasphotographer.com' element={<LasVegasPhotography />} />
        <Route path='sale/domain-name=nyphotography.com' element={<NyPhotography />} />
        <Route path='sale/domain-name=pigeonforgerealtor.com' element={<PigeonForgeRealtor />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='order-history' element={<OrderHistory/>} />
        <Route path='home' element={<Home />} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
