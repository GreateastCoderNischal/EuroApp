import MatchCard from "./components/MatchCard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Data } from "./Api/data";
import { useEffect, useState } from "react";
import PlayerCard from "./components/PlayerCard";

export default function App() {
  const [category, setCategory] = useState('matches');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [active, setActive] = useState('All Matches')
  useEffect(() => {
    console.log(category)
    const fetchData = async () => {
      try {
        const response = await Data(category);
        if (Array.isArray(response)) {
          console.log("is array")
          setData(response);
        } else {
          console.error('Unexpected response format:', response);
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    };

    // fetchData();
  }, [category]);

  return (
    <div className="bg-zinc-800 w-full h-full">
      <Navbar />
      <div className="w-full flex h-auto">
        <Sidebar active={active} setActive={setActive} setCategory={setCategory} />
        <div className="w-full flex flex-wrap ml-8 mt-6 gap-4">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            data.map(item => {
              const date = item.date.split("T")[0];
              return (
                <MatchCard
                  key={item._id}
                  date={date}
                  image1={item.teamA?.team?.imageUrl}
                  image2={item.teamB?.team?.imageUrl}
                  team1={item.teamA?.team?.name}
                  team2={item.teamB?.team?.name}
                />
              );
            })
          )}
          <PlayerCard name={`Nischal Chhukan `} image={`https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-1/377485797_1639259179892873_919985276302674267_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-Opa7U_xfFYQ7kNvgHmPk4U&_nc_ht=scontent.fktm7-1.fna&oh=00_AYAwQr01Kco1k2MlFD3Qge3_ZbCQyyzexYyJ6IY0MjVXWQ&oe=667DDD73`} />
        </div>

      </div>
    </div>
  );
}
