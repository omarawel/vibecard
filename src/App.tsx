import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import ForgotPassword from "./components/Pages/ForgotPassword";
import Page404 from "./components/Pages/Page404";
import CheckEmail from "./components/Pages/CheckEmail";
import Create from "./components/Pages/Create";
import Verify from "./components/Pages/Verify";
import Dashboard from "./components/Pages/Dashboard";
import Protected from "./components/Protected/Protected";
import ViewCard from "./components/Pages/ViewCard";
import Pricing from "./components/Pages/Pricing";
import Products from "./components/Pages/Products";
import ProductDetail from "./components/Pages/ProductDetail";
import Setting from "./components/Pages/Setting";
import Insights from "./components/Pages/Insights";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";
import ImageEditor from "./components/Pages/ImageEditor";
import Ambassador from "./components/Pages/Ambassador";
import Affiliate from "./components/Pages/Affiliate";
import AffiliateSetting from "./components/Ambassador/AffilateSetting";
import AmbassadorProtected from "./components/Protected/AmbassadorProtected";
import WalletsDetail from "./components/Pages/WalletsDetail";
import OrderMultipleProducts from "./components/Pages/OrderMultipleProduct";
import MyOrders from "./components/Pages/MyOrders";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Imprint from "./components/Footer/Imprint";
import CancellationPolicy from "./components/Footer/CancllationPolicy";
import Terms from "./components/Footer/Terms";
import ChatbotPrivacyPolicy from "./components/Pages/ChatbotPrivacyPolicy";
import Company from "./components/Pages/Company";
import ReviewCardDetail from "./components/Pages/ReviewCardDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-design" element={<ImageEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/wallets/:id" element={<WalletsDetail />} />
        <Route path="/review-card/:id" element={<ReviewCardDetail />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/teams" element={<Company />} />

        <Route
          path="/setting"
          element={
            <Protected>
              <Setting />
            </Protected>
          }
        />
        <Route
          path="/insights"
          element={
            <Protected>
              <Insights />
            </Protected>
          }
        />
        <Route
          path="/my-orders"
          element={
            <Protected>
              <MyOrders />
            </Protected>
          }
        />
        <Route path="/request" element={<ForgotPassword />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/card/:id" element={<ViewCard />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/create"
          element={
            <Protected>
              <Create />
            </Protected>
          }
        />
        <Route
          path="/order-multiple-products"
          element={<OrderMultipleProducts />}
        ></Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/cancellation" element={<CancellationPolicy />} />
        <Route path="/terms-use" element={<Terms />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route
          path="/chatbot-privacy-policy"
          element={<ChatbotPrivacyPolicy />}
        />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />}></Route>
        {/* Affiliate */}
        <Route path="/ambassador" element={<Ambassador />}></Route>
        <Route
          path="/affiliate"
          element={
            <AmbassadorProtected>
              <Affiliate />
            </AmbassadorProtected>
          }
        ></Route>
        <Route
          path="/affiliate/setting"
          element={
            <AmbassadorProtected>
              <AffiliateSetting />
            </AmbassadorProtected>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
