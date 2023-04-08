import "../css/main.css"
import request from "./request";
import "./mode"
import { createCountryInfo } from "./uptadeUi";

const quearyString=window.location.search
const urlParams=new URLSearchParams(quearyString)
const country=urlParams.get("country")
const countryAPI=`https://restcountries.com/v3.1/${country}`
console.log(countryAPI);

request(countryAPI).then((data)=>{
    createCountryInfo(data[0])
}).catch((err)=>{
    alert(err.message)
})