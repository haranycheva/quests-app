import axios from "axios";

axios.defaults.baseURL = "https://hakaton-k3ih.onrender.com";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";

export const setAuthHeader = (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = ``;
};

export const signUpUser = async (user) => {
  const res = await axios.post("/auth/signup", user);

  setAuthHeader(res.data.accessToken);
  return res.data;
};

export const signInUser = async (token, email) => {
  const res = await axios.post("/auth/login", { token, email });
  setAuthHeader(res.data.accessToken);
  return res.data;
};

export const createQuest = async (questData) => {
  const res = await axios.post("/quest/create", questData);
  return res.data;
};

export const getUserQuest = async () => {
  const res = await axios.get("/quest/created-list");
  return res.data;
};

export const getQuestById = async (id) => {
  const res = await axios.get(`/quest/getInfo/${id}`);
  return res.data;
};

export const deleteQuestById = async (id) => {
  const res = await axios.delete(`/quest/remove/${id}`);
  return res.data;
};

export const getQuestTasks = async (id) => {
  const res = await axios.get(`/task/list/${id}`);
  return res.data;
};

export const addTaskForQuest = async (task) => {
  const res = await axios.post(`/task/create/`, task);
  return res.data;
};

export const getUserInfo = async () => {
  const res = await axios.get(`/user/getInfo/`);
  return res.data;
}
export const joinQuest = async (id) => {
  const res = await axios.post(`/quest/join/${id}`);
  return res.data;
}
export const checkIfJoined = async (id) => {
  const res = await axios.get(`/quest/checkUserJoined/${id}`);
  return res.data;
}