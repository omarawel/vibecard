"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const date_fns_1 = require("date-fns");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
const button_1 = require("@/components/ui/button");
const calendar_1 = require("@/components/ui/calendar");
const popover_1 = require("@/components/ui/popover");
function DatePicker({ className, date, setDate }) {
    const maxDate = new Date();
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2", className), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { id: "date", variant: "outline", className: (0, utils_1.cn)("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }), (date === null || date === void 0 ? void 0 : date.from) ? (date.to ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, date_fns_1.format)(date.from, "yyyy-MM-dd"), " -", " ", (0, date_fns_1.format)(date.to, "yyyy-MM-dd")] })) : ((0, date_fns_1.format)(date.from, "yyyy-MM-dd"))) : ((0, jsx_runtime_1.jsx)("span", { children: "Pick a date" }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: date === null || date === void 0 ? void 0 : date.from, selected: date, onSelect: (newDate) => {
                            if ((newDate === null || newDate === void 0 ? void 0 : newDate.from) &&
                                (0, date_fns_1.isAfter)(newDate.from, maxDate) &&
                                (newDate === null || newDate === void 0 ? void 0 : newDate.to) &&
                                (0, date_fns_1.isAfter)(newDate.to, maxDate)) {
                                return;
                            }
                            setDate(newDate);
                        }, numberOfMonths: 1, disabled: {
                            after: maxDate, // Disable all dates after today
                        }, fromMonth: new Date(1970, 0), toMonth: maxDate }) })] }) }));
}
exports.default = DatePicker;
