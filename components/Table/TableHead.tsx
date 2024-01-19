import { FC } from "react";

type column = {
  id: number | string;
  label: string;
};

interface TableHead {
  columns: column[];
}

const TableHead: FC<TableHead> = ({ columns }) => {
  return (
    <thead>
      <tr className="text-left text-gray-600 text-sm bg-gray-200">
        {columns.map((column) => (
          <th key={column.id} className="pb-4 pt-2">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
