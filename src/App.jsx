import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
      </nav>
      <h2>Super Hero</h2>
      <Outlet />
    </div>
  );
}

