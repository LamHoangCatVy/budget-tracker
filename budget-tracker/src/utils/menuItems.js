import {
  dashboard,
  expenses,
  transactions,
  trend,
  aboutus,
  signup,
  login,
} from "../utils/Icons";

export const menuItems = [
  {
    id: 1,
    title: "About Us",
    icon: aboutus,
    link: "/about-us",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/incomes",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/expenses",
  }
];

export const signupItem = [
  {
    id: 5,
    title: "Signup",
    icon: signup,
    link: "/signup",
  },
];

export const loginItem = [
  {
    id: 6,
    title: "Login",
    icon: signup,
    link: "/login",
  },
];
