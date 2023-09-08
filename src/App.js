import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
