import styled from "styled-components";
import { InnerLayout, MainLayout } from "./styles/Layout";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <AppStyled bg={`add images`} className="App">
      <Orb />
      <MainLayout>
        <Navigation /> 
        <Dashboard />
        <InnerLayout></InnerLayout>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg}); //add images;
  position: relative;
`;
export default App;
