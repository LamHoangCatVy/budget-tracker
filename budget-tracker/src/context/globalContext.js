import React, { useContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const addIncome = async (income) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
  
    const response = await axios
      .post(
        `https://budget-tracker-gules-omega.vercel.app/api/v1/add-income`,
        income,
        { headers }
      )
      .catch((error) => {
        setError(error.response.data.message);
      });
  
    if (user) {
      getIncomes();
    }
  };
  const getIncomes = async () => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
    };
  
    const response = await axios.get(
      `https://budget-tracker-gules-omega.vercel.app/api/v1/get-incomes`,
      { headers }
    );
  
    setIncomes(response.data);
  };
  
  const deleteIncome = async (id) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      };
  
      await axios.delete(
        `https://budget-tracker-gules-omega.vercel.app/api/v1/delete-income/${id}`,
        { headers }
      );
  
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

  const addExpense = async (expense) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      };
  
      const response = await axios.post(
        `https://budget-tracker-gules-omega.vercel.app/api/v1/add-expense`,
        expense,
        { headers }
      );
  
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  
  const getExpenses = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      };
  
      const response = await axios.get(
        `https://budget-tracker-gules-omega.vercel.app/api/v1/get-expenses`,
        { headers }
      );
  
      setExpenses(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  
  const deleteExpense = async (id) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      };
  
      await axios.delete(
        `https://budget-tracker-gules-omega.vercel.app/api/v1/delete-expense/${id}`,
        { headers }
      );
  
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
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
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        getExpenses,
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
