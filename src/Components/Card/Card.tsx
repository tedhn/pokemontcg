import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <img
        className="image"
        src="https://images.pokemontcg.io/xy1/1.png"
        alt={"not found"}
      />

      <div className="panel">
        <div className="name">Venusaur-EX</div>
        <div className="rarity">Rare Holo EX</div>
        <div className="row">
          <div className="price">3.32</div>
          <div className="quantity">146</div>
        </div>
      </div>

      <div className="button">Select</div>
    </div>
  );
};

export default Card;
