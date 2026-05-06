import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DemoPage from "./Pages/DemoPage";
import HomePage from "./Pages/Homepage";
import PricingCart from "./Pages/Pricing";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermCondition from "./Pages/TermCondition";
import DemoTable from "./Pages/DemoTable";
import ShippingPolicy from './Pages/ShippingPolicy'
import CancellationAndRefundPolicy from "./Pages/CancellationAndRefundPolicy";
import UserPolicy from "./UserAppPolicies/UserPolicy";
import UserTerms from "./UserAppPolicies/UserTerms";
import UserCancellationPolicy from "./UserAppPolicies/UserCancellationPolicy";
import UserHome from "./UserAppPolicies/UserHome";
import OwnerHome from "./OwnerAppPolicies/OwnerHome";
import OwnerPrivacyPolicy from "./OwnerAppPolicies/OwnerPolicy";
import OwnerTermsConditions from "./OwnerAppPolicies/OwnerTerms";
import OwnerVehicleVerification from "./OwnerAppPolicies/OwnerVehicleVerification";
import OwnerSupport from "./OwnerAppPolicies/OwnerSupport";

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

        <Route path="/user" element={<UserHome />} />
        <Route path="/user/privacy-policy" element={<UserPolicy />} />
        <Route path="/user/terms-and-conditions" element={<UserTerms />} />
        <Route path="/user/cancellation-refund" element={<UserCancellationPolicy />} />

        {/* Owner App Routes */}
        <Route path="/owner" element={<OwnerHome />} />
        <Route path="/owner/privacy-policy" element={<OwnerPrivacyPolicy />} />
        <Route path="/owner/terms-conditions" element={<OwnerTermsConditions />} />
        <Route path="/owner/vehicle-verification" element={<OwnerVehicleVerification />} />
        <Route path="/owner/support" element={<OwnerSupport />} />
      </Routes>
    </Router>
  );
}

export default App;
