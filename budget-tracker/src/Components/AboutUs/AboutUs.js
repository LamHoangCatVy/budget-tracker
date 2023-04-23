import React from "react";
import styled from "styled-components";

const AboutStyled = styled.div`
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    padding-left: 2rem;
    margin-bottom: 1rem;

    li {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
    }
  }
`;

function AboutPage() {
  return (
    <AboutStyled>
      <h1>Welcome to Our Expense Tracker App</h1>
      <p>
        Our Expense Tracker application is your all-in-one solution for managing
        your finances with ease and precision. With a focus on simplicity and
        usability, we provide you with the tools to keep track of your income
        and expenses effortlessly.
      </p>
      <p>Here's what our application offers:</p>
      <ul>
        <li>
          1. <strong>Income and Expense Tracking:</strong> Record your daily
          financial transactions, categorize them, and gain insights into your
          spending habits.
        </li>
        <li>
          2. <strong>Dashboard Insights:</strong> Visualize your financial data with our
          intuitive dashboard. Monitor your income, expenses, and overall
          financial health at a glance.
        </li>
        <li>
          3. <strong>User-Friendly Interface:</strong> Our application is designed to be
          user-friendly, ensuring that anyone can use it without any hassle.
        </li>
        <li>
          4. <strong>Data Security:</strong> We take the security of your financial data
          seriously. Rest assured that your information is protected with
          advanced security measures.
        </li>
        <li>
          5. <strong>Customization:</strong> Tailor the application to your needs by categorizing
          expenses, setting budgets, and defining financial goals.
        </li>
        <li>
          6. <strong>Reports and Analysis:</strong> Dive deep into your financial data with
          detailed reports and analysis tools to make informed financial
          decisions.
        </li>
      </ul>
      <p>
        Whether you're looking to gain control over your spending, save for a
        future goal, or simply understand your financial patterns, our Expense
        Tracker app is here to assist you on your financial journey.
      </p>
      <p>
        Start your journey to financial well-being with our Expense Tracker app
        today!
      </p>
    </AboutStyled>
  );
}

export default AboutPage;
