import React from "react";

const Card = ({ key, title, link, image = null, content}) => {
    image ??= 'https://i.ibb.co/TLr4LbN/waterbottle.png';
    return (
        <a target="_blank" href={link} className="card-image w-72 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 text-white p-4 shadow-2xl">
            <div >
                <img
                    src={image}
                    alt="Glacier Water"
                    className="img w-full  border rounded-sm border-white/20 h-48 object-contain mb-4"
                />
                <div className="text-sm uppercase tracking-wide text-gray-300">
                   <a target="_blank" href={link}>{title}</a>
                </div>
                <div className=" py-4 card-summary  text-xl font-semibold leading-tight mb-1">{content}</div>
            </div>
        </a>
    );
};

export default Card;