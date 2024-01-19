"use client";

import React, { useState } from "react";
import TableHead from "./Table/TableHead";
import Tabs from "./Tabs";

interface Tab {
  id: number;
  label: string;
  active: boolean;
}

interface TableColumn {
  id: number;
  label: string;
  key: string;
  additionalClasses?: string;
}

interface TableRow {
  id: number;
  [key: string]: React.ReactNode;
}

interface Overview {
  title: string;
  tabs: Tab[];
}

interface FinancialData {
  overview: Overview;
  table: {
    columns: TableColumn[];
    rows: TableRow[];
  };
}

interface FinancialDashboardTableProps {
  data: FinancialData;
}

const FinancialDashboardTable: React.FC<FinancialDashboardTableProps> = ({
  data,
}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = [
    { id: 1, label: "Holdings", data: "Data for Holdings" },
    { id: 2, label: "Activity", data: "Data for Activity" },
    { id: 3, label: "Performance", data: "Data for Performance" },
    { id: 4, label: "Gain & Loss", data: "Data for Gain & Loss" },
  ];

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-3 sm:p-6 w-full">
        <div className="bg-white w-full p-6 rounded-lg shadow mb-8">
          <div className="mb-4 border-b border-gray-200 pb-4">
            <div className="text-gray-700 font-semibold text-lg">
              {data.overview.title}
            </div>
          </div>
          {/* ===== TABS ====== */}
          <Tabs tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

          <div className="relative w-full overflow-auto">
            <table className="min-w-max table-auto w-full ">
              <TableHead columns={data.table.columns} />
              <tbody className="text-gray-700">
                {data.table.rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <p>{row.name}</p>
                    </td>
                    <td>
                      <p>{row.quantity}</p>
                    </td>
                    <td>
                      <p>{row.price}</p>
                    </td>
                    <td>
                      <p>{row.avgCost}</p>
                    </td>
                    <td>
                      <p>{row.mktValue}</p>
                    </td>
                    <td
                      className={`py-3 ${
                        typeof row.gainLoss === "string" &&
                        parseFloat(row.gainLoss.replace(/[^\d.-]/g, "")) < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {row.gainLoss}
                    </td>
                    <td>
                      <p>{row.portfolioPercentage}</p>
                    </td>
                    <td>
                      <div>
                        <button className="text-blue-600 hover:text-blue-700">
                          Buy
                        </button>
                        <button className="text-blue-600 hover:text-blue-700 ml-2">
                          Sell
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialDashboardTable;
