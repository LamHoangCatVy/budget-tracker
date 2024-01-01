import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import loginpage from "../../img/loginpage.png";
import incomes from "../../img/incomes.png";
import incomesdashboard from "../../img/incomesdashboard.png";
import expenses from "../../img/expenses.png";
import expensesdashboard from "../../img/expensesdashboard.png";
import signup from "../../img/signuppage.png";
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
      <div>
        <h1>Welcome to FinTelligence</h1>
        <p>
          FinTelligence is your all-in-one solution for managing your finances
          with ease and precision. With a focus on simplicity and usability, we
          provide you with the tools to keep track of your income and expenses
          effortlessly.
        </p>
        <p>Here's what our application offers:</p>
        <ul>
          <li>
            1. <strong>Income and Expense Tracking:</strong> Record your daily
            financial transactions, categorize them, and gain insights into your
            spending habits.
          </li>
          <li>
            2. <strong>Dashboard Insights:</strong> Visualize your financial
            data with our intuitive dashboard. Monitor your income, expenses,
            and overall financial health at a glance.
          </li>
          <li>
            3. <strong>User-Friendly Interface:</strong> Our application is
            designed to be user-friendly, ensuring that anyone can use it
            without any hassle.
          </li>
          <li>
            4. <strong>Data Security:</strong> We take the security of your
            financial data seriously. Rest assured that your information is
            protected with advanced security measures.
          </li>
          <li>
            5. <strong>Reports and Analysis:</strong> Dive deep into your
            financial data with detailed reports and analysis tools to make
            informed financial decisions.
          </li>
        </ul>
        <p>
          Whether you're looking to gain control over your spending, save for a
          future goal, or simply understand your financial patterns, our Expense
          Tracker app is here to assist you on your financial journey.
        </p>
        <p>
          Start your journey to financial well-being with FinTelligence app
          today!
        </p>
      </div>
      <Carousel showThumbs={false}>
        <div>
          <img src={signup} alt="Sign up Page" />
        </div>
        <div>
          <img src={loginpage} alt="Login Page" />
        </div>
        <div>
          <img src={incomes} alt="Incomes" />
        </div>
        <div>
          <img src={incomesdashboard} alt="Incomes Dashboard" />
        </div>
        <div>
          <img src={expenses} alt="Expenses" />
        </div>
        <div>
          <img src={expensesdashboard} alt="Expenses Dashboard" />
        </div>
      </Carousel>
    </AboutStyled>
  );
}

export default AboutPage;
