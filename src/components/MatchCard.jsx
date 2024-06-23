import React from 'react';

const MatchCard = ({ team1, team2, image1, image2, date, time }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-[242px]">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={image1} alt={`${team1} logo`} className="w-16 h-16 mr-4" />
          <div className="text-center">
            <h3 className="text-xl font-bold">{team1}</h3>
          </div>
        </div>
        <div className="text-center text-2xl font-bold mx-2">VS</div>
        <div className="flex items-center">
          <div className="text-center">
            <h3 className="text-xl font-bold">{team2}</h3>
          </div>
          <img src={image2} alt={`${team2} logo`} className="w-16 h-16 ml-4" />
        </div>
      </div>
      <div className="bg-gray-100 p-4 text-center">
        <div className="text-lg">{date}</div>
        <div className="text-lg">{time}</div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          More Details
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
