import { FC } from "react";

import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import CardContainer from "../../Components/Card/CardContainer";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBarContainer from "../../Components/SearchBar/SarchBarContainer";
import { ReactComponent as Search } from "../../svg/glasses.svg";

import "./Home.scss";

interface props {
  cards: PokemonTCG.Card[];
  GetCards: any;
}

const Home: FC<props> = ({ cards, GetCards }) => {
  return (
    <div className="home">
      <NavBar />
      <SearchBarContainer />
      <div className="cards">
        {cards.map((card, index) => {
          return <CardContainer key={index} card={card} />;
        })}
      </div>
      <div className="loadmore" onClick={() => GetCards("")}>
        <Search />
        <div className="text">show more</div>
      </div>
    </div>
  );
};

export default Home;
