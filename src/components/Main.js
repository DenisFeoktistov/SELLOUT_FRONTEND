import React from "react";
//import api from '../utils/api.js'
import Card from "./Card";
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
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
    <main className="main">
      {/* <section classNameName="profile">
                <div classNameName="profile__avatar-container" onClick={props.onEditAvatar} onMouseOver={profileAvatarHover} onMouseOut={profileAvatarHoverNot}>
                    <img classNameName="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                    <div classNameName={`profile__avatar-overlay ${statusVisible}`}></div>
                </div>

                <div classNameName="profile__info">
                    <h1 classNameName="profile__name" id="profile__name">{currentUser.name}</h1>
                    <button classNameName="profile__edit-button-box" type="button" onClick={props.onEditProfile}></button>
                    <p classNameName="profile__status" id="profile__status">{currentUser.about}</p>
                </div>
                <button classNameName="profile__add-button-box" type="button" onClick={props.onAddPlace}></button>
            </section> */}
      <section className="cardsList">
        {props.cards.map((element) => {
          return (
            <Link to="/productPage">
              <Card
                key={element._id}
                onCardDelete={props.onCardDelete}
                cardsToAdd={element}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
              />
            </Link>
          );
        })}
        <div className="swap">
          <p className="swap__to">Предыдущая</p>
          <p className="swap__nums">1 bp 24</p>
          <p className="swap__to">Следующая</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
