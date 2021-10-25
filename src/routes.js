/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim
* Modified by thehansguy - Oct 2021

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";

import TableList1AddmissionApplicants from "views/TableList1AdmissionApplicants";
import TableList2Fees from "views/TableList2Fees";
import TableList3Departments from "views/TableList3Departments";
import TableList4Students from "views/TableList4Students";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-tachometer-alt",
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/admission-applicants",
    name: "Applicants",
    icon: "fas fa-tasks",
    component: TableList1AddmissionApplicants,
    layout: "/admin",
  },
  {
    path: "/departments",
    name: "Departments",
    icon: "far fa-building",
    component: TableList3Departments,
    layout: "/admin",
  },
  {
    path: "/academic-calendar",
    name: "Academic Calendar",
    icon: "far fa-calendar-alt",
    component: Calendar,
    layout: "/admin",
  },

  {
    path: "/fees",
    name: "Fees",
    icon: "fas fa-wallet",
    component: TableList2Fees,
    layout: "/admin",
  },
  {
    path: "/students",
    name: "Students",
    icon: "fas fa-graduation-cap",
    component: TableList4Students,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Account",
    icon: "fas fa-user-tie",
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
