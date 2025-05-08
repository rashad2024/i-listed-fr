// components/PropertyTable.tsx
import React, { useMemo, useState } from "react";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

type Property = {
  id: string;
  name: string;
  size: string;
  category: string;
  subcategory: string;
  transactionType: string;
  address: string;
  price: number;
};

const data: Property[] = [
  {
    id: "1",
    name: "Properties Photo & Name",
    size: "1400ft",
    category: "Residences",
    subcategory: "Villa",
    transactionType: "Rent",
    address: "Bali",
    price: 60450,
  },
  // add more entries as needed
];

const TableWithPagination: React.FC = () => {
  const [rowSelection, setRowSelection] = useState({});

  const columns = useMemo<MRT_ColumnDef<Property>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Properties Photo & Name",
      },
      {
        accessorKey: "size",
        header: "Size",
      },
      {
        accessorKey: "category",
        header: "Category",
      },
      {
        accessorKey: "subcategory",
        header: "Subcategory",
      },
      {
        accessorKey: "transactionType",
        header: "Transaction Type",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "price",
        header: "Price",
        Cell: ({ cell }) => `$${cell.getValue<number>().toLocaleString()}`,
      },
      {
        id: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <>
            <IconButton onClick={() => alert(`Edit ${row.original.name}`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => alert(`Delete ${row.original.name}`)}>
              <DeleteIcon />
            </IconButton>
          </>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableSorting: false,
    enableTopToolbar: false,
    enableCellActions: false,
    enableColumnVirtualization: false,
    enableRowSelection: true,
    displayColumnDefOptions: {
      "mrt-row-select": {
        header: "",
      },
    },
    muiTableContainerProps: {
      sx: {
        width: "100%",
        maxWidth: "100%",
      },
    },
    enableSelectAll: false,
    // state: {
    //   rowSelection,
    // }
  });

  return <MaterialReactTable table={table} />;
};

export default TableWithPagination;
