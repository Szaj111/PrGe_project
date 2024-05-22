import React from "react";
import "./Movies.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import services from "../tmp/menu.png";
import movies from "../tmp/movie.png";
import bot_photo from "../tmp/movies_bot_side.png";
import { Link } from "react-router-dom";
import MediaCard from "./Card";
import "./Card.css";
function Movies() {
  return (
    <div className="movies">
      <div className="movies_title">Baza kategorii filmowych</div>
      <div className="top_function">
        <Link to="/movies">
          <img className="icon_cat" src={category} alt="ikona_1"></img>
        </Link>
        <Link to="/map">
          <img className="icon_map" src={map} alt="ikona_2"></img>
        </Link>
        <Link to="/subs_db">
          <img className="icon_subs" src={db} alt="ikona3"></img>
        </Link>
        <Link to="/services">
          <img className="icon_services" src={services} alt="ikona4"></img>
        </Link>
        <Link to="/movies_list">
          <img className="icon_movies" src={movies} alt="ikona5"></img>
        </Link>
      </div>
      <div className="media_cards">
        <MediaCard
          title="Horrory"
          image="https://rytmy.pl/wp-content/uploads/bfi_thumb/the-ring1-pqantqx9yt3d5luohq8xht4m4w6g4b9vty9y4080i0.jpg"
          description="Horror films: a chilling journey into fear, suspense, and the unknown, with spine-tingling imagery and unexpected twists that keep audiences on edge."
        ></MediaCard>
        <MediaCard
          title="SCI-FI"
          image="https://www.yourai.uk/files/614/images/the-evolution-of-artificial-intelligence-in-sci-fi.jpg"
          description="Sci-fi films: thrilling journeys into imaginative worlds of technology, space, and the future, with futuristic settings and mind-bending concepts that captivate audiences."
        ></MediaCard>
        <MediaCard
          title="Action"
          image="https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg"
          description="Action movies: adrenaline-pumping spectacles filled with intense stunts, explosive sequences, and heroic protagonists, delivering non-stop thrills and excitement.
"
        ></MediaCard>
        <MediaCard
          title="Thirllers"
          image="https://s.studiobinder.com/wp-content/uploads/2020/05/Best-Thriller-Movies-of-All-Time-Ranked-for-Filmmakers-Featured.jpg"
          description="Thrillers: gripping tales of suspense and tension, with intricate plots and unexpected twists that keep audiences hooked until the end"
        ></MediaCard>
        <MediaCard
          title="Fantasy"
          image="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/Movies-Like-Lord-of-the-Rings.jpg"
          description="Fantasy films: enchanting adventures with mythical creatures, epic quests, and magical landscapes that ignite the imagination and offer an exhilarating escape.
          "
        ></MediaCard>
        <MediaCard
          title="Comedy"
          image="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/08/the-funniest-british-comedy-movies-of-all-time-ranked-rp.jpg"
          description="Comedy films: laughter-filled escapes with witty humor, memorable characters, and clever jokes that uplift spirits and entertain audiences."
        ></MediaCard>
        <MediaCard
          title="Anime"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhme5X5uhGicTBdH2cueVayAUNjey8lT2_E3cM7GL0MmcpuBQnQtxDbIbq652oGpO_1qg&usqp=CAU"
          description="Anime: captivating Japanese animation known for its diverse genres, unique art styles, and compelling storytelling that appeals to audiences of all ages worldwide.
          "
        ></MediaCard>
        <MediaCard
          title="Dective"
          image="https://www.thedigitalfix.com/wp-content/uploads/2022/02/best-detective-movies-sherlock-holmes.jpg"
          description="Detective films: gripping mysteries with sharp sleuths, puzzling clues,
          and unexpected twists that keep audiences engaged.
          "
        ></MediaCard>

        <MediaCard
          title="Sports"
          image="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/rocky.jpg"
          description="Sports films: thrilling tales of competition, determination, and triumph that inspire with memorable characters and underdog victories."
        ></MediaCard>
        <MediaCard
          title="Family"
          image="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/08/Shrek-10-BTS-Facts-Only-All-Stars-Know-featured-image.jpg"
          description="Family films: heartwarming stories for all ages, filled with laughter, love, and timeless lessons.
          "
        ></MediaCard>
        <MediaCard
          title="Drama"
          image="https://www.granice.pl/sys6/pliki/text/28/10/2020/2231d8072b6a585ca0ec843f8d9bbde5.jpg"
          description="Drama films: gripping narratives that delve into complex human emotions, relationships, and conflicts, offering powerful storytelling and compelling performances.
          "
        ></MediaCard>
        <MediaCard
          title="Romantic"
          image="https://parade.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MTkwNTc1OTc1MzI2Mjk1OTMy/365-jpg.jpg"
          description="
          Romantic films: heartfelt stories of love and relationships, filled with emotion, passion, and memorable moments.
          "
        ></MediaCard>
        <img className="bot_side" src={bot_photo} aly="dolne zdjecie"></img>
      </div>
    </div>
  );
}

export default Movies;
