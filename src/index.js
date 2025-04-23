import ReactDOM from "react-dom/client";
import './index.css';
import axios from "axios";
import { useState } from "react";
const root=ReactDOM.createRoot(document.getElementById("root"))
function One()
{
  const [one,setone]=useState()
  const [weather,setweather]=useState()
  const [temp,settemp]=useState()
  const [des,setdes]=useState()
  function o(e){
    setone(e.target.value)
  }
  function c()
  {
    var t=axios(`https://api.openweathermap.org/data/2.5/weather?q=${one}&appid=39b963c0ca0879332612083feaffc563`)
    t.then(function(msg){console.log(msg.data);setweather(msg.data.weather[0].main);
    settemp(msg.data.main.temp);
    setdes(msg.data.weather[0].description)}).catch(function(error){console.log("this is error")})
  }
  return(
    <div className="bg-sky-200 md:py-52 p-10  py-36 border rounded-md">
      <div className="bg-sky-600 ml-7 p-5 py-12 -mt-14  md:py-9 border rounded-md">
        <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-medium">Weather Report</h1>
        <p>I can give you a weather report about your city!</p>
        <input value={one} onChange={o} type="text" placeholder="Enter the country name" className="border outline-none p-1 rounded-md w-48"></input>
        <button onClick={c} className="bg-black text-white border rounded-md p-1 w-24">Get Report</button>
        <p className="text-1xl font-semibold">Weather:{weather}</p>
        <p className="text-1xl font-semibold">Temperature:{temp}</p>
        <p className="text-1xl font-semibold">Description:{des}</p>
        </div>
      </div>
    </div>
  )
}
root.render(<One/>)