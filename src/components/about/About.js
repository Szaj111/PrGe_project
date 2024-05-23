import React from "react";
import "./About.css";
import category from "../tmp/category.png";
import map from "../tmp/mapa.png";
import db from "../tmp/lista_popraw.png";
import services from "../tmp/menu.png";
import movies from "../tmp/movie.png";
import { Link } from "react-router-dom";
import about_jpg from "../tmp/about_map.png";

function About() {
  return (
    <div className="about">
      <div className="title">O projekcie</div>
      <div className="web_side_ch">
        <div className="icons_bgn"></div>
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
        <img className="about_img" src={about_jpg} alt="zdjecie"></img>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et odio
          ipsum. Pellentesque egestas porta mauris, et interdum nibh. Praesent
          pharetra eget dui nec fermentum. Praesent nisi velit, faucibus et
          turpis non, interdum mattis ipsum. Nullam fermentum tincidunt ornare.
          Nunc in nunc non lorem commodo lacinia quis vitae justo. Sed semper,
          dui quis malesuada rutrum, dui nibh vulputate nisi, sit amet volutpat
          nisi lectus quis tellus. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Vivamus ultricies, quam
          porttitor pretium finibus, dui tellus lacinia mauris, a tincidunt
          augue urna a nisi. Donec laoreet auctor urna, in euismod velit. Morbi
          porttitor dui risus. Mauris sit amet commodo elit. Praesent ac
          fringilla risus. Suspendisse facilisis dolor mattis, ullamcorper urna
          ac, lacinia tortor. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Pellentesque suscipit
          turpis non hendrerit tincidunt. Vivamus et tellus nec est tincidunt
          efficitur tristique at arcu. Phasellus lobortis hendrerit purus, ac
          aliquam leo faucibus id. Duis eget nunc vel sem dictum commodo. Cras
          vel nisi tellus.
          <div className="text2">
            Donec enim odio, semper ut justo non, finibus dignissim nulla. Proin
            non tincidunt nibh, ac finibus mi. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Phasellus
            convallis convallis libero vel tincidunt. Suspendisse congue eget
            lectus a ornare. Pellentesque dapibus, odio eu interdum volutpat, ex
            ante auctor augue, ac volutpat massa justo at neque. Vestibulum
            pretium eros a metus tempor vulputate. Integer eu ex non orci
            fermentum venenatis id eget urna. Aenean aliquet condimentum
            suscipit. Etiam auctor nec arcu sit amet consequat. Curabitur sit
            amet arcu vitae nulla tristique scelerisque. Morbi ac magna aliquam,
            dapibus mi non, facilisis risus. Ut in massa imperdiet mauris
            faucibus scelerisque a fermentum enim. Phasellus interdum mattis
            consectetur. Nullam molestie tristique ipsum eget ultricies. Duis
            mattis, ex nec rutrum elementum, dolor felis bibendum nunc, eu
            rutrum odio felis eu libero. Cras sagittis, diam eu porttitor
            consectetur, mi massa molestie nisl, consectetur efficitur eros
            lectus vitae dui. Curabitur consequat turpis et mi fringilla
            commodo. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aenean varius sit amet neque at
            elementum. Fusce et tincidunt elit, ut eleifend nunc. Nullam
            fermentum enim et mattis condimentum. Ut nunc metus, laoreet vitae
            iaculis sed, bibendum ut nibh. Etiam nec vestibulum sem. Cras a
            velit at diam mattis gravida tristique eu nunc. Nam a dictum justo,
            ut pretium magna. Curabitur in laoreet sem, id iaculis erat.
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default About;
