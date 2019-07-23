import axios from 'axios';

const appid = "a296ac97ed235ce1bb7927ede91f4b32";

export default axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  params: {
    appid: appid
  }
})