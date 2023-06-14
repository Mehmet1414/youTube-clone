import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
 params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '37a08d34bbmsh438dbd4fc7131eap126738jsn021f42fce1a1',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
