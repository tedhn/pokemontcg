import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { FC } from "react";
import "./Card.scss";

interface props {
  name: string;
  rarity: PokemonTCG.Rarity;
  price: number | null | undefined;
  quantity: number;
  images: string;
}

const Card: FC<props> = ({ name, rarity, price, quantity, images }) => {
  return (
    <div className="card">
      <img className="image" src={images} alt={"not found"} />

      <div className="panel">
        <div className="name">{name}</div>
        <div className="rarity">{rarity}</div>
        <div className="row">
          <div className="price">{price ? `$ ${price}` : "null"}</div>
          <div className="quantity">{quantity}</div>
        </div>
      </div>

      <div className="button">Select</div>
    </div>
  );
};

export default Card;
