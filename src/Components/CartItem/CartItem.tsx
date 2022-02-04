import { FC } from "react";
import "./CartItem.scss";

interface props {
  name: string;
  image: string;
  quantity: number;
  price: number;
  amount: number;
  AddOne: any;
  RemoveOne: any;
  total: number;
}

const CartItem: FC<props> = ({
  name,
  image,
  quantity,
  price,
  AddOne,
  RemoveOne,
  amount,
  total,
}) => {
  return (
    <div className="cartitem">
      <img className="image" src={image} alt={"not found"} />
      <div className="carddetails">
        <div className="name">{name}</div>
        <div className="price">
          <div>${price}</div> per Card
        </div>
        <div className="quantity">
          <div>{quantity - 1}</div>cards left
        </div>
      </div>
      <div className="totaldetails">
        <div className="quantity">
          <div className="number">{amount}</div>
          <div className="changes">
            <div
              onClick={AddOne}
              style={{ pointerEvents: quantity === 1 ? "none" : "auto" }}
            >
              +
            </div>
            <div onClick={RemoveOne}>-</div>
          </div>
        </div>
        <div className="pricetext">price</div>
        <div className="tprice">${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItem;
