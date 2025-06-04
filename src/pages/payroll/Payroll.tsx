import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./payroll.scss";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { pay } from "../../data"; 

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
  getRowId?: (row: any) => any;
  onEdit?: (row: any) => void;
};

const DataTable = (props: Props) => {


  const payrollColumns: GridColDef[] = [
 
  { field: "payrollId", headerName: "Payroll ID", width: 100 },
  { field: "employeeName", headerName: "Employee Name", width: 200 },
  { field: "amount", headerName: "Amount", width: 150 },
  { field: "payDate", headerName: "Pay Date", width: 150 },
  { field: "status", headerName: "Status", width: 120 },
];


  const mutation = useMutation({
    mutationFn: (id: number) =>
      fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
        method: "delete",
      }),
    onSuccess: () => {
      // Handle success, maybe refetch data
    },
  });

  const handleDelete = (id: number) => {
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      const rowId = props.getRowId ? props.getRowId(params.row) : params.row.payrollId;
      return (
        <div className="action">
          <Link to={`/${props.slug}/${rowId}`}>
            <img src="/view.svg" alt="view" />
          </Link>
          {props.onEdit && (
            <button
              className="edit-btn"
              onClick={() => props.onEdit!(params.row)}
            >
              Edit
            </button>
          )}
          <div className="delete" onClick={() => handleDelete(rowId)}>
            <img src="/delete.svg" alt="delete" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
       style={{ height: 600, width: '100%' }}
        className="dataGrid"
        rows={pay}
        columns={[...payrollColumns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },  
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
       
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
