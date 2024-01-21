"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import { Table, TableCell, TableRow } from "./ui/Table";

interface Tab {
  id: number;
  label: string;
  active: boolean;
}

interface DynamicTableRow {
  id: number;
  [key: string]: React.ReactNode;
}

interface DashboardTableProps<T> {
  tabs: Tab[];
  title: string;
  data: {
    columns: string[];
    rows: T[];
  };
}

const DashboardTable: React.FC<DashboardTableProps<DynamicTableRow>> = ({
  tabs,
  title,
  data: { columns, rows },
}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const toCamelCase = (columnName: string) => {
    const cleanedName = columnName
      .replace(/%/g, "") // Remove percentage sign
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      .replace(/[^a-zA-Z0-9]+/g, ""); // Remove any remaining special characters

    return cleanedName.charAt(0).toLowerCase() + cleanedName.slice(1);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-3 sm:p-6 w-full">
        <div className="bg-white w-full p-6 rounded-lg shadow mb-8">
          <div className="mb-4 border-b border-gray-200 pb-4">
            <div className="text-gray-700 font-semibold text-lg">{title}</div>
          </div>

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
                {rows.map((row, i, arry) => {
                  return (
                    <TableRow key={row.id}>
                      {columns.slice(0, -1).map((column, index) => (
                        <TableCell key={index}>
                          <p>{row[toCamelCase(column)]}</p>
                        </TableCell>
                      ))}

                      <TableCell key="lastColumn">
                        {i === arry.length - 1 && (
                          <div className="flex items-center gap-1">
                            <button className="text-blue-600 hover:text-blue-700">
                              Buy
                            </button>
                            <button className="text-blue-600 hover:text-blue-700 ml-2">
                              Sell
                            </button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
