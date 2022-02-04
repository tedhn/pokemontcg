import { useContext } from "react";

import CardContainer from "../../Components/Card/CardContainer";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBarContainer from "../../Components/SearchBar/SarchBarContainer";
import { ReactComponent as Search } from "../../svg/glasses.svg";

import "./Home.scss";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartContainer from "../../Components/Cart/CartContainer";
import { PokemonContext } from "../../ContextProvider";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

const Home = () => {
  const { cards, GetCards, cart, ToggleCart } = useContext(PokemonContext);

  return (
    <div className="home">
      <NavBar />
      <SearchBarContainer />
      <div className="cards">
        {cards.map((card: PokemonTCG.Card, index: number) => {
          return <CardContainer key={index} card={card} />;
        })}
      </div>
      <div className="loadmore" onClick={() => GetCards("")}>
        <Search />
        <div className="text">show more</div>
      </div>
      <div className="badge">
        <Badge
          badgeContent={cart.length}
          color="error"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <div className="viewcart" onClick={ToggleCart}>
            <ShoppingCartOutlinedIcon />
            <div className="text">View Cart</div>
          </div>
        </Badge>
      </div>

      <CartContainer />
    </div>
  );
};

export default Home;
