import React, { useState } from 'react';

const Card = ({ title, features, image }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <ul className="mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600">• {feature}</li>
          ))}
        </ul>
        <button
          onClick={handleLikeClick}
          className={`text-gray-500 ${liked ? 'scale-150 text-red-500' : ''} transition-transform duration-300`}
        >
          ♥
        </button>
      </div>
    </div>
  );
};

export default Card;
