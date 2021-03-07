import api from "./api";

export const SkyscannerGetToken = async () => {
  let data = await api.get("token/v2/gettoken", {
    params: {
      apiKey: "ra66933236979928",
    },
    headers: {
      // apiKey: "27450a1543msh73ac2d7f3c4d610p17c16bjsn7e3cb9f74b4c",
      "X-RapidAPI-Host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded",
      Credentials: true,
    },
  });
  console.log(data);
};
