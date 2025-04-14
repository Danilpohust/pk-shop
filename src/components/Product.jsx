import React, { useState, useEffect } from "react";
import { db } from "../router/FireBaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ProductList = ({ addtocard }) => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "pk"));
                const productData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productData);
            } catch (error) {
                console.error("Ошибка на сервере", error);
            }
        };
        fetchProducts();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div id="two">
            <h1>Список ПК</h1>
            <input
                type="text"
                placeholder="Поиск ПК"
                value={searchQuery}
                onChange={handleSearchChange}
                className="styled-input"
            />
            <div className="product-grid">
                {filteredProducts.map(el => (
                    <div className="product-card" key={el.id}>
                        <img src={el.image} alt={el.name} />
                        <h2>{el.name}</h2>
                        <p>{el.description}</p>
                        <p>Цена: {el.price} тг</p>
                        <button onClick={() => addtocard(el)}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
