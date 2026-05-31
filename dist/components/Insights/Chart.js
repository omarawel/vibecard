"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const recharts_1 = require("recharts");
const CustomTick_1 = __importDefault(require("./CustomTick"));
const card_1 = require("@/components/ui/card");
const chart_1 = require("@/components/ui/chart");
const react_i18next_1 = require("react-i18next");
function Chart({ cardChartData, contact, social, view }) {
    const { t } = (0, react_i18next_1.useTranslation)();
    const chartData = [{ view, contact, social }];
    const chartConfig = {
        view: {
            label: "Card View",
            color: "hsl(var(--chart-1))",
        },
        contact: {
            label: "Contact Tap",
            color: "hsl(var(--chart-2))",
        },
        social: {
            label: "Social Media",
            color: "hsl(var(--chart-3))",
        },
    };
    return ((0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: t("track") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-10 pt-3", children: [(0, jsx_runtime_1.jsxs)(card_1.CardDescription, { className: "flex", children: [(0, jsx_runtime_1.jsx)("span", { className: "bg-[#dc2626] rounded h-5 w-5" }), (0, jsx_runtime_1.jsx)("span", { className: "ms-3", children: t("cardView") })] }), (0, jsx_runtime_1.jsxs)(card_1.CardDescription, { className: "flex", children: [(0, jsx_runtime_1.jsx)("span", { className: "bg-[#f59e0b] rounded h-5 w-5" }), (0, jsx_runtime_1.jsx)("span", { className: "ms-3", children: t("contactDown") })] }), (0, jsx_runtime_1.jsxs)(card_1.CardDescription, { className: "flex", children: [(0, jsx_runtime_1.jsx)("span", { className: "bg-[#059669] h-5 w-5" }), (0, jsx_runtime_1.jsx)("span", { className: "ms-3", children: t("socialTap") })] })] })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, children: (0, jsx_runtime_1.jsxs)(recharts_1.BarChart, { accessibilityLayer: true, data: chartData, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { vertical: false }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: `${cardChartData}`, tickLine: false, tickMargin: 10, axisLine: false, 
                                // tickFormatter={(value) => value.slice(0, 3)}
                                tick: (0, jsx_runtime_1.jsx)(CustomTick_1.default, {}) }), (0, jsx_runtime_1.jsx)(chart_1.ChartTooltip, { cursor: false, content: (0, jsx_runtime_1.jsx)(chart_1.ChartTooltipContent, { indicator: "dashed" }) }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "view", fill: "#dc2626", radius: 4 }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "contact", fill: "#f59e0b", radius: 4 }), (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "social", fill: "#059669", radius: 4 })] }) }) })] }));
}
exports.default = Chart;
