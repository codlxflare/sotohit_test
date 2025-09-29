import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PremiumHeader from "./components/PremiumHeader";
import ModernHero from "./components/ModernHero";
import MainSections from "./components/MainSections";
import ImmersiveFeatures from "./components/ImmersiveFeatures";
import Footer from "./components/Footer";
import BottomNavBar from "./components/BottomNavBar";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import NewsPage from "./pages/NewsPage";
import TradeInPage from "./pages/TradeInPage";
import PromotionsPage from "./pages/PromotionsPage";
import EnhancedCartPage from "./pages/EnhancedCartPage";
import EnhancedOrderFormPage from "./pages/EnhancedOrderFormPage";
import { featuredProducts } from "./mock/enhancedMockData";
import CatalogIndexPage from "./pages/CatalogIndexPage";
import { MobileMenuProvider } from "./contexts/MobileMenuContext";

function Home({ addToCart }) {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="relative z-10">
        <ModernHero />
        <MainSections products={featuredProducts} addToCart={addToCart} />
        <ImmersiveFeatures />
      </div>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);
      if (exist) return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i));
      return [...prev, { ...product, quantity: 1 }];
    });
  };
  const updateCartItem = (id, q) => setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  return (
    <MobileMenuProvider>
      <div className="App">
        <BrowserRouter>
          <PremiumHeader cartCount={cartCount} />
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/catalog" element={<CatalogIndexPage />} />
            <Route path="/catalog/:category" element={<CatalogPage addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/news/:id" element={<NewsPage />} />
            <Route path="/trade-in" element={<TradeInPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/cart" element={<EnhancedCartPage cart={cart} updateCartItem={updateCartItem} removeFromCart={removeFromCart} />} />
            <Route path="/order" element={<EnhancedOrderFormPage cart={cart} clearCart={clearCart} />} />
          </Routes>
          <Footer />
          <BottomNavBar cartCount={cartCount} />
        </BrowserRouter>
      </div>
    </MobileMenuProvider>
  );
}

export default App;