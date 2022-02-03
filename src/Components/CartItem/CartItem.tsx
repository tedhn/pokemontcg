import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cartitem">
      <img
        className="image"
        src="https://images.pokemontcg.io/xy1/1.png"
        alt={"not found"}
      />
      <div className="carddetails">
        <div className="name">Venusaur-EX</div>
        <div className="price">
          <div>3.32 </div> per Card
        </div>
        <div className="quantity">
          <div>146</div>cards left
        </div>
      </div>
      <div className="totaldetails">
        <div className="quantity">
          <div className="number">2</div>
          <div className="changes">
            <div>+</div>
            <div>-</div>
          </div>
        </div>
        <div className="pricetext">price</div>
        <div className="tprice">6.64</div>
      </div>
    </div>
  );
};

export default CartItem;
