import { FC } from "react";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import CardContainer from "../../Components/Card/CardContainer";
import NavBar from "../../Components/NavBar/NavBar";
import { ReactComponent as Search } from "../../svg/glasses.svg";

import "./Home.scss";

interface props {
  cards: PokemonTCG.Card[];
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const Home: FC<props> = ({ cards, counter, setCounter }) => {
  return (
    <div className="home">
      <NavBar />
      Home
      <div className="cards">
        {cards.map((card, index) => {
          console.log(card);
          return <CardContainer key={index} card={card} />;
        })}
      </div>
      <div className="loadmore" onClick={() => setCounter(counter + 1)}>
        <Search />
        <div className="text">show more</div>
      </div>
    </div>
  );
};

export default Home;
