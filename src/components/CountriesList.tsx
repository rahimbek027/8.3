import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CountryItem from "./CountiesItem"; 
import { Context } from "../context/Context";

export interface CountryType {
  name: string;
  capital: string | null;
  img: string;
  flagIcon: string;
  population: number;
}

const CountriesList = () => {
  const { counties, setCounties, refresh } = useContext(Context);
  const [visibleCount, setVisibleCount] = useState(8); 

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const formattedData = response.data.splice(10, 30).map((item: any) => ({
          name: item.name.common,
          capital: item.capital ? item.capital[0] : "N/A",
          img: item.flags.png,
          flagIcon: item.flag,
          population: item.population,
        }));
        setCounties(formattedData);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };

    fetchCountries();
  }, [refresh, setCounties]);

  const showMoreItems = () => {
    setVisibleCount((prev) => prev + 4); 
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {counties.slice(0, visibleCount).map((item: CountryType) => (
          <CountryItem key={item.name} item={item} />
        ))}
      </div>
      {visibleCount < counties.length && (
        <div className="text-center mt-5">
          <button
            onClick={showMoreItems}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default CountriesList;
