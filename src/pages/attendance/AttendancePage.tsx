import React, { useState, useEffect } from "react";
import axios from "axios"; 
import useFetch from "../../hooks/useFetch"; 
import "./attendancePage.scss";

export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  hireDate?: string;
  status?: string;
  departmentName: string;
  baseSalary?: number;
}

export interface Attendance {
  attendanceId: number;
  employeeId: number;
  date: string;
  checkIn: string;
  checkOut: string;
}

export interface AttendanceForm {
  date: string;
  checkIn: string;
  checkOut: string;
}


const EMPLOYEES_API_URL = "https://localhost:7118/api/Employee";
const ATTENDANCE_API_BASE_URL = "https://localhost:7118/api/Attendance";
const ATTENDANCE_CUD_BASE_URL = "https://localhost:7118/api/Attendance"; // For Create, Update, Delete

const AttendancePage: React.FC = () => {
  // Fetch All Employees
  const {
    data: fetchedEmployees,
    loading: employeesLoading,
    error: employeesError,
  } = useFetch<Employee[]>(EMPLOYEES_API_URL);

  const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
  const [attendanceRecords, setAttendanceRecords] = useState<Attendance[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  const [attendanceApiUrl, setAttendanceApiUrl] = useState<string | null>(null);

  const {
    data: fetchedAttendanceRecords,
    loading: attendanceLoading,
    error: attendanceError,
    getData: getAttendanceData,
  } = useFetch<Attendance[]>(attendanceApiUrl ?? "");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formState, setFormState] = useState<AttendanceForm>({
    date: "",
    checkIn: "",
    checkOut: "",
  });
  const [editingAttendance, setEditingAttendance] = useState<Attendance | null>(
    null
  ); 

  useEffect(() => {
    if (fetchedEmployees) {
      setAllEmployees(fetchedEmployees);
    }
  }, [fetchedEmployees]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredEmployees([]);
      return;
    }
    if (allEmployees.length > 0) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const results = allEmployees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(lowercasedSearchTerm) ||
          employee.lastName.toLowerCase().includes(lowercasedSearchTerm) ||
          (employee.departmentName &&
            employee.departmentName
              .toLowerCase()
              .includes(lowercasedSearchTerm))
      );
      setFilteredEmployees(results);
    }
  }, [searchTerm, allEmployees]);

 useEffect(() => {
  if (selectedEmployee) {
    const url = `${ATTENDANCE_API_BASE_URL}/${selectedEmployee.employeeId}`;
    setAttendanceApiUrl(url); // optional
    fetchAttendanceRecords(url); // fetch directly
  }
}, [selectedEmployee]);

