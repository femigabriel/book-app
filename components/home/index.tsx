import React from "react";
import { LandingPage } from "./LandingPage";
import { Feautures } from "./Feautures";
import { AboutPage } from "./AboutPage";
import { Footer } from "./Footer";
import { Header } from "../Header";

export const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <LandingPage />
      <Feautures />
      <AboutPage />
      <Footer />
    </div>
  );
};
