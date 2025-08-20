import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DemoPage from "./Pages/DemoPage";
import HomePage from "./Pages/Homepage";
import PricingCart from "./Pages/Pricing";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermCondition from "./Pages/TermCondition";
import DemoTable from "./Pages/DemoTable";
import ShippingPolicy from './Pages/ShippingPolicy'
import CancellationAndRefundPolicy from "./Pages/CancellationAndRefundPolicy";

function App() {
  return (
    <Router>
      {/* Google Translate Widget at the Top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/price" element={<PricingCart />} />
        <Route path="/terms-and-conditions" element={<TermCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/demo-list" element={<DemoTable />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/cancellation-refund" element={<CancellationAndRefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
