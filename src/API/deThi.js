import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_BACKEND_API;

const deThi = {
  addDeThi: async ({ ...data }) => {
    const url = API_BASE_URL + "/deThi/add";
    return await axios.post(url, data);
  },
  getList: async () => {
    const url = API_BASE_URL + "/deThi/getList";
    return await axios.get(url);
  },
  getMaDe: async ({ maDe }) => {
    const url = API_BASE_URL + `/deThi/${maDe}`;
    return await axios.get(url);
  },

  delete: async (maDe) => {
    const url = API_BASE_URL + `/deThi/${maDe}`;
    return await axios.delete(url);
  },
  edit: async ({ ...deThi }) => {
    const url = API_BASE_URL + `/deThi/${deThi._id}`;
    return await axios.put(url, deThi);
  },
};

export default deThi;
