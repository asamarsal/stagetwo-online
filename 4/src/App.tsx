import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { Button } from "./components/ui/button";
import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./lib/PrivateRoute";
import ThemeToggle from "./lib/ThemeToggle";


function Header() {
  const { token, logout } = useAuth();

  return (
    <div className="w-full flex items-center justify-between p-2 border-b mb-2 bg-white dark:bg-purple-900">
      <div className="flex gap-4">

        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>

        <Button asChild variant="outline">
          <Link to="/about">About</Link>
        </Button>

        {token && (
          <Button asChild variant="outline">
            <Link to="/products">Products</Link>
          </Button>
        )}

      </div>

      <div className="flex items-center gap-2">
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

          <Route path="/products" element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>}>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>);
}

export default App;
