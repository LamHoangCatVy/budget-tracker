import { dashboard, expenses, signup, login, trend, aboutus } from "../utils/Icons";

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
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  }
];
export const signupItem = [
  {
    id: 5,
    title: "Signup",
    icon: signup,
    link: "/signup",
  }
]

export const loginItem = [
  {
    id: 6,
    title: "Login",
    icon: signup,
    link: "/login",
  }
]