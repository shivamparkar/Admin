import {LeaveRequestFromAPI, PayrollType} from '../Type.ts';
export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/",
        icon: "dashboard.png",
      },
      {
        id: 2,
        title: "Profile",
        url: "/profile", // HR sees their own profile; employees could too
        icon: "verified.png",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Employees",
        url: "/employees",
        icon: "team.png", // Reuse user icon for employees
      },
      {
        id: 2,
        title: "Payroll",
        url: "/payroll",
        icon: "salary-voucher.png", // Maybe a new icon for cash?
      },
      // {
      //   id: 3,
      //   title: "Leave Management",
      //   url: "/leaves",
      //   icon: "leave.png", // Calendar fits leave requests
      // },
      // {
      //   id: 4,
      //   title: "Attendance",
      //   url: "/attendance",
      //   icon: "time-management.png", // New icon for time?
      // },
    ],
  },
  {
    id: 3,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Roles & Permissions",
        url: "/roles-permissions",
        icon: "business-people.png", // Lock for security
      },
      {
        id: 2,
        title: "Settings",
        url: "/settings",
        icon: "setting.png",
      },
    ],
  },
];

  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "3.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Linnie Nelson",
      email: "linnie@gmail.com",
      amount: "3.256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Brent Reeves",
      email: "brent@gmail.com",
      amount: "2.998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "2.512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "2.134",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "1.932",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "1.560",
    },
  ];
  
  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };
  
  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };
  
  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];

  export const employee = [
  {
    "employeeId": 1,
    "firstName": "Ramesh",
    "lastName": "Naik",
    "email": "ramesh.naik@example.com",
    "phone": "9876543210",
    "hireDate": "2023-03-15T10:30:00Z",
    "status": "Active",
    "departmentName": "HR",
    "baseSalary": 45000
  },
  {
    "employeeId": 2,
    "firstName": "Sneha",
    "lastName": "Desai",
    "email": "sneha.desai@example.com",
    "phone": "9823456789",
    "hireDate": "2022-11-01T09:00:00Z",
    "status": "Active",
    "departmentName": "Finance",
    "baseSalary": 52000
  },
  {
    "employeeId": 3,
    "firstName": "Akshay",
    "lastName": "Kamble",
    "email": "akshay.kamble@example.com",
    "phone": "9765432109",
    "hireDate": "2021-07-20T14:15:00Z",
    "status": "Inactive",
    "departmentName": "IT",
    "baseSalary": 60000
  }
]

export const pay: PayrollType[]  = [
  {
    id:1,
    payrollId: 1,
    employeeName: "Alice Johnson",
    amount: 5200.75,
    payDate: "2025-05-15",
    status: "Paid"
  },
  {
     id:2,
    payrollId: 2,
    employeeName: "Bob Smith",
    amount: 4300.50,
    payDate: "2025-05-15",
    status: "Pending"
  },
  {
     id:3,
    payrollId: 3,
    employeeName: "Cynthia Lee",
    amount: 6100.00,
    payDate: "2025-05-15",
    status: "Paid"
  },
  {
     id:4,
    payrollId: 4,
    employeeName: "David Kim",
    amount: 4700.00,
    payDate: "2025-05-15",
    status: "Paid"
  },
  {
     id:5,
    payrollId: 5,
    employeeName: "Eva Martinez",
    amount: 5400.20,
    payDate: "2025-05-15",
    status: "Pending"
  },
  {
     id:6,
    payrollId: 6,
    employeeName: "Frank Thomas",
    amount: 4900.00,
    payDate: "2025-05-15",
    status: "Paid"
  },
  {
     id:7,
    payrollId: 7,
    employeeName: "Grace Liu",
    amount: 5700.90,
    payDate: "2025-05-15",
    status: "Pending"
  },
  {
     id:8,
    payrollId: 8,
    employeeName: "Henry Owens",
    amount: 5100.00,
    payDate: "2025-05-15",
    status: "Paid"
  }
]

export const mockLeaveRequests: LeaveRequestFromAPI[] = [
  {
    id: "L1",
    employeeId: 1,
    startDate: "2025-06-01",
    endDate: "2025-06-05",
    reason: "Attending sister’s wedding",
    type: "marriage",
    status: "Pending",
  },
  {
    id: "L2",
    employeeId: 2,
    startDate: "2025-06-10",
    endDate: "2025-06-12",
    reason: "Fever and body pain",
    type: "sick",
    status: "Approved",
  },
  {
    id: "L3",
    employeeId: 3,
    startDate: "2025-05-20",
    endDate: "2025-05-21",
    reason: "Home repairs and maintenance",
    type: "personal",
    status: "Rejected",
  },
  {
    id: "L4",
    employeeId: 1,
    startDate: "2025-07-01",
    endDate: "2025-07-03",
    reason: "Friend’s wedding ceremony",
    type: "marriage",
    status: "Pending",
  },
  {
    id: "L5",
    employeeId: 4,
    startDate: "2025-06-15",
    endDate: "2025-06-18",
    reason: "Seasonal flu symptoms",
    type: "sick",
    status: "Approved",
  },
  {
    id: "L6",
    employeeId: 5,
    startDate: "2025-06-20",
    endDate: "2025-06-22",
    reason: "Urgent personal errands",
    type: "personal",
    status: "Pending",
  },
  {
    id: "L7",
    employeeId: 6,
    startDate: "2025-06-25",
    endDate: "2025-06-27",
    reason: "Attending cousin’s wedding",
    type: "marriage",
    status: "Approved",
  },
  {
    id: "L8",
    employeeId: 2,
    startDate: "2025-07-10",
    endDate: "2025-07-12",
    reason: "Severe cold and cough",
    type: "sick",
    status: "Rejected",
  },
  {
    id: "L9",
    employeeId: 7,
    startDate: "2025-07-05",
    endDate: "2025-07-06",
    reason: "Taking care of sick family member",
    type: "personal",
    status: "Pending",
  },
  {
    id: "L10",
    employeeId: 3,
    startDate: "2025-08-01",
    endDate: "2025-08-04",
    reason: "Marriage ceremony travel",
    type: "marriage",
    status: "Approved",
  },
];



  

  
  
