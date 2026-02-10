export const orderColumns = [
  {
    header: "Order ID",
    accessorKey: "id"
  },
  {
    header: "Customer",
    accessorKey: "customer"
  },
  {
    header: "Email",
    accessorKey: "email"
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: info => `₹${info.getValue().toLocaleString()}`
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: info => {
      const status = info.getValue();

      const styles = {
        completed: "bg-emerald-100 text-emerald-700",
        pending: "bg-amber-100 text-amber-700",
        failed: "bg-rose-100 text-rose-700"
      };

      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
        >
          {status}
        </span>
      );
    }
  },
  {
    header: "Date",
    accessorKey: "date"
  }
];
