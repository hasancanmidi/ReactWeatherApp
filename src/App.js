import axios from "axios";
import { useEffect } from "react";
import './App.css';


function App() {
  const key = "743a2127566e7854a14d9b9cfb77ec30";
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  },[])
  return <div className="App">HELLO</div>;

}

export default App;
