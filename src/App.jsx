import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const PayementPage = lazy(() => import("./pages/PayementPage/PayementPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payement" element={<PayementPage />} />
            <Route
              path="*"
              element={
                <div>
                  404 Not Found. Go to <Link to="/">Home</Link>
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
