import React from "react";
interface ProtectedProps {
    children: React.ReactNode;
}
declare const Protected: ({ children }: ProtectedProps) => import("react/jsx-runtime").JSX.Element;
export default Protected;
