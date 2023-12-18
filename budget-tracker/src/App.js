import styled from "styled-components";
import { MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useMemo, useState } from "react";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import AboutPage from "./Components/AboutUs/AboutUs";
import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import { BrowserRouter, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const [active, setActive] = useState(1);
  const {user} = useAuthContext()
  const displayData = (user) => {
    switch (active) {
      case 1:
        return user ? <AboutPage /> : <Login/>;
      case 2:
        return user ? <Dashboard /> : <Login/>;
      case 3:
        return user ? <Income /> : <Login/>;
      case 4:
        return user ? <Expenses /> : <Login/>;
      case 5:
        return !user ? <Signup /> : <AboutPage/>;
      case 6:
        return <Login />;
      default:
        return <Login />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <BrowserRouter>
      <AppStyled className="App">
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>{displayData(user)}</main>
        </MainLayout>
      </AppStyled>
    </BrowserRouter>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg}); //add images;
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
export default App;
