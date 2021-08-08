import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state, removeFromCart} = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return(
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>sin pedidos...</h3>}
        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type='button' onClick={handleRemove(item)}>
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <aside className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
            <button type='button'>Continuar pedido</button>
          </Link>
        </aside>
      )}
    </div>
  )
};
export default Checkout;
