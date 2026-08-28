import React from "react";
import "./App.scss";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Main from "./containers/Portafolio";
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
          <Switch>
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </StyleProvider>
    </div>
  );
}

export default App;
