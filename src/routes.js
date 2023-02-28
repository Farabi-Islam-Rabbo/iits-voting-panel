import StudentLogin from "./Pages/Student/Login/StudentLogin";
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import AdminHome from "./Pages/Admin/HomePage/Home";
import Home from "./Pages/Student/HomePage/Home";
import Dashboard from "./Pages/Student/Dashboard/Dashboard";
const routes = [
  {
    path: "/admin-login",
    exact: true,
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/admin-home",
    exact: true,
    name: "AdminHome",
    component: AdminHome,
  },
  {
    path: "/student-login",
    exact: true,
    name: "StudentLogin",
    component: StudentLogin,
  },
  {
    path: "/student-home",
    exact: true,
    name: "StudentHome",
    component: Home,
  },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
];

export default routes;
