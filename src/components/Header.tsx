import React, { useContext } from "react";
import { Context } from "../context/Context";
import { CountryType } from "./CountriesList";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { counties, setCounties, refresh, setRefresh } = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();

    if (value) {
      const filteredData = counties.filter((item: CountryType) =>
        item.name.toLowerCase().includes(value)
      );
      setCounties(filteredData);
    } else {
      setRefresh(!refresh); 
    }
  };

  return (
    <header>
      <div className="flex justify-between items-center bg-blue-400 p-5">
        <h1 className="font-bold text-[30px]">{title}</h1>
        <div>
          <label htmlFor="search-input" className="sr-only">
            Search Countries
          </label>
          <input
            id="search-input"
            onChange={handleChange}
            className="p-2 w-[300px] rounded-md outline-none border-slate-600 text-[18px]"
            type="text"
            placeholder="Search countries..."
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
 