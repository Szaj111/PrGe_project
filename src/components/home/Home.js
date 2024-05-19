import React from "react";
import startowaImage from "./startowa.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home({ tekst }) {
  return (
    <div>
      <div className="home">
        <div className="home_top">
          <div className="home_top_about">O portalu</div>
        </div>

        <div className="home_bottom">
          <div className="home_left">
            <img
              className="startowa"
              src={startowaImage}
              alt="strona startowa"
            />
          </div>

          <div className="home_right">
            <div className="home_right_title">Geoportal</div>
            <div className="home_subtitle">
              Strona internetowa poświęcona filmom oraz widzom
            </div>
            <Link to="/login_page">
              <button className="start_button">START</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
