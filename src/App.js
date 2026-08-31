import React from "react";
import "./App.scss";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Portafolio from "./containers/Portafolio";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
  const darkPref = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : {matches: false};
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Portafolio} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </StyleProvider>
    </div>
  );
}

export default App;
