import React, { useEffect, useState, useRef, useCallback } from 'react';
import Lottie from 'lottie-react';
import HotDog from '../../animation/hotdog.json';
import WebApp from '@twa-dev/sdk';

const Modal = ({
    setIsModal,
}) => {

    const swipeElement = useRef(null);
    const [startY, setStartY] = useState(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        WebApp.MainButton.setText('I understood');
        WebApp.onEvent('mainButtonClicked', handleCloseModal);
        WebApp.MainButton.show();
        return () => {
            WebApp.MainButton.hide();
            WebApp.offEvent('mainButtonClicked', handleCloseModal);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const handleTouchMove = (e) => {
            e.preventDefault();
        };
        const element = swipeElement.current;
        element.addEventListener('touchmove', handleTouchMove, { passive: false });
        return () => {
            element.removeEventListener('touchmove', handleTouchMove);
        };
    }, [startY, offsetY]);

    const handleTouchStart = useCallback((e) => {
        const touchStartY = e.touches[0].clientY;
        setStartY(touchStartY);
    }, []);

    const handleTouchMove = useCallback((e) => {
        if (startY == null) return;

        const currentY = e.touches[0].clientY;
        const diffY = currentY - startY;
        if (diffY < 0) return;

        setOffsetY(diffY);
    }, [startY]);

    const handleTouchEnd = useCallback(() => {
        if (offsetY > 100) {
            setIsModal(false);
        }
        setOffsetY(0);
        setStartY(null);
    }, [offsetY, setIsModal]);

    const handleCloseModal = () => {
        setIsModal(false);
    }

    return (
        <div className="modal">
            <div
                className="modal-container"
                style={{ transform: `translateY(${offsetY}px)` }}
                ref={swipeElement}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="mid">
                    <div className="modal-header">
                        <div className="modal-close" onClick={() => handleCloseModal()}>
                            <span>✕</span>
                        </div>
                        <div className="modal-title">
                            <span>Details</span>
                        </div>
                    </div>
                    <div className="modal-content">
                        <div className="modal-image">
                            <Lottie animationData={HotDog} loop={true} />
                        </div>
                        <div className="modal-description">
                            <p>A hot dog is a dish consisting of a fried or steamed sausage served in a cut bun. The word "hot dog" can also refer to the sausage itself. A Vienna sausage or frankfurter is used. The names of these sausages also usually refer to the dish in which they are assembled.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;