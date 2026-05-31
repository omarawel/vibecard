"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const Email_1 = __importDefault(require("../Modal/Email"));
const AllOrders = ({ tap }) => {
    const [orders, setOrders] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [pagination, setPagination] = (0, react_1.useState)();
    const [page, setPage] = (0, react_1.useState)(1);
    const [orderId, setOrderId] = (0, react_1.useState)("");
    // Getting Card ORders
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/orders?status=${tap}&order_type=product&page=${page}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            const parsedOrders = response.data.orders.map((order) => {
                try {
                    return Object.assign(Object.assign({}, order), { front_style: JSON.parse(order.front_style), back_style: JSON.parse(order.back_style), order_metadata: order.order_metadata });
                }
                catch (e) {
                    console.error("Error parsing order data", e);
                    return Object.assign(Object.assign({}, order), { front_style: {}, back_style: {}, order_metadata: {} });
                }
            });
            const pagination = {
                limit: response.data.limit,
                total_pages: response.data.total_pages,
                page: response.data.page,
                total: response.data.total,
            };
            setPagination(pagination);
            // const card = parsedOrders.filter((c) => c.payment_status !== "pending");
            setOrders(parsedOrders);
            setLoading(false);
        })
            .catch((error) => {
            console.log(error);
        });
    }, [page, tap]);
    // Get Date
    const getDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    // // Handle Download
    const handleDirectDownload = (url, fileName = "image.jpg") => {
        try {
            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            link.target = "_blank";
            link.click();
        }
        catch (error) {
            console.error("Error creating download link:", error);
        }
    };
    // Handle Complete
    const handleComplete = (id) => {
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/products/complete-product-order/${id}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    // Handle Cancel
    const handleCancel = (id) => {
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/dashboard/cancel-order?order_id=${id}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), orderId !== "" && ((0, jsx_runtime_1.jsx)(Email_1.default, { id: orderId, onApprove: () => setOrderId(""), type: "product" })), (0, jsx_runtime_1.jsx)("div", { className: "px-2 mt-5", children: orders.length > 0 ? (orders.map((order) => ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-5 secondary-bg mb-5 rounded py-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-span-2", children: (0, jsx_runtime_1.jsx)("img", { src: order.card_img, alt: "design", className: "rounded" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-3 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-10 lg:px-0 px-5 lg:mt-0 mt-5", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:font-bold lg:text-xl text-white mb-5 font-poppins", children: "Card Information" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 lg:gap-x-0 gap-x-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "col-span-2 mb-5", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-white font-poppins text-sm", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-poppins text-gray-400", children: "Order Date :" }), " ", getDate(order.created_at)] }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins text-gray-400 text-sm", children: ["Quantity :", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-xl text-white font-poppins", children: order.quantity })] }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins text-gray-400 text-sm", children: ["Vibecard Logo :", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-lg text-white font-poppins", children: order.vibecardLogo ? "True" : "False" })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-xs mb-2 font-poppins", children: "Front Image" }), (0, jsx_runtime_1.jsx)("img", { src: order.front_image, alt: "", className: "w-28 rounded" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: "bi-download lg:text-3xl text-2xl lg:pt-10 pt-8 text-white border-none", onClick: () => handleDirectDownload(order.front_image) }) }), order.back_image !==
                                                        "https://api.vibecard.de/uploads/None" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "mt-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-xs mb-2 font-poppins", children: "Back Image" }), (0, jsx_runtime_1.jsx)("img", { src: order.back_image, alt: "", className: "w-28 h-20 rounded object-cover" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: "bi-download lg:text-3xl text-2xl lg:pt-10 pt-8 text-white mt-5 border-none", onClick: () => handleDirectDownload(order.front_image) }) })] }))] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-white", children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:font-bold lg:text-xl mt-5 lg:mt-0 md:mt-5 text-white mb-5 font-poppins", children: "Delivery Information" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "First Name" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.fname }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "Last Name" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.lname }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "Email" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.email }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "Location" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.location }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "Phone" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.phone }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "Street" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.street }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "Street No" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.street_no }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "Address" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.address }), (0, jsx_runtime_1.jsx)("p", { className: "mb-2 col-span-2 font-poppins text-gray-400", children: "PLZ" }), (0, jsx_runtime_1.jsx)("p", { className: "col-span-3 font-bold font-poppins text-sm", children: order.order_metadata.plz })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [order.status === "pending" && ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleComplete(order.order_id), className: "bg-green-500 mb-2 font-poppins lg:w-[90%] w-full rounded h-12 text-white shadow shadow-zinc-950", children: "Completed" })), order.status === "pending" && ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleCancel(order.order_id), className: "bg-red-500 mb-2 font-poppins lg:w-[90%] w-full rounded h-12 text-white shadow shadow-zinc-950", children: "Cancel" })), (0, jsx_runtime_1.jsx)("button", { onClick: () => setOrderId(order.order_id), className: "bg-blue-500 font-poppins lg:w-[90%] w-full rounded h-12 text-white shadow shadow-zinc-950", children: "Send Email" })] })] })] })] }) }, order.order_id)))) : ((0, jsx_runtime_1.jsx)("p", { className: "w-full bg-white text-center py-3 text-sm font-poppins", children: "List of NFC card orders will be here!" })) }), pagination && ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-end mt-2", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-2", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setPage(page - 1), disabled: pagination.total <= pagination.limit ? true : false, className: `${page === 1
                                ? "bg-gray-400 cursor-not-allowed"
                                : "btn-bg shadow p-1"} w-20 font-poppins rounded text-sm h-7`, children: "Prev" }), (0, jsx_runtime_1.jsx)("p", { className: "bg-white w-10 font-poppins rounded text-sm h-7 text-center pt-[6px]", children: pagination.page }), (0, jsx_runtime_1.jsx)("button", { onClick: () => pagination.page < pagination.total_pages && setPage(page + 1), disabled: pagination.page >= pagination.total_pages ? true : false, className: `${pagination.page >= pagination.total_pages
                                ? "bg-gray-400 cursor-not-allowed"
                                : "btn-bg shadow p-1"} w-20 font-poppins rounded text-sm h-7`, children: "Next" })] }) }))] }));
};
exports.default = AllOrders;
