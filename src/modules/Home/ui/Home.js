import React from "react";
import { Card } from "@/components/Card";
import { Link } from "react-router-dom";
import { UserContext } from "@/shared/contexts";

function Home(props) {
  const currentUser = React.useContext(UserContext);
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

export default Home;
