import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";

const Expenses = () => {
  const { totalExpense } = useGlobalContext();
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">
          Total Expense <span>${totalExpense()}</span>
        </h2>
      </InnerLayout>
    </ExpensesStyled>
  );
};

const ExpensesStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;
export default Expenses;
