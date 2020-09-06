import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import People from './components/People.jsx';
import Person from './components/Person.jsx';
import Header from './components/Header.jsx';
import SearchPage from './components/SearchPage.jsx';
import SingleFilm from './components/SingleFilm.jsx';

import { GlobalStyles } from "./components/GlobalStyles.js";
import { lightTheme, darkTheme } from "./components/Themes.js"


const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.body};
  background-attachment: fixed;
`
const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 95vw;
  }
`

function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isLightMode, setIsLightMode] = useState(stored === "true" ? true : false);

  const themeToggler = useCallback(
    () => {
      isLightMode === true ? setIsLightMode(false) : setIsLightMode(true)
      localStorage.setItem("isDarkMode", !isLightMode);
    },
    [isLightMode]
  );

  return (
    <ThemeProvider theme={!isLightMode ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Background>
          <Router>
            <Container>
              <Header toggle={themeToggler} side={isLightMode} />
              <Switch>
                <Route path="/" exact>
                  <People />
                </Route>
                <Route path="/people/:personId" exact>
                  <Person />
                </Route>
                <Route path="/films/:filmId" exact>
                  <SingleFilm />
                </Route>
                <Route path="/search/:searchTerm" exact component={SearchPage}>
                </Route>
              </Switch>
            </Container>
          </Router>
        </Background>
      </>
    </ThemeProvider>
  );
}

export default App;
