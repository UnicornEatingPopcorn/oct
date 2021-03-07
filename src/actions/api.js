import axios from "axios";

export default axios.create({
  baseURL: "https://partners.api.skyscanner.net/apiservices/",
  responseType: "json",
  headers: {
    "X-RapidAPI-Key": "27450a1543msh73ac2d7f3c4d610p17c16bjsn7e3cb9f74b4c",
    "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "Content-Type": "application/x-www-form-urlencoded",
    Credentials: true,
    useQueryString: true,
    "X-Forwarded-For": "95.220.3.115",
  },
});
