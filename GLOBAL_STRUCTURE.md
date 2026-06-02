# VibeCard - Global Application Structure

## 📁 Complete Setup & Initialization

This document consolidates all global and main entry-point files for the VibeCard application.

---

## 1️⃣ index.html - HTML Entry Point

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="facicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Bootstrap Icon-->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.0/font/bootstrap-icons.min.css"
    />
    <!-- Google Tag -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-THMVC55P");
    </script>
    <title>Vibecard - Digital Business Cards</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-R45SM0H9WD"
    ></script>
    <!-- Google Tag -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-R45SM0H9WD");
    </script>
  </body>
</html>
```

---

## 2️⃣ src/main.tsx - React Entry Point

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

**What happens here:**
- 🔧 Creates React root and mounts it to `#root` div
- 📦 Imports global styles: `index.css`
- 🎨 Includes animation library: `animate.css`
- 🛣️ Wraps app with `BrowserRouter` for routing
- 🌐 Initializes i18n for multi-language support

---

## 3️⃣ src/index.css - Global Base Styles

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}
```

**Purpose:**
- 🎨 Tailwind CSS base configuration
- 🎭 CSS custom properties (variables) for charts
- 🌓 Dark mode theme variables

---

## 4️⃣ src/i18n.ts - Internationalization Setup

```typescript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translations
import enTranslation from "./locales/en/translation.json";
import deTranslation from "./locales/de/translation.json";

