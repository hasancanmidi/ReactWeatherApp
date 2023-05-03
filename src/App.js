import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import { City } from "./City";


function App() {
  const key = "743a2127566e7854a14d9b9cfb77ec30";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [search])
  return (
    <div className="App">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Placeholder"
        className="px-3 w-80 py-3 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" />
    <City city={city} />   
    </div>
    
  );
}

export default App;