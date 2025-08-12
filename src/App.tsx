import "./App.css";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { MealForYou } from "./components/MealForYou";
import { Outlet } from "@tanstack/react-router";

export default function App() {
  return (
    <>
      <Intro />
      <MealForYou />
      <Outlet />

      
    </>
  );
}
