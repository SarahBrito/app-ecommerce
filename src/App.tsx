import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Details from './pages/Details'
import Cart from "./pages/Cart"
import EcommerceProvider from "./context/EcommerceContex"
import Checkout
 from "./pages/Checkout"
function App() {
  
  return (
    <EcommerceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/datails/:id" element={<Details />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </Router>
    </EcommerceProvider>
  )
}

export default App
