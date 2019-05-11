import Axios from 'axios';

// URL for BackEnd Server (API)
const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:6552';

// Get All Companies from DataBase
export const getAll = () => {
    return Axios.get(`${URL}/api/companies`);
}