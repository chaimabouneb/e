import React from "react";

function Carti(props) {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <aside>
      <div>{cartItems.length === 0 && <div> Cart Is empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty}* ${item.price.ToFixed(2)}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Carti;
