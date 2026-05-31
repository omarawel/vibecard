import * as React from "react";
import { DateRange } from "react-day-picker";
interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
    date: DateRange | undefined;
    setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}
declare function DatePicker({ className, date, setDate }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export default DatePicker;
