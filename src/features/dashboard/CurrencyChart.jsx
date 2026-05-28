import { useEffect, useState } from "react";
import Filter from "../../ui/Filter";
import { getHistoricalCurrencyRate } from "../../services/apiDashboard";

export default function CurrencyChart({ children }) {
    return (
        <div className="py-4">
            {children}
        </div>
    )
}