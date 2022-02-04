import { FC, useContext } from "react";

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

interface props {
  ResetFilter: any;
}

const Home: FC<props> = ({ ResetFilter }) => {
  const {
    cards,
    GetCards,
    cart,
    ToggleCart,
    showCart,
    filtered,
    error,
    loading,
    UpdateCounter,
    counter,
  } = useContext(PokemonContext);

  return (
    <div className="home">
      <NavBar />
      <SearchBarContainer />
      {/* if filter is applied a reset button will be displayed to reset filters */}
      {filtered && (
        <div onClick={ResetFilter} className="reset">
          reset filter
        </div>
      )}
      {/* if theres no errors during the api call the cards will be displayed */}

      {error || (
        <div className="cards">
          {/* if the no cards are found , a message will be displayed */}
          {cards.length !== 0 && !loading ? (
            cards.map((card: PokemonTCG.Card, index: number) => {
              return <CardContainer key={index} card={card} />;
            })
          ) : (
            <div className="error">no cards found</div>
          )}
        </div>
      )}

      {error && <div className="error">Error occured</div>}

      <div
        className="loadmore"
        onClick={() => {
          UpdateCounter(counter + 1);
          GetCards("", counter + 1);
        }}
      >
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

      {showCart && <CartContainer />}
    </div>
  );
};

export default Home;
