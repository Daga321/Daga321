import React, {useEffect, useState} from "react";
import "./App.scss";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Portafolio from "./containers/Portafolio";
import Certification from "./containers/Certification";
import SplashScreen from "./containers/splashScreen/SplashScreen";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {splashScreen} from "./portfolio";

function HashNavigation() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return undefined;
    }

    let retryTimer;
    let animationFrameId;
    let attempts = 0;

    const scrollToHash = () => {
      const target = document.getElementById(location.hash.slice(1));

      if (!target) {
        if (attempts < 20) {
          attempts += 1;
          retryTimer = window.setTimeout(scrollToHash, 50);
        }
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        const header = document.querySelector("header.header");
        const headerHeight = header
          ? header.getBoundingClientRect().height
          : 0;
        const targetTop =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({top: targetTop, behavior: "smooth"});
      });
    };

    scrollToHash();

    return () => {
      window.clearTimeout(retryTimer);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [location.hash, location.pathname]);

  return null;
}

function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="not-found-code">404</p>
      <h1 id="not-found-title">Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="not-found-link" to="/">
        Go back home
      </Link>
    </section>
  );
}

function App() {
  const darkPref = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : {matches: false};
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (!splashScreen.enabled) {
      setIsShowingSplashAnimation(false);
      return undefined;
    }

    const splashTimer = setTimeout(() => {
      setIsShowingSplashAnimation(false);
    }, splashScreen.duration);

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  useEffect(() => {
    let resizeObserver = null;
    let animationFrameId = null;
    let cancelled = false;

    const updateHeaderOffset = () => {
      const header = document.querySelector("header.header");
      const headroomWrapper = document.querySelector(".headroom-wrapper");
      const measuredHeader = header || headroomWrapper;

      if (!measuredHeader) {
        return false;
      }

      const headerOffset = measuredHeader.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--header-offset",
        `${headerOffset}px`
      );
      return true;
    };

    const tryUpdateHeaderOffset = () => {
      if (cancelled) {
        return;
      }

      if (!updateHeaderOffset()) {
        animationFrameId = window.requestAnimationFrame(tryUpdateHeaderOffset);
        return;
      }

      const header = document.querySelector("header.header");
      const headroomWrapper = document.querySelector(".headroom-wrapper");
      const measuredHeader = header || headroomWrapper;

      if (measuredHeader && "ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(() => {
          updateHeaderOffset();
        });
        resizeObserver.observe(measuredHeader);
      } else {
        window.addEventListener("resize", updateHeaderOffset);
      }
    };

    tryUpdateHeaderOffset();

    return () => {
      cancelled = true;
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", updateHeaderOffset);
      }
    };
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <BrowserRouter>
            <HashNavigation />
            <Header />
            <main>
              <Switch>
                <Route exact path="/" component={Portafolio} />
                <Route exact path="/certifications" component={Certification} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </BrowserRouter>
        )}
      </StyleProvider>
    </div>
  );
}

export default App;
