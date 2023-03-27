import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav>
        
        <Logo to={"/"}><GiKnifeFork/>delicious</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/>
    </div>
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5 rem;
font-weight: 600;
font-family: 'Lobster Two', cursive;
text-color: black;
`


const Nav =styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  svg{
    font-size:15 rem;
  }
`


export default App;
