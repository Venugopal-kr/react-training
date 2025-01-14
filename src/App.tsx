import { BrowserRouter, Route,Routes } from "react-router";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import OrderForm from "./components/OrderForm/OrderForm";
import ProductionLines from "./components/ProductionLine/ProductionLines";
import { ProductionProvider } from "./contexts/ProductionProvider";



const App: React.FC = () => {
  return (
    <ProductionProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/production-line" element={<ProductionLines />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductionProvider>
  );
};

export default App;
