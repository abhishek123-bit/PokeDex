import { Link } from "react-router-dom";
import "./Pokemone.css";
function Pokemon({ name, image, id }) {
  return (
    <div className="pokemone_wrapper">
      <Link to={`pokemone/${id}`}>
        <h4>{name}</h4>
      </Link>
        <img src={image} alt="" />
    </div>
  );
}

export default Pokemon;
