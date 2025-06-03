export interface PayrollType {
  payrollId: number;
  employeeName: string;
  amount: number;
  payDate: string;
  status: "Pending" | "Paid";
}


export interface LeaveRequestFromAPI {
  id: string;
  employeeId: number;
  startDate: string;
  endDate: string;
  reason: string;
  type: "sick" | "personal" | "marriage";
  status: "Pending" | "Approved" | "Rejected";
}
