import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./pages/home-page";
import StorePage from "./pages/store-page";
import AboutPage from "./pages/about-page";
import AppNavbar from "./components/app-navbar/app-navbar";
import { ShoppingCartContextProvider } from "./context/shopping-cart-context/shopping-cart-context";

function App() {
  return (
    <ShoppingCartContextProvider>
      <AppNavbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </ShoppingCartContextProvider>
  );
}

export default App;
