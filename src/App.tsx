import React from "react";
import NavBar from "./components/navBar/NavBar";
import LandingSection from "./components/Landing/LandingSection";
import HowMasaratWorks from "./components/howMasaratWorks/HowMasaratWorks";
import ExplainSlider from "./components/explainSlider/ExplainSlider";
import Mainservices from "./components/mainServices/Mainservices";
import AiTools from "./components/aiTools/AiTools";
import UsersSection from "./components/usersSection/UsersSection";
import MasaratMianAdv from "./components/masaratMianAdv/MasaratMianAdv";
import CommonQuestions from "./components/commonQuestions/CommonQuestions";
import Footer from "./components/footer/Footer";
import { ModalProvider } from "./context/modalProvider";

export default function App() {
  return (
    <>
      <ModalProvider>
        <NavBar />
        <LandingSection />
        <ExplainSlider />
        <HowMasaratWorks />
        <Mainservices />
        <AiTools />
        <UsersSection />
        <MasaratMianAdv />
        <div className='h-52 bg-primary-300 '></div>
        <CommonQuestions />
        <Footer />
      </ModalProvider>
    </>
  );
}
