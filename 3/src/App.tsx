import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Posts from "./pages/Posts"
import Postdetail from "./pages/Postdetail"
import ProductDetail from "./pages/Productdetail"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<Postdetail />} />
        </Route>

        <Route path="/cart" element={<Cart />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:postId" element={<ProductDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App