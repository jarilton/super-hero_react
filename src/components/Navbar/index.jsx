import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./styles.scss";

export function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="navbar__box">
            <div className="navbar__title">
              <Link to="/">
                <BiCameraMovie size={40} />
              </Link>
            </div>
            <form className="navbar__form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Pesquise um filme"
                className="navbar__input"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button type="submit" className="navbar__button">
                <BiSearchAlt2 size={20}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
