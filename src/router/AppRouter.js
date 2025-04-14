import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../components/Home";
import ProductList from "../components/Product";
import Contact from "../components/Contact";
import Cart from "../components/Cart";

const AppRouter = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const togleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const addtocard = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productID) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productID));
    };

    return (
        <Router>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/pk">ПК</Link>
                <Link to="/contact">Контакты</Link>
                <button onClick={togleCart} class="button">Корзина ({cart.length})</button>
            </nav>
            {isCartOpen && <Cart togleCart={togleCart} removeFromCart={removeFromCart} cart={cart} />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pk" element={<ProductList addtocard={addtocard} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
