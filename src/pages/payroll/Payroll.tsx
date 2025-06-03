import { useState } from "react";
import { pay } from "../../data.ts";
import DataTable from "../../components/dataTable/DataTable";
import AddEditPayrollModal from "../../components/AddEditPayrollModal/AddEditPayroll";
import './payroll.scss';
import { PayrollType } from "../../../Type.ts";

const Payroll = () => {
  const [payrolls, setPayrolls] = useState(pay);
  const [open, setOpen] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  const handleAdd = () => {
    setSelectedPayroll(null);
    setOpen(true);
  };

  const handleEdit = (payroll: PayrollType) => {
    setSelectedPayroll(payroll);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedPayroll(null);
  };

  const handleSave = (updatedPayroll) => {
    setPayrolls((prev) => {
      const existingIndex = prev.findIndex(p => p.payrollId === updatedPayroll.payrollId);
      if (existingIndex !== -1) {
        // Update existing
        const updatedList = [...prev];
        updatedList[existingIndex] = updatedPayroll;
        return updatedList;
      } else {
        // Add new
        return [...prev, { ...updatedPayroll, payrollId: Date.now() }];
      }
    });

    setOpen(false);
    setSelectedPayroll(null);
  };

  const handleSubmitRow = (payroll: PayrollType) => {
    alert("Submitted payroll" , )
  };

  return (
    <div>
      <h1>Payrolls</h1>
      <button className="add-edit-btn" onClick={handleAdd}>Add Payroll</button>

      <DataTable
        rows={payrolls}
        columns={[
          { field: "payrollId", headerName: "Payroll ID", width: 150 },
          { field: "employeeName", headerName: "Employee Name", width: 200 },
          { field: "amount", headerName: "Amount", width: 150, editable: true },
          { field: "payDate", headerName: "Pay Date", width: 150, editable: true },
          {
            field: "status",
            headerName: "Status",
            width: 150,
            editable: true,
            renderCell: (params) => (
              <select
                className="status-dropdown"
                value={params.row.status}
                onChange={(e) => {
                  const newStatus = e.target.value;
                  setPayrolls((prev) =>
                    prev.map(p =>
                      p.payrollId === params.row.payrollId
                        ? { ...p, status: newStatus }
                        : p
                    )
                  );
                }}
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
              </select>
            ),
          },
          {
            field: "submit",
            headerName: "Submit",
            width: 150,
            renderCell: (params) => (
              <button className="submit-btn" onClick={() => handleSubmitRow(params.row)}>
                Submit
              </button>
            ),
          },
        ]}
        slug="payrolls"
        getRowId={(row) => row.payrollId}
        onEdit={handleEdit}
      />

      {open && (
        <AddEditPayrollModal
          open={open}
          onClose={handleCloseModal}
          payroll={selectedPayroll}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Payroll;
