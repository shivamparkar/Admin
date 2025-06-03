import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import { Navbar } from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import Payroll from "./pages/payroll/Payroll";
import Profile from "./pages/profile/Profile";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/employees",
            element: <Products />,
          },
          {
            path: "/users/:id",
            element: <User />,
          },
          {
            path: "/employees/:id",
            element: <Product />,
          },
          {
            path: "/payroll",
            element: <Payroll  />,
          },
          // {
          //   path: "/leaves",
          //   element:<LeaveManagement/>
          // },
          // {
          //   path: "/attendance",
          //   element: <AttendancePage />,
          // },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    {
      basename: "/Admin", 
    }
  );

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
