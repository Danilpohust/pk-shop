import React from "react";
import "../Cart.css"
const Cart = ({ cart, togleCart, removeFromCart }) => {
    const totalPrice = cart.reduce((total, product) => total + (+product.price), 0);
    return (
        <div class="Cartdiv">
            <button onClick={togleCart}>Закрыть</button>
            <h2>Ваша корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Цена: {product.price}</p>
                            <button onClick={() => removeFromCart(product.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Общая стоимость: {totalPrice} тг</h3>
        </div>
    );
};

export default Cart;
