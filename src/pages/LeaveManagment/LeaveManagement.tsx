import React, { useEffect, useState } from "react";
import "./leaveManagement.scss";
import { mockLeaveRequests, employee as mockEmployees } from "../../data";

export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hireDate: string;
  status: string;
  departmentName: string;
  baseSalary: number;
}

export interface LeaveRequestDisplay {
  id: string;
  employeeId: number;
  employeeName: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
}

export interface LeaveRequestForm {
  selectedEmployeeId: string;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
}

const LeaveManagement: React.FC = () => {
  const [employees] = useState<Employee[]>(mockEmployees);
  const [displayableLeaveRequests, setDisplayableLeaveRequests] = useState<LeaveRequestDisplay[]>([]);
  const [formState, setFormState] = useState<LeaveRequestForm>({
    selectedEmployeeId: "",
    type: "",
    startDate: "",
    endDate: "",
    reason: "",
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalItems = displayableLeaveRequests.length;
  const currentItems = displayableLeaveRequests.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const mappedData = mockLeaveRequests.map((request) => {
      const employee = mockEmployees.find(emp => emp.employeeId === request.employeeId);
      return {
        ...request,
        id: String(request.id),
        employeeName: employee ? `${employee.firstName} ${employee.lastName}` : "Unknown Employee",
      };
    });
    setDisplayableLeaveRequests(mappedData);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.selectedEmployeeId || !formState.startDate || !formState.endDate || !formState.reason) {
      setFormError("Please fill all fields.");
      return;
    }

    const newRequest: LeaveRequestDisplay = {
      id: (Date.now()).toString(),
      employeeId: parseInt(formState.selectedEmployeeId),
      employeeName: (() => {
        const emp = mockEmployees.find(emp => emp.employeeId === parseInt(formState.selectedEmployeeId));
        return emp ? `${emp.firstName} ${emp.lastName}` : "Unknown";
      })(),
      startDate: formState.startDate,
      endDate: formState.endDate,
      reason: formState.reason,
      status: "Pending",
    };

    setDisplayableLeaveRequests(prev => [newRequest, ...prev]);
    setIsModalOpen(false);
    setFormState({ selectedEmployeeId: "", type: "", startDate: "", endDate: "", reason: "" });
    setFormError(null);
  };

  return (
    <div className="leave-management">
      <h2>Leave Requests</h2>
      <button onClick={() => setIsModalOpen(true)}>+ New Leave Request</button>

      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <select name="selectedEmployeeId" value={formState.selectedEmployeeId} onChange={handleInputChange}>
              <option value="">Select Employee</option>
              {employees.map(emp => (
                <option key={emp.employeeId} value={emp.employeeId}>
                  {emp.firstName} {emp.lastName}
                </option>
              ))}
            </select>
            <input type="date" name="startDate" value={formState.startDate} onChange={handleInputChange} />
            <input type="date" name="endDate" value={formState.endDate} onChange={handleInputChange} />
            <textarea name="reason" placeholder="Reason" value={formState.reason} onChange={handleInputChange} />
            {formError && <p className="error">{formError}</p>}
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Start</th>
            <th>End</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(req => (
            <tr key={req.id}>
              <td>{req.employeeName}</td>
              <td>{req.startDate}</td>
              <td>{req.endDate}</td>
              <td>{req.reason}</td>
              <td>{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={currentPage === idx + 1 ? "active" : ""}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeaveManagement;
