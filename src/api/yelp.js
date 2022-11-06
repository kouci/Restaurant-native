import axios from "axios";

export default axios.create({
   baseURL: "https://api.yelp.com/v3/businesses",
      headers: {
         Authorization: "Bearer ISyHIfZwwcsau9CTtyjCHhdXCGm9MkSq-9SX1Juzro2fyGz8_Ww_YbZp25IlaYDSN0-WyNQXrRhq6rbv2LwMh6w2j6cCRVsWc4J1CEDyGLrHb1k-hLlJDGJbK2ZiY3Yx"
      }
});
