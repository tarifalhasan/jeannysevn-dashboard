"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import { Table, TableCell, TableRow } from "./ui/Table";

interface Tab {
  id: number;
  label: string;
  active: boolean;
}

interface TableRow {
  id: number;
  [key: string]: React.ReactNode;
}

interface FinancialDashboardTableProps {
  tabs: Tab[];
  title: string;
  rows: Array<{
    id: number;
    name: string;
    quantity: number;
    price: string;
    avg_cost: string;
    mkt_value: string;
    gain_or_lose: string;
    percentage_of_portfolio: string;
  }>;
  columns: string[];
}

const FinancialDashboardTable: React.FC<FinancialDashboardTableProps> = ({
  tabs,
  title,
  columns,
  rows,
}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-3 sm:p-6 w-full">
        <div className="bg-white w-full p-6 rounded-lg shadow mb-8">
          <div className="mb-4 border-b border-gray-200 pb-4">
            <div className="text-gray-700 font-semibold text-lg">{title}</div>
          </div>
          {/* ===== TABS ====== */}
          <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

          <div className="relative w-full overflow-auto">
            <Table>
              <thead>
                <TableRow className="text-left text-gray-600 text-sm bg-gray-200">
                  {columns.map((column, index) => (
                    <TableCell key={index}>
                      <p>{column}</p>
                    </TableCell>
                  ))}
                </TableRow>
              </thead>
              <tbody className="text-gray-700">
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <p>{row.name}</p>
                    </TableCell>
                    <TableCell>
                      <p>{row.quantity}</p>
                    </TableCell>
                    <TableCell>
                      <p>{row.price}</p>
                    </TableCell>
                    <TableCell>
                      <p>{row.avg_cost}</p>
                    </TableCell>
                    <TableCell>
                      <p>{row.mkt_value}</p>
                    </TableCell>
                    <TableCell
                      className={`py-3 ${
                        typeof row.gain_or_lose === "string" &&
                        parseFloat(row.gain_or_lose.replace(/[^\d.-]/g, "")) < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {row.gain_or_lose}
                    </TableCell>
                    <TableCell>
                      <p>{row.percentage_of_portfolio}</p>
                    </TableCell>
                    <TableCell>
                      <div>
                        <button className="text-blue-600 hover:text-blue-700">
                          Buy
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 ml-2">
                          Sell
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialDashboardTable;
