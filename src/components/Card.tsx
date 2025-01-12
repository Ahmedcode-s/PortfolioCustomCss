import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import "../app/styles/card.css";

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Check window size on the client side
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth >= 640);
        };

        // Initial check and event listener
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`card ${isSmallScreen ? 'card-sm' : ''}`} data-aos="zoom-in-up">
            <div>
                <Image
                    className={`card-image ${isSmallScreen ? 'card-sm' : ''}`}
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>
            <div className='card-content'>
                <div className='card-title'>{title}</div>
                <div>{desc}</div>
                <div>
                    {tags.map((el) => (
                        <div className='card-tags' key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
