import {Link} from "react-router-dom";
import "./CardMovie.css";

export function CardMovie({movie}) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return(
        <li className="cardMovie">
            <Link to={"/movie/" + movie.id} className="linkable">
                <img
                    width={230}
                    height={345}
                    src={imgUrl}
                    alt={movie.title}
                    className="imgMovie"
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}
