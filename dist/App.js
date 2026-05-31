"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const Home_1 = __importDefault(require("./components/Pages/Home"));
const Ambassadors_1 = __importDefault(require("./components/Pages/Ambassadors"));
const Login_1 = __importDefault(require("./components/Pages/Login"));
const Forms_1 = __importDefault(require("./components/Pages/Forms"));
const Protected_1 = __importDefault(require("./components/Protected/Protected"));
const CardOrders_1 = __importDefault(require("./components/Pages/CardOrders"));
const Page404_1 = __importDefault(require("./components/Pages/Page404"));
const WalletOrders_1 = __importDefault(require("./components/Pages/WalletOrders"));
function App() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Protected_1.default, { children: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/ambassadors", element: (0, jsx_runtime_1.jsx)(Protected_1.default, { children: (0, jsx_runtime_1.jsx)(Ambassadors_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/forms", element: (0, jsx_runtime_1.jsx)(Protected_1.default, { children: (0, jsx_runtime_1.jsx)(Forms_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/orders/cards", element: (0, jsx_runtime_1.jsx)(Protected_1.default, { children: (0, jsx_runtime_1.jsx)(CardOrders_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/orders/wallets", element: (0, jsx_runtime_1.jsx)(Protected_1.default, { children: (0, jsx_runtime_1.jsx)(WalletOrders_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/404", element: (0, jsx_runtime_1.jsx)(Page404_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/404" }) })] }) }));
}
exports.default = App;
