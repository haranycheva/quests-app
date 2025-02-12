import axios from "axios";

axios.defaults.baseURL = "https://hakaton-k3ih.onrender.com";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";

export const setAuthHeader = (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = ``;
};

export const signUpUser = async (user) => {
  const res = await axios.post("/auth/signup", user);

  setAuthHeader(res.data.accessToken);
  return res.data
};

export const signInUser = async (token, email) => {
    const res = await axios.post("/auth/login", {token, email});
    setAuthHeader(res.data.accessToken);
    return res.data
  };

export const createQuest = async(questData) => {
  const res = await axios.post("/quest/create", questData)
  return res.data
}

export const getUserQuest = async() => {
  const res = await axios.get("/quest/created-list")
  return res.data
}
