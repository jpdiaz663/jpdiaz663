import React from "react";
// PropTypes library for runtime type checking
import PropTypes from "prop-types";

const Card = ({ title, link, image = null, content}) => {
    image ??= 'https://i.ibb.co/TLr4LbN/waterbottle.png';
    return (
        <a target="_blank" rel="noopener noreferrer" href={link} className="card-image w-72 rounded-3xl backdrop-blur-xl bg-white/10 text-white p-4 shadow-2xl">
            <div >
                <img
                    src={image}
                    alt={title || "Project image"}
                    className="img w-full  border rounded-sm border-white/20 h-48 object-contain mb-4"
                />
                <div className="text-sm uppercase tracking-wide text-gray-300">
                   <a target="_blank" rel="noopener noreferrer" href={link}>{title}</a>
                </div>
                <div className=" py-4 card-summary  text-xl font-semibold leading-tight mb-1">{content}</div>
            </div>
        </a>
    );
};

// PropTypes validation for Card component
Card.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string,
    content: PropTypes.string.isRequired
};

export default Card;