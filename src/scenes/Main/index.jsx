import React, { useState, useEffect } from 'react';
import Market from '../../components/Market';
import Modal from '../../components/Modal';
import WebApp from '@twa-dev/sdk';

const Main = () => {

    useEffect(() => {
        WebApp.setHeaderColor(WebApp.themeParams.section_bg_color);
        WebApp.setBackgroundColor(WebApp.themeParams.section_bg_color);
        WebApp.HapticFeedback.impactOccurred('light');
    }, []);

    const [isModal, setIsModal] = useState(false);
    const [foodData] = useState([
        {
            id: 1,
            name: 'Croutons',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/%D1%81routons.png',
        },
        {
            id: 2,
            name: 'Hot Dog',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/hot-dog.png',
        },
        {
            id: 3,
            name: 'Hamburger',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/hamburger.png',
        },
        {
            id: 4,
            name: 'Combo',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/combo.png',
        },
        {
            id: 5,
            name: 'Cheeseburger',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/cheeseburger.png',
        },
        {
            id: 6,
            name: 'Bigburger',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/bigburger.png',
        },
        {
            id: 7,
            name: 'Beer',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/beer.png',
        },
        {
            id: 8,
            name: 'Sauce',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/sauce.png',
        },
        {
            id: 9,
            name: 'Rustic Potatoes',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/potato-2.png',
        },
        {
            id: 10,
            name: 'Popcorn',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/popcorn.png',
        },
        {
            id: 11,
            name: 'Sandwich',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/sandwich.png',
        },
        {
            id: 12,
            name: 'Potato',
            image: 'https://2361c876-1c8a-48ba-af60-33de77210795.selstorage.ru/potato.png',
        }
    ]);

    const marketItems = foodData.map((foodItem) => (
        <Market
            key={foodItem.id}
            name={foodItem.name}
            image={foodItem.image}
            setIsModal={setIsModal}
        />
    ));

    return (
        <>
            <div className="search">
                <div className="mid">
                    <div className="search-input">
                        <input type="text" className="input" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="market">
                <div className="mid">
                    <div className="market-items">
                        {marketItems}
                    </div>
                </div>
            </div>
            {isModal && <Modal setIsModal={setIsModal} />}
        </>
    );
}

export default Main;