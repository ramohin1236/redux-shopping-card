import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart);
  console.log(cartProducts);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div>
              <div>
                {cartProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 mb-4 bg-blue-300 rounded-2xl">
                    <div className="w-24 overflow-hidden rounded-xl">
                      <img src={product.img} alt={product.name}/>
                    </div>
                    <div>
                      <h3>{product.name}</h3>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>Billing Information</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
