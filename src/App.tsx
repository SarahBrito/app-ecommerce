import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Category from "./pages/Category"
import Details from './pages/Details'
import Cart from "./pages/Cart"
import EcommerceProvider from "./context/EcommerceContex"

function App() {
  
  return (
    <EcommerceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/category/:name" element={<Category />}/>
          <Route path="/datails/:id" element={<Details />}/>
          {/* <Route path="category/name/datails/:id" element={<Details />}/> */}
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
    </EcommerceProvider>
  )
}

export default App
