import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/IncomeForm";
import { useEffect } from "react";
import IncomeItem from "../../utils/IncomeItem";
import { useAuthContext } from "../../hooks/useAuthContext";

const Income = () => {
  const { incomes, getIncomes, deleteIncome, totalIncome, error } =
    useGlobalContext();
  const { user } = useAuthContext();
  useEffect(() => {
    if (!user) {
      return null;
    }
    getIncomes();
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h2 className="total-income">
          Total Income <span>${totalIncome()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <Form error={error} />
          </div>
          <div className="incomes">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
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

  @media (max-width: 1200px) {
    h2 {
      font-size: 1.5rem;
    }

    .total-income {
      font-size: 0.9rem;

      span {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }

    .total-income {
      font-size: 0.5rem;

      span {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 568px) {
    .total-income {
      display: none;
    }
  }
`;
export default Income;
