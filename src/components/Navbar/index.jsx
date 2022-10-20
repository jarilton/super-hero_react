import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./styles.scss";

export function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="navbar__box">
            <div className="navbar__title">
              <Link to="/">
                <BiCameraMovie />
              </Link>
            </div>
            <form className="navbar__form">
              <input
                type="text"
                placeholder="Pesquise um filme"
                className="navbar__input"
              />
              <button type="submit" className="navbar__button">
                <BiSearchAlt2 />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
