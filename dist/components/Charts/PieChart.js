"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const recharts_1 = require("recharts");
const card_1 = require("@/components/ui/card");
const chart_1 = require("@/components/ui/chart");
function PieCharts({ free, pro, proPlus }) {
    const chartData = [
        {
            actors: "free",
            users: free,
            fill: "var(--color-free)",
        },
        {
            actors: "pro",
            users: pro,
            fill: "var(--color-pro)",
        },
        {
            actors: "proPlus",
            users: proPlus,
            fill: "var(--color-proPlus)",
        },
    ];
    const chartConfig = {
        visitors: {
            label: "Users",
        },
        free: {
            label: "Free",
            color: "hsl(var(--chart-1))",
        },
        pro: {
            label: "Pro",
            color: "hsl(var(--chart-2))",
        },
        proPlus: {
            label: "Pro +",
            color: "hsl(var(--chart-3))",
        },
    };
    return ((0, jsx_runtime_1.jsxs)(card_1.Card, { className: "flex flex-col bg-white border-none shadow shadow-zinc-900 py-5", children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { className: "items-center pb-0", children: (0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Users" }) }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "flex-1 pb-0", children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "mx-auto aspect-square max-h-[250px]", children: (0, jsx_runtime_1.jsxs)(recharts_1.PieChart, { children: [(0, jsx_runtime_1.jsx)(chart_1.ChartTooltip, { cursor: false, content: (0, jsx_runtime_1.jsx)(chart_1.ChartTooltipContent, { hideLabel: true }) }), (0, jsx_runtime_1.jsx)(recharts_1.Pie, { data: chartData, dataKey: "users", nameKey: "actors", innerRadius: 60, strokeWidth: 5, children: (0, jsx_runtime_1.jsx)(recharts_1.Label, { content: ({ viewBox }) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return ((0, jsx_runtime_1.jsxs)("text", { x: viewBox.cx, y: viewBox.cy, textAnchor: "middle", dominantBaseline: "middle", children: [(0, jsx_runtime_1.jsx)("tspan", { x: viewBox.cx, y: viewBox.cy, className: "fill-foreground text-2xl font-bold", children: free + pro + proPlus }), (0, jsx_runtime_1.jsx)("tspan", { x: viewBox.cx, y: viewBox.cy, className: "fill-foreground" }), (0, jsx_runtime_1.jsx)("tspan", { x: viewBox.cx, y: (viewBox.cy || 0) + 24, className: "fill-muted-foreground text-sm tracking-tight", children: "Users" })] }));
                                        }
                                    } }) })] }) }) })] }));
}
exports.default = PieCharts;
