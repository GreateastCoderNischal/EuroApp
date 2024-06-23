import React from 'react';

const PlayerCard = ({ image,name }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-[270px]">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
            <img src={image} className='w-32 h-32'/>
        </div>
      </div>
      <div className="bg-gray-100 p-4 text-center">
        <div className="text-lg">{name}</div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          More Details
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