const fetchAttendanceRecords = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setAttendanceRecords(data);
  } catch (error) {
    console.error("Failed to fetch attendance:", error);
    setAttendanceRecords([]);
  }
};


  useEffect(() => {
    if (fetchedAttendanceRecords) {
      setAttendanceRecords(fetchedAttendanceRecords);
    } 
  }, [fetchedAttendanceRecords, attendanceApiUrl]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = (attendanceToEdit?: Attendance) => {
    if (attendanceToEdit) {
      setEditingAttendance(attendanceToEdit);
      setFormState({
        date: attendanceToEdit.date,
        checkIn: attendanceToEdit.checkIn,
        checkOut: attendanceToEdit.checkOut,
      });
    } else {
      setEditingAttendance(null);
      setFormState({ date: "", checkIn: "", checkOut: "" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAttendance(null);
    setFormState({ date: "", checkIn: "", checkOut: "" });
  };

  const handleSubmitModal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmployee && !editingAttendance) {
      console.error("No employee selected for new attendance record.");
      return;
    }

    try {
      if (editingAttendance) {
        const payload = {
          ...editingAttendance,
          ...formState,
        };
        await axios.put(
          `${ATTENDANCE_CUD_BASE_URL}/${editingAttendance.attendanceId}`,
          payload
        );
      } else if (selectedEmployee) {
        const payload = {
          ...formState,
          employeeId: selectedEmployee.employeeId,
        };
        await axios.post(ATTENDANCE_CUD_BASE_URL, payload);
      }
      handleCloseModal();
      if (getAttendanceData) getAttendanceData();
    } catch (err: any) {
      console.error("Failed to save attendance record:", err);
   
    } finally {
    }
  };

  const handleDeleteInTable = async (attendanceId: number) => {
    if (
      window.confirm("Are you sure you want to delete this attendance record?")
    ) {
      try {
        await axios.delete(`${ATTENDANCE_CUD_BASE_URL}/${attendanceId}`);
        if (getAttendanceData) getAttendanceData();
      } catch (err: any) {
        console.error("Failed to delete attendance record:", err);
      }
    }
  };

  return (
    <div className="attendance-page">
      <header className="app-header">
        <div className="app-header-title-section">
          <h2 className="app-header-title">Attendance Tracker</h2>
        </div>
      </header>

      <main className="content-area">
        <div className="content-header-bar">
          <div className="content-title-section">
            <p className="content-main-title">Attendance Records</p>
          </div>
          {selectedEmployee && ( 
            <button
              onClick={() => handleOpenModal()}
              className="create-attendance-button"
              disabled={!selectedEmployee}
            >
              Create New Attendance
            </button>
          )}
        </div>

        {/* Employee Search Area */}
        <div className="employee-search-area">
          <input
            type="text"
            placeholder="Search for employee by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="employee-search-input"
            disabled={employeesLoading} 
          />
          {employeesLoading && (
            <p className="search-loading-message">Loading employees...</p>
          )}
          {employeesError && (
            <p className="search-error-message">
              Error loading employees: {employeesError.message}
            </p>
          )}
          {filteredEmployees.length > 0 && (
            <ul className="employee-search-results">
              {filteredEmployees.map((employee) => (
                <li
                  key={employee.employeeId}
                  onClick={() => {
                    setSelectedEmployee(employee);
                    setSearchTerm("");
                    setFilteredEmployees([]);
                  }}
                  className="employee-search-result-item"
                >
                  {`${employee.firstName} ${employee.lastName} (${employee.departmentName})`}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="attendance-table-container">
          {!selectedEmployee && !employeesLoading && (
            <p className="table-message">
              Please search and select an employee to view their attendance
              records.
            </p>
          )}

          {selectedEmployee && (
            <>
              <h3>
                Attendance for: {selectedEmployee.firstName}{" "}
                {selectedEmployee.lastName}
              </h3>
              {attendanceLoading && (
                <p className="table-message">Loading attendance records...</p>
              )}
              {attendanceError && (
                <p className="table-message error">
                  Error loading attendance: {attendanceError.message}
                </p>
              )}
              {!attendanceLoading &&
                !attendanceError &&
                attendanceRecords.length === 0 && (
                  <p className="table-message">
                    No attendance records found for this employee.
                  </p>
                )}
              {!attendanceLoading &&
                !attendanceError &&
                attendanceRecords.length > 0 && (
                  <table className="attendance-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Check In Time</th>
                        <th>Check Out Time</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceRecords.map((record) => (
                        <tr key={record.attendanceId}>
                          <td>{record.date}</td>
                          <td>{record.checkIn}</td>
                          <td>{record.checkOut}</td>
                          <td className="actions-cell">
                            <button
                              onClick={() => handleOpenModal(record)}
                              className="action-button edit"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteInTable(record.attendanceId)
                              }
                              className="action-button delete"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
            </>
          )}
        </div>

    
        {isModalOpen && (
          <div className="modal-backdrop">
            <div className="modal-content">
              <h3>
                {editingAttendance
                  ? "Edit Attendance Record"
                  : "Create New Attendance Record"}
              </h3>
              <form onSubmit={handleSubmitModal}>
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formState.date}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkIn">Check-In Time:</label>
                  <input
                    type="time"
                    id="checkIn"
                    name="checkIn"
                    value={formState.checkIn}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkOutTime">Check-Out Time:</label>
                  <input
                    type="time"
                    id="checkOut"
                    name="checkOut"
                    value={formState.checkOut}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="modal-actions">
                  <button
                    type="submit"
                    className="button-primary"
                    disabled={attendanceLoading}
                  >
                    {" "}
                    {attendanceLoading ? "Saving..." : "Save Record"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="button-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AttendancePage;
