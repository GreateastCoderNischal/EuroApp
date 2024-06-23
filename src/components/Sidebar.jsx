import React from 'react';
import { FaFootballBall, FaUsers, FaList, FaUserFriends } from 'react-icons/fa';

const elements = [
  { "name": "All Matches", icon: <FaList /> },
  { "name": "All Players", icon: <FaUsers /> },
  { "name": "All Teams", icon: <FaFootballBall /> },
  { "name": "Groups", icon: <FaUserFriends /> },
]

const Sidebar = ({ active, setActive, setCategory }) => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-2">

      <ul className="space-y-2 curosr-pointer">
        {elements.map(item => {

          return (
            <li onClick={() => {
              setActive(item.name);
              let changedName = item.name.split(" ")
              let newName = changedName.length > 1 ? changedName[1] : changedName[0];
              setCategory(newName.toLowerCase());
            }} className='cursor-pointer font-bold font-main tracking-wide opacity-[0.3]' style={{
              opacity: active == item.name && 1
            }}>
              <span className="flex items-center space-x-2 p-2 hover:bg-gray-700">
                {item.icon}
                <span>{item.name}</span>
              </span>
            </li>)
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
