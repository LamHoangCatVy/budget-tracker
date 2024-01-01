import React, { useState } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { dateFormat } from "../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement
);

const Chart = () => {
  const { incomes, expenses } = useGlobalContext();
  const [chartOption, setChartOption] = useState("income");

  const sortedIncomes = incomes.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const sortedExpenses = expenses.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const incomeData = {
    labels: sortedIncomes.map((inc) => dateFormat(inc.date)),
    datasets: [
      {
        label: "Income",
        data: sortedIncomes.map((income) => income.amount),
        backgroundColor: "green",
        tension: 0.2,
      },
    ],
  };

  const expenseData = {
    labels: sortedExpenses.map((exp) => dateFormat(exp.date)),
    datasets: [
      {
        label: "Expenses",
        data: sortedExpenses.map((expense) => expense.amount),
        backgroundColor: "red",
        tension: 0.2,
      },
    ],
  };

  const alignDataWithDates = (data, labels) => {
    const alignedData = [];
    for (let i = 0; i < labels.length; i++) {
      const date = labels[i];
      const matchingData = data.find((item) => dateFormat(item.date) === date);
      alignedData.push(matchingData ? matchingData.amount : null);
    }
    return alignedData;
  };

  let chartData;

  if (chartOption === "income") {
    chartData = incomeData;
  } else if (chartOption === "expense") {
    chartData = expenseData;
  } else {
    const allLabels = [
      ...new Set([...incomeData.labels, ...expenseData.labels]),
    ];
    allLabels.sort((a, b) => new Date(a) - new Date(b));

    const alignedData = alignDataWithDates(
      [...sortedIncomes, ...sortedExpenses],
      allLabels
    );

    chartData = {
      labels: allLabels,
      datasets: [
        {
          label: "Income and Expenses",
          data: alignedData,
          backgroundColor: alignedData.map((dataPoint, index) => {
            const type = index < sortedIncomes.length ? "income" : "expense";
            return type === "income"
              ? "rgba(0, 128, 0, 1)"
              : "rgba(255, 0, 0, 1)";
          }),
          tension: 0.2,
        },
      ],
    };
  }

  const chartContainerRef = React.createRef();
  
  return (
    <ChartContainer ref={chartContainerRef}>
      <OptionsContainer>
        <OptionLabel>
          <input
            type="radio"
            value="income"
            checked={chartOption === "income"}
            onChange={() => setChartOption("income")}
          />
          <span>Income</span>
        </OptionLabel>
        <OptionLabel>
          <input
            type="radio"
            value="expense"
            checked={chartOption === "expense"}
            onChange={() => setChartOption("expense")}
          />
          <span>Expense</span>
        </OptionLabel>
      </OptionsContainer>

      <ChartWrapper>
        <Line data={chartData} width={0} height={300} />
      </ChartWrapper>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

export default Chart;
