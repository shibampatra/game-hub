import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e74b7def8bbc4fcf8a2029ccd6523b00",
  },
});
