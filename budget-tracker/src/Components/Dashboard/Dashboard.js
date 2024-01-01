import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import History from "../../History/History";
import { InnerLayout } from "../../styles/Layout";
import Chart from "../Chart/Chart";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    getIncomes,
    getExpenses,
  } = useGlobalContext();
  const totalBalance = totalIncome() - totalExpenses();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    getIncomes();
    getExpenses();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart key={windowWidth} />
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>{totalIncome()}</p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>{totalExpenses()}</p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p style={{ color: totalBalance < 0 ? "red" : "green" }}>
                  {totalBalance}
                </p>
                {totalBalance < 0 ? <p style={{fontSize:"1rem", color:"red"}}>Oops, you must spend carefully!</p> : <p style={{fontSize:"1rem", color:"var(--color-green)"}}>Yeey, we are spending in control!</p>}
              </div>
            </div>
          </div>

          <div className="history-con">
            <History />
            <h2 className="salary-title">
              Min <span>Salary</span>Max
            </h2>
            <div className="salary-item">
              <p>
                {incomes.length > 0
                  ? Math.min(...incomes.map((item) => item.amount))
                  : -Infinity}
              </p>
              <p>
                {incomes.length > 0
                  ? Math.max(...incomes.map((item) => item.amount))
                  : Infinity}
              </p>
            </div>
            <h2 className="salary-title">
              Min <span>Expense</span>Max
            </h2>
            <div className="salary-item">
              <p>
                {expenses.length > 0
                  ? Math.min(...expenses.map((item) => item.amount))
                  : -Infinity}
              </p>
              <p>
                {expenses.length > 0
                  ? Math.max(...expenses.map((item) => item.amount))
                  : Infinity}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }

    .chart-con {
      grid-column: 1 / 4;
      height: 600px;

      @media (max-width: 1200px) {
        grid-column: 1 / -1;
      }

      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;

        @media (max-width: 1200px) {
          grid-template-columns: 1fr;
        }

        .income,
        .expense {
          justify-content: center;
          align-items: center;
          grid-column: span 2;

          @media (max-width: 1200px) {
            grid-column: span 1;
          }
        }

        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;

          h2,
          p {
            font-size: 1.6rem;
            font-weight: 700;
            color: rgba(34, 34, 96, 1);
          }
        }

        .income h2,
        .income p {
          color: var(--color-green);
        }

        .expense h2,
        .expense p {
          color: red;
        }

        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          p {
            color: var(--color-green);
            opacity: 0.6;
            font-size: 1.5rem;
          }

          @media (max-width: 1200px) {
            grid-column: 1 / -1;
          }
        }
      }
    }

    .history-con {
      grid-column: 4 / -1;

      @media (max-width: 1200px) {
        grid-column: 1 / -1;
      }

      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .salary-title {
        font-size: 1.2rem;

        span {
          font-size: 1.8rem;
        }
      }

      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;
export default Dashboard;
