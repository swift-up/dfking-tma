import React from 'react';

const Market = ({
    image,
    name,
    setIsModal,
}) => {

    const handleOpenModal = () => {
        setIsModal(true);
    }

    return (
        <div className="market-item">
            <div className="market-image">
                <img src={image} alt={name} />
            </div>
            <div className="market-title">
                <span>{name}</span>
            </div>
            <div className="market-button">
                <button className="button" onClick={() => handleOpenModal()}>
                    <span>Details</span>
                </button>
            </div>
        </div>
    );
}

export default Market;