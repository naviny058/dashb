import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";

export default function OrdersTable({ data, columns }) {

  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState("")

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });


  function downloadCSV(rows) {
    const headers = Object.keys(rows[0].original);
    const csv = [
      headers.join(","),
      ...rows.map(row =>
        headers.map(h => `"${row.original[h]}"`).join(",")
      )
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "orders.csv";
    a.click();

    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-lg font-semibold text-slate-800">
          Recent Orders
        </h3>

        <input
          type="text"
          placeholder="search orders..."
          value={globalFilter ?? ""}
          onChange={e => setGlobalFilter(e.target.value)}
        />

        <select
          onChange={e => table.getColumn("status").setFilterValue(e.target.value)}
        >
          <option value="">All status</option>
          <option value="completed">Completed</option>
          <option value="pending">pending</option>
          <option value="failed">Failed</option>
        </select>
        <button
          onClick={() => downloadCSV(table.getRowModel().rows)}
          className="ml-4 px-4 py-2 text-sm rounded-lg bg-slate-900 text-white hover:bg-slate-800"
        >
          Download CSV
        </button>

      </div>

      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left font-medium text-slate-600"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === "asc" && " ▲"}
                  {header.column.getIsSorted() === "desc" && " ▼"}

                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              className="border-b border-slate-100 hover:bg-slate-50"
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-6 py-4 text-slate-700">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
