import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import About from "./pages/About";
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
import Taskone from "./pages/Taskone";


function Header() {
  const { token, logout } = useAuth();

  return (
    <div className="w-full flex items-center justify-between p-2 border-b mb-2 bg-white dark:bg-purple-900">
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

        <Button asChild variant="outline">
          <Link to="/about">About</Link>
        </Button>

        {token && (
          <Button asChild variant="outline">
            <Link to="/products">Products</Link>
          </Button>
        )}

        <Button asChild variant="outline">
          <Link to="/taskone">2</Link>
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
          </Button>) : (<Button asChild variant="outline">
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
          <Route path="/about" element={<About />} />

          <Route path="/taskone" element={<Taskone />} />

          <Route path="/products" element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>}>
          </Route>

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
