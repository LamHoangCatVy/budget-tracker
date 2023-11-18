import React, { useContext, useState } from "react";
import axios from "axios";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    const response = await axios
      .post(`https://budget-tracker-gules-omega.vercel.app/api/v1/add-income`, income)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncomes();
  };

  const getIncomes = async () => {
    const response = await axios.get(
      `https://budget-tracker-gules-omega.vercel.app/api/v1/get-incomes`
    );
    setIncomes(response.data);
  };

  const updateIncome = async (id, income) => {
    const response = await axios
      .put(`https://budget-tracker-gules-omega.vercel.app/api/v1/update-income/${id}`, income)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncomes();
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`https://budget-tracker-gules-omega.vercel.app/api/v1/delete-income/${id}`);
      getIncomes();
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });
    return totalIncome;
  };

  const addExpense = async (income) => {
    const response = await axios
      .post(`https://budget-tracker-gules-omega.vercel.app/api/v1/add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(
      `https://budget-tracker-gules-omega.vercel.app/api/v1/get-expenses`
    );
    setExpenses(response.data);
    console.log(response.data);
  };

  const updateExpense = async (id, expense) => {
    const response = await axios
      .put(`https://budget-tracker-gules-omega.vercel.app/update-expense/${id}`, expense)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`https://budget-tracker-gules-omega.vercel.app/api/v1/delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history;
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        incomes,
        getIncomes,
        updateIncome,
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        getExpenses,
        updateExpense,
        deleteExpense,
        totalExpenses,
        error,
        setError,
        totalBalance,
        transactionHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
