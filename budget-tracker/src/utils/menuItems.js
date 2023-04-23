import { dashboard, expenses, transactions, trend, aboutus } from "../utils/Icons";

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
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Expenses",
    icon: expenses,
    link: "/dashboard",
  },
];
