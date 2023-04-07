import React from "react";
//import api from '../utils/api.js'
import Card from "./Card";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Recommendation(props) {
  const currentUser = React.useContext(CurrentUserContext);
  //console.log(currentUser)

  const [statusVisible, changeStatus] = React.useState("");

  const profileAvatarHover = () => {
    changeStatus("profile__avatar-overlay_visible");
  };
  const profileAvatarHoverNot = () => {
    changeStatus("");
  };

  return (
    <section className="recommend">
      <h2 className="recommend__title">Recommendations</h2>
      <div className="recommend__list">
        {props.cards.map((element) => {
          return (
            <Card
              key={element._id}
              onCardDelete={props.onCardDelete}
              cardsToAdd={element}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
