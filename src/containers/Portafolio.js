import React, {useEffect, useState} from "react";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import "./Portafolio.scss";

const Portafolio = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    if (isShowingSplashAnimation) {
      return;
    }

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

    let resizeObserver = null;
    let animationFrameId = null;
    let cancelled = false;

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
  }, [isShowingSplashAnimation]);

  return (
    <>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <>
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
};

export default Portafolio;