const resources = {
  en: { translation: enTranslation },
  de: { translation: deTranslation },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

**Features:**
- 🌍 Multi-language support (EN, DE)
- 🔍 Automatic language detection
- 🔄 Language fallback to English
- 🛡️ XSS protection with escapeValue: false

---

## 5️⃣ src/App.tsx - Router Configuration

```typescript
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
        {/* Public Routes */}
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

        {/* Protected Routes */}
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
        
        {/* Additional Routes */}
        <Route
          path="/order-multiple-products"
          element={<OrderMultipleProducts />}
        ></Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        {/* Footer Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/cancellation" element={<CancellationPolicy />} />
        <Route path="/terms-use" element={<Terms />} />
        <Route
          path="/chatbot-privacy-policy"
          element={<ChatbotPrivacyPolicy />}
        />
        
        {/* Affiliate Routes */}
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
        
        {/* 404 & Fallback */}
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
```

**Route Summary:**
| Path | Component | Protected? |
|------|-----------|-----------|
| `/` | Home | No |
| `/login`, `/register` | Auth | No |
| `/pricing`, `/all-products` | Shop | No |
| `/dashboard`, `/create`, `/setting` | App | Yes |
| `/affiliate` | Affiliate | Ambassador Protected |
| `/card/:id` | View Card | No |
| `*` | 404 | No |

---

## 6️⃣ src/App.css - Global Application Styles

```css
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@600;800&family=Russo+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

/* ============== BODY & BASE ============== */
body {
  background-color: #0d1224;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

option {
  background-color: #0d1224;
}

/* ============== BACKGROUND COLORS ============== */
.nav-bg {
  background-color: transparent;
}

.main-bg {
  background-color: #0d1224 !important;
}

.secondary-bg {
  background-color: #12172a;
}

/* ============== GRADIENT BUTTON ============== */
.btn-bg {
  background-image: linear-gradient(
    to right,
    #24c6dc 0%,
    #514a9d 51%,
    #24c6dc 100%
  );
  padding: 15px 45px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-bg:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

/* ============== FONTS ============== */
h1, h2, h3, h4, h5, h6 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.font-poppins {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.logo-font {
  font-family: "Audiowide", sans-serif;
  font-weight: 400;
  font-style: normal;
}

p, a, li, span, input, label, textarea {
  font-family: "Raleway", sans-serif;
}

/* ============== SCROLLBAR ============== */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background: #001047;
}

/* ============== GRADIENT ANIMATION ============== */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-container {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 130vh;
  top: 0;
  z-index: -1;
}

.gradient-bg {
  position: absolute;
  z-index: -1;
  right: -2em;
  top: -20em;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #efef);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@media (max-width: 576px) {
  .gradient-bg {
    height: 100vh;
    width: 200%;
    transform: rotate(-20deg);
  }
}

@media (min-width: 768px) {
  .gradient-bg {
    height: 130vh;
    width: 200%;
    transform: rotate(-10deg);
  }
}

@media (min-width: 992px) {
  .gradient-bg {
    height: 130vh;
    width: 300%;
    transform: rotate(-10deg);
  }
}

/* ============== GLASS & WATERMARK EFFECTS ============== */
.watermark-effect {
  background: rgba(29, 29, 29, 0.223);
  box-shadow: 0 4px 30px rgba(70, 69, 69, 0);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px !important;
}

.glass-effect {
  background: rgba(254, 254, 255, 0);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

/* ============== OVERLAY ============== */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.63);
}

/* ============== LOADER/SPINNER ============== */
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bar {
  display: inline-block;
  width: 3px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 20px;
  margin: 0 5px;
  animation-delay: 0.25s;
}

.bar:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes scale-up4 {
  20% {
    background-color: #fff;
    transform: scaleY(1.5);
  }
  40% {
    transform: scaleY(1);
  }
}

/* ============== BORDER GRADIENTS ============== */
.border-gradient {
  background: linear-gradient(#18181b, #09090b) padding-box,
    linear-gradient(to right, darkblue, darkorchid) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
}

.border-gradient-2 {
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-width: 3px;
  border-image: linear-gradient(
      to right,
      #12172a,
      #12172a,
      darkblue,
      rgb(157, 8, 231),
      #12172a,
      #12172a
    )
    10;
}

/* ============== SCROLLBAR (Small) ============== */
.scroll-thumb {
  animation: animation 3s infinite;
}

@keyframes animation {
  0% { margin-top: 0; opacity: 0; }
  5% { margin-top: 10px; opacity: 1; }
  25% { opacity: 1; }
  50% { margin-top: 24px; opacity: 0; }
  75% { margin-top: 10px; opacity: 1; }
  100% { margin-top: 0; opacity: 0; }
}

.sm-scroll {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.sm-scrollbar::-webkit-scrollbar {
  width: 20px;
}

.sm-scrollbar::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 5px;
}

.sm-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

/* ============== TOGGLE SWITCH ============== */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
  margin-top: 0 !important;
}

.toggle-switch .toggle-input {
  display: none;
}

.toggle-switch .toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 18px;
  background-color: #2196f3;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-switch .toggle-label::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 14px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  background-color: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.toggle-switch .toggle-input:checked + .toggle-label {
  background-color: #4caf50;
}

.toggle-switch .toggle-input:checked + .toggle-label::before {
  transform: translateX(16px);
}

/* Dark theme */
.toggle-switch.dark .toggle-label {
  background-color: #4b4b4b;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label {
  background-color: #717171;
}

.toggle-switch.dark .toggle-input:checked + .toggle-label::before {
  transform: translateX(16px);
}
```

---

## 📊 Application Flow

```
index.html
    ↓
main.tsx (React entry point)
    ↓
[i18n initialization + BrowserRouter]
    ↓
App.tsx (Route definitions)
    ↓
[Protected/Public Routes]
    ↓
Components (Pages, Layout, etc.)
```

---

## 🔗 Dependencies Initialization Order

1. **index.html** - DOM root element
2. **main.tsx** - React mount + Router setup
3. **i18n.ts** - Language configuration
4. **App.tsx** - Route definitions
5. **App.css** - Global styles
6. **index.css** - Tailwind + base styles

---

## 🚀 Key Features

✅ **Multi-language support** (EN, DE)
✅ **Protected routes** with authentication
✅ **Affiliate system** with separate protection
✅ **Gradient animations** with responsive design
✅ **Glass morphism effects**
✅ **Dark theme** optimized
✅ **Google Analytics** integration
✅ **Bootstrap Icons** support
✅ **Tailwind CSS** framework
✅ **Custom scrollbar** styling

---

Generated on: 2026-06-02
Commit: 37fe369bc632cfd8fce5b82850e3aab32dbadd89
