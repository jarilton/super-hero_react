import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

export function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <BiCameraMovie />
          Home
        </Link>
        <form>
          <input type="text" placeholder="Pesquise um filme" />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </div>
  );
}
