import {  Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <h2>Super Hero</h2>
      <Outlet />
    </div>
  );
}

