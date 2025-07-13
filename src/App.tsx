import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import Bookmarks from "./pages/Bookmarks";
import { Button } from "./components/ui/button";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/PrivateRoute";
import ThemeToggle from "./lib/ThemeToggle";
import Cart from "./pages/Cart";
import { LucideBookmark, LucideShoppingCart } from "lucide-react";
import { Toaster } from "sonner";

import Tasktwo from "./pages/tasktwo/Tasktwo";
import Taskthree from "./pages/taskthree/Taskthree";
import Taskfive from "./pages/taskfive/Taskfive";

import About from "./pages/About";
import Productstaskthree from "./pages/Productstaskthree";
import Posts from "./pages/Posts";
import Postdetail from "./pages/Postdetail";
import ProductDetail from "./pages/Productdetail";



function Header() {
  const { token, logout } = useAuth();

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4 border-b mb-2 bg-white dark:bg-purple-900 gap-2 sm:gap-0">
      <div className="flex gap-2">
        <Toaster position="top-left"/>

        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>

        {token && (
          <Button asChild variant="outline">
            <Link to="/movies">Movies</Link>
          </Button>
        )}

        {token && (
          <Button asChild variant="outline">
            <Link to="/products">Products</Link>
          </Button>
        )}

        <Button asChild variant="outline">
          <Link to="/tasktwo">2</Link>
        </Button>

        <Button asChild variant="outline">
          <Link to="/taskthree">3</Link>
        </Button>

        <Button asChild variant="outline">
          <Link to="/taskfive">5</Link>
        </Button>


      </div>

      <div className="flex items-center gap-2">
        {token && (
          <Button asChild variant="outline">
            <Link to="/bookmarks">
            <LucideBookmark />Bookmarks</Link>
          </Button>
        )}

        {token && (
          <Button asChild variant="outline">
            <Link to="/cart">
            <LucideShoppingCart />Cart</Link>
          </Button>
        )}
        <ThemeToggle />
        {token ? (
          <Button onClick={logout} className="bg-red-500 text-white hover:bg-red-600">
            Logout
          </Button>) : (<Button asChild className="bg-green-500 text-white hover:bg-green-600">
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
  </div>
  );
}


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
      
          <Route path="/login" element={<Login />} />

          <Route path="/tasktwo" element={<Tasktwo />} />
          <Route path="/taskthree" element={<Taskthree />} />
          <Route path="/taskfive" element={<Taskfive />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/productstaskthree" element={<Productstaskthree />} />
          <Route path="/posts" element={<Posts />}>
            <Route path=":postId" element={<Postdetail />} />
          </Route>

          <Route path="/products" element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>}>
          </Route>

          <Route path="/products/:postId" element={<ProductDetail />} />

          <Route path="/cart" element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>}>
          </Route>

          <Route
            path="/movies"
            element={
              <PrivateRoute>
                <Movies />
              </PrivateRoute>
            }
          />

          <Route path="/bookmarks" element={
            <PrivateRoute>
              <Bookmarks />
            </PrivateRoute>
          } />

        </Routes>
      </BrowserRouter>
    </AuthProvider>);
}

export default App;
