import { useEffect, useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetch from "../../hooks/useFetch";
import { employee } from "../../data"; // Local fallback data

const columns: GridColDef[] = [
  { field: "employeeId", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Phone", width: 150 },
  {
    field: "hireDate",
    headerName: "Hire Date",
    width: 180,
    valueFormatter: (params: GridCellParams) => {
      const hireDate = params?.row?.hireDate;
      return hireDate ? moment(hireDate).format("DD/MM/YYYY hh:mm A") : "Invalid Date";
    },
  },
  { field: "status", headerName: "Status", width: 120 },
  { field: "departmentName", headerName: "Department", width: 180 },
  {
    field: "basesalary",
    headerName: "Base Salary",
    width: 100,
    valueGetter: (params: GridCellParams) => params?.row?.baseSalary,
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  const { data, loading, error, getData } = useFetch("https://localhost:7118/api/Employee");

  useEffect(() => {
    getData();
  }, [getData]);

  const finalData = (Array.isArray(data) && data.length > 0) 
    ? data 
    : employee;

  return (
    <div className="products">
      <div className="info">
        <h1>Employees</h1>
        <button onClick={() => setOpen(true)}>Add New Employee</button>
      </div>

      {loading && (
        <div>
          <Skeleton height={40} count={5} style={{ marginBottom: "10px" }} />
        </div>
      )}

      {error && console.error("Error loading employees:", error.message)}

      {!loading && (
        <DataTable
          slug="employees"
          columns={columns}
          rows={finalData}
          getRowId={(row) => row.employeeId}
        />
      )}

      {open && <Add slug="employee" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
