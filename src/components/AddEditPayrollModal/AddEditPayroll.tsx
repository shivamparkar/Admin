import { useState, useEffect, FormEvent } from "react";
import useFetch from "../../hooks/useFetch";
import './addEditPayrollModal.scss';

interface Payroll {
  payrollId?: number;
  employeeId: string;
  amount: number;
  payDate: string;
  status: "Pending" | "Paid";
}

interface AddEditPayrollModalProps {
  open: boolean;
  onClose: () => void;
  payroll?: Payroll | null;
  onSave?: (data: Payroll) => void;
}


const AddEditPayrollModal: React.FC<AddEditPayrollModalProps> = ({
  open,
  onClose,
  payroll,
}) => {
  const [formData, setFormData] = useState<Payroll>({
    employeeId: "",
    amount: 0,
    payDate: "",
    status: "Pending",
  });

  const { loading } = useFetch(`/api/payrolls${payroll ? `/${payroll.payrollId}` : ""}`);

  useEffect(() => {
    if (payroll) {
      // Pre-fill the form if editing an existing payroll
      setFormData({
        employeeId: payroll.employeeId,
        amount: payroll.amount,
        payDate: payroll.payDate,
        status: payroll.status,
      });
    }
  }, [payroll]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (payroll) {
    //   updateData(formData); // Update existing payroll
    // } else {
    //   postData(formData); // Create new payroll
    // }
    onClose();
  };

  return (
    open && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>{payroll ? "Edit Payroll" : "Add Payroll"}</h2>
          <form onSubmit={handleSubmit} className="form">
            <label>Employee ID</label>
            <input
              type="text"
              value={formData.employeeId}
              onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
              required
            />

            <label>Amount</label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
              required
            />

            <label>Pay Date</label>
            <input
              type="date"
              value={formData.payDate}
              onChange={(e) => setFormData({ ...formData, payDate: e.target.value })}
              required
            />

            <label>Status</label>
            <select
              value={formData.status}
              onChange={(e) =>   setFormData({ ...formData, status: e.target.value as "Pending" | "Paid" })}
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>

            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
          </form>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default AddEditPayrollModal;
