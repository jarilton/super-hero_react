import {  Outlet } from "react-router-dom";
import { Banner } from "./components/Banner";
import { Footer } from "./components/footer";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
}

