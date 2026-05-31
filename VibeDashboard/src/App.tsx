import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Ambassadors from "./components/Pages/Ambassadors";
import Login from "./components/Pages/Login";
import Forms from "./components/Pages/Forms";
import Protected from "./components/Protected/Protected";
import CardOrders from "./components/Pages/CardOrders";
import Page404 from "./components/Pages/Page404";
import WalletOrders from "./components/Pages/WalletOrders";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/ambassadors"
          element={
            <Protected>
              <Ambassadors />
            </Protected>
          }
        />
        <Route
          path="/forms"
          element={
            <Protected>
              <Forms />
            </Protected>
          }
        />
        {/* Card Orders */}
        <Route
          path="/orders/cards"
          element={
            <Protected>
              <CardOrders />
            </Protected>
          }
        />
        {/* Wallet Order */}
        <Route
          path="/orders/wallets"
          element={
            <Protected>
              <WalletOrders />
            </Protected>
          }
        />

        {/* 404 */}
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </>
  );
}

export default App;
