import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { useMemo, useState } from "react";
import { MainLayout } from "./styles/Layout";
<<<<<<< HEAD
import AboutPage from "./Components/AboutUs";
import Orb from "./Components/Orb";
import Navigation from "./Components/Navigation";
import Dashboard from "./Components/Dashboard";
import Income from "./Components/Income";
=======
import AboutPage from "./Components/AboutUs/AboutUs";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
>>>>>>> b13a2297719fb004860a83370a22ee9e104ada1b
import Expenses from "./Components/Expenses/Expenses";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  const displayData = () => {
    switch (active) {
      case 1:
        return <AboutPage />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      case 5:
        return <Signup />;
      case 6:
        return <Login />;

      default:
        return <Dashboard />;
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
          <main>{displayData()}</main>
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
