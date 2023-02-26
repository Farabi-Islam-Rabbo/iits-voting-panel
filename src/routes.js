import StudentLogin from "./Pages/Student/Login/StudentLogin";
import Home from "./Pages/Student/HomePage/Home";
const routes = [
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
];

export default routes;
