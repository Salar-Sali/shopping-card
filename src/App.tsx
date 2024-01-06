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
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <AppNavbar />
        <Container className="mb-4" style={{ flex: 1 }}>
          <Routes>
            <Route path="/shopping-card/" element={<HomePage />} />
            <Route path="/shopping-card/store" element={<StorePage />} />
            <Route path="/shopping-card/about" element={<AboutPage />} />
          </Routes>
        </Container>
      </div>
    </ShoppingCartContextProvider>
  );
}

export default App;
